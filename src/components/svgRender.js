import React from 'react';
import { ContentContainer } from '../styles';
import { graphql } from 'gatsby';





export const SvgRender = ({ content, manualInput }) => {
  //Creates Svg Selector Variable
  const SvgSelector = content.content[0];
  
  switch(SvgSelector.codeId || manualInput){
    //Blog Curve
    case 'blog_curve':
      return <ContentContainer $SvgContainer 
              className={SvgSelector.codeId || manualInput || ''}>  
              
            </ContentContainer>
    //Chef Hat
    case 'chef_hat_svg':
      return <ContentContainer $SvgContainer 
              className={SvgSelector.codeId || manualInput || ''}>
  
            </ContentContainer>
    //Bowl
    case 'bowl_svg':
      return <ContentContainer $SvgContainer 
              className={SvgSelector.codeId || manualInput || ''}>
        
            </ContentContainer>
    //Fork & Knife
    case 'fork_and_knife':
      return <ContentContainer $SvgContainer 
              className={SvgSelector.codeId || manualInput || ''}>
              
            </ContentContainer>
    //Plate
    case 'plate':
      return <ContentContainer $SvgContainer 
              className={SvgSelector.codeId || manualInput || ''}>

            </ContentContainer>
    //Reliability 
    case 'reliability_svg':
      return <ContentContainer $SvgContainer 
              className={SvgSelector.codeId || manualInput || ''}>
          
            </ContentContainer>
    //Server
    case 'server_svg':
      return <ContentContainer $SvgContainer 
              className={SvgSelector.codeId || manualInput || ''}>

            </ContentContainer>
    //Shipping Container
    case 'shipping_box':
      return <ContentContainer $SvgContainer 
              className={SvgSelector.codeId || manualInput || ''}>
          
            </ContentContainer>
    //Tent 
    case 'tent':
      return <ContentContainer $SvgContainer
              className={SvgSelector.codeId || manualInput || ''}>
            </ContentContainer>
    //Orange Truck With No Logo
    case 'truck_no_logo':
      return <ContentContainer $SvgContainer 
              className={SvgSelector.codeId || manualInput || ''}>
          
            </ContentContainer>
    //Review Bubble
    case 'review_bubble':
      return <ContentContainer $SvgContainer 
              className={SvgSelector.codeId || manualInput || ''}>
            
            </ContentContainer>
    default: 
      return null;
  }

}
export const query = graphql`
  fragment SVG on ContentfulMedia{
    codeId
    contentful_id
    externalName
  }
`