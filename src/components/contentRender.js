import React, { Fragment } from 'react';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { MARKS, BLOCKS, INLINES } from "@contentful/rich-text-types"
import { BlockQuote, BoldText, Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, Paragraph, StrikeThroughText, UnderlineText, OList, UList, LItem, ItalicText, MediaContainer,  NavLink } from '../styles';
import { GatsbyImage } from 'gatsby-plugin-image';



export const RichTextRender = ({ content, references }) => {
  // Gets the rich Text no matter what the input from data is.
  const richTextData = content || null;

  //Variables For Rich Text
  const Headline1 = ({ children }) => <Heading1 $BlogHeading1>{children}</Heading1>;
  const Headline2 = ({ children }) => <Heading2 $BlogHeading2>{children}</Heading2>;
  const Headline3 = ({ children }) => <Heading3 $BlogHeading3>{children}</Heading3>;
  const Headline4 = ({ children }) => <Heading4 $BlogHeading4>{children}</Heading4>;
  const Headline5 = ({ children }) => <Heading5 $BlogHeading5>{children}</Heading5>;
  const Headline6 = ({ children }) => <Heading6 $BlogHeading6>{children}</Heading6>;
  const Text = ({ children }) => <Paragraph $BlogParagraph>{children}</Paragraph>;
  const Bold = ({ children }) => <BoldText $BlogBoldText>{children}</BoldText>;
  const Italics = ({ children }) => <ItalicText $BlogItalics>{children}</ItalicText>;
  const Underline = ({ children }) => <UnderlineText $BlogUnderline>{children}</UnderlineText>;
  const Strikethrough = ({ children }) => <StrikeThroughText $BlogStrikeThrough>{children}</StrikeThroughText>;
  const Code = ({ children }) => <code>{children}</code>;
  const Blockquote = ({ children }) => <BlockQuote $BlogQuote>{children}</BlockQuote>;
  const OrderedList = ({ children }) => <OList $BlogOList>{children}</OList>;
  const UnorderedList = ({ children }) => <UList $BlogUlList>{children}</UList>;
  const ListItem = ({ children }) => <LItem $BlogListItem>{children}</LItem>;
  const Hyperlink = ({ children, node }) => (
    <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
  const EntryHyperlink = ({ children, node }) => {
    // Log the entire node to inspect its structure
    console.log("EntryHyperlink - Node Data:", node);

    // Validate node structure and retrieve entryId
    if (!node.data || !node.data.target || !node.data.target.sys) {
      console.error("EntryHyperlink - Invalid node structure:", node);
      return <span style={{ color: 'red' }}>Invalid node structure</span>;
    }

    const entryId = node.data.target.sys.id || '';
    // Log the entryId to ensure it is retrieved correctly
    console.log("EntryHyperlink - Entry ID:", entryId);

    // Find the corresponding reference entry
    const entry = references.find(ref => ref.contentful_id === entryId) || '';

    if (!entry) {
      console.error("EntryHyperlink - Entry not found for ID:", entryId);
      return <span style={{ color: 'red' }}>Entry not found for ID: {entryId}</span>;
    }

    const entryUrl = `/news-and-stories/${entry.slug}` || ''; // Adjust the URL based on your routing structure
    return (
      <NavLink className="entry_link" to={entryUrl}>
        {children}
      </NavLink>
    );
  };

  const EmbeddedAsset = ({ node }) => {

  };
  const Table = ({ children }) => <table>{children}</table>;
  const TableRow = ({ children }) => <tr>{children}</tr>;
  const TableCell = ({ children }) => <td>{children}</td>;
  
  
  //Options for rich Text Rendering
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <Bold>{text}</Bold>,
      [MARKS.ITALIC]: text => <Italics>{text}</Italics>,
      [MARKS.UNDERLINE]: text => <Underline>{text}</Underline>,
      [MARKS.STRIKETHROUGH]: text => <Strikethrough>{text}</Strikethrough>,
      [MARKS.CODE]: text => <Code>{text}</Code>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => { 
        const isListItem = node.parent && node.parent.nodeType === 'list-item';
        return isListItem ? <Fragment>{children}</Fragment> : <p>{children}</p>;
      },
      [BLOCKS.HEADING_1]: (node, children) => <Headline1>{children}</Headline1>,
      [BLOCKS.HEADING_2]: (node, children) => <Headline2>{children}</Headline2>,
      [BLOCKS.HEADING_3]: (node, children) => <Headline3>{children}</Headline3>,
      [BLOCKS.HEADING_4]: (node, children) => <Headline4>{children}</Headline4>,
      [BLOCKS.HEADING_5]: (node, children) => <Headline5>{children}</Headline5>,
      [BLOCKS.HEADING_6]: (node, children) => <Headline6>{children}</Headline6>,
      [BLOCKS.QUOTE]: (node, children) => <Blockquote>{children}</Blockquote>,
      [BLOCKS.OL]: (node, children) => <OrderedList>{children}</OrderedList>,
      [BLOCKS.UL]: (node, children) => <UnorderedList>{children}</UnorderedList>,
      [BLOCKS.LIST_ITEM]: (node, children) => {
        return (
          <ListItem>
            {children.map((child, index) => {
              // Flatten nested paragraph nodes within list items
              if (child.type === 'p') {
                return <Fragment key={index}>{child.props.children}</Fragment>;
              }
              return child;
            })}
          </ListItem>
        );
      }/* <ListItem>{children}</ListItem> */,
      [BLOCKS.HYPERLINK]: Hyperlink,
      [INLINES.ENTRY_HYPERLINK]: (node, children) => <EntryHyperlink node={node}>{children}</EntryHyperlink>,
      [BLOCKS.EMBEDDED_ASSET]: EmbeddedAsset,
      [BLOCKS.TABLE]: (node, children) => <Table>{children}</Table>,
      [BLOCKS.TABLE_ROW]: (node, children) => <TableRow>{children}</TableRow>,
      [BLOCKS.TABLE_CELL]: (node, children) => <TableCell>{children}</TableCell>,
      [BLOCKS.HR]: () => <hr />,
      'text': (node) => {
        // Render text nodes directly
        return node.value;
      },
      "embedded-asset-block": node => {
        const { gatsbyImageData } = node.data.target
        if (!gatsbyImageData) {
          // asset is not an image
          return null
        }
        return <MediaContainer className='rich_text_image'>
                <GatsbyImage 
                  image={gatsbyImageData} 
                  alt='' 
                  className="full-width"  
                />
              </MediaContainer>
      },
    },
  };
  return (
    <>
      {richTextData && renderRichText(richTextData,options)}
    </>
  )
}