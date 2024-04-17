import React from 'react';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { MARKS, BLOCKS } from "@contentful/rich-text-types"
import { BlockQuote, BoldText, Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, Paragraph, StrikeThroughText, UnderlineText, OList, UList, LItem, ItalicText } from '../styles';


export const RichTextRender = ({ content }) => {
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
  const EmbeddedAsset = ({ node }) => {
    return (
      <>
        <h2>Embedded Asset</h2>
        <pre>
          <code>{JSON.stringify(node, null, 2)}</code>
        </pre>
      </>
    );
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
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [BLOCKS.HEADING_1]: (node, children) => <Headline1>{children}</Headline1>,
      [BLOCKS.HEADING_2]: (node, children) => <Headline2>{children}</Headline2>,
      [BLOCKS.HEADING_3]: (node, children) => <Headline3>{children}</Headline3>,
      [BLOCKS.HEADING_4]: (node, children) => <Headline4>{children}</Headline4>,
      [BLOCKS.HEADING_5]: (node, children) => <Headline5>{children}</Headline5>,
      [BLOCKS.HEADING_6]: (node, children) => <Headline6>{children}</Headline6>,
      [BLOCKS.QUOTE]: (node, children) => <Blockquote>{children}</Blockquote>,
      [BLOCKS.OL]: (node, children) => <OrderedList>{children}</OrderedList>,
      [BLOCKS.UL]: (node, children) => <UnorderedList>{children}</UnorderedList>,
      [BLOCKS.LIST_ITEM]: (node, children) => <ListItem>{children}</ListItem>,
      [BLOCKS.HYPERLINK]: Hyperlink,
      [BLOCKS.EMBEDDED_ASSET]: EmbeddedAsset,
      [BLOCKS.TABLE]: (node, children) => <Table>{children}</Table>,
      [BLOCKS.TABLE_ROW]: (node, children) => <TableRow>{children}</TableRow>,
      [BLOCKS.TABLE_CELL]: (node, children) => <TableCell>{children}</TableCell>,
      [BLOCKS.HR]: () => <hr />,
    },
  };
  return (
    <>
      {richTextData && renderRichText(richTextData,options)}
    </>
  )
}