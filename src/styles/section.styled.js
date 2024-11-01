import styled from 'styled-components';
import { BackgroundContainer, CardsContainer, ContentContainer, FeatureContainer, MediaContainer, TextContainer } from './contentContainers.styled';
import { Display, Heading1, Heading2, Heading3, Heading4, Overline, Paragraph } from './typography.styled';
import { Card } from './card.styled';
import { IconContainer } from './icons.styled';
import { ButtonContainer, ButtonPageLink, ButtonLink } from './button.styled';
import { NavLink } from './header.styled';
import { Iframe, IframeContainer } from './iframe.styled';
import { Form } from './form.styled';
import { Pagination } from './pagination.styled';
import { Tag } from './tag.styled';


export const Section = styled.section.attrs(props => ({
  type:'section',
}))`
/* Default Styles Start */
  display: grid;
  grid-template-columns: inherit;
  grid-gap: 1em 1em;
  grid-column: 1/15;
  @media ${({theme}) => theme.breakpoints.tablet}{
    grid-template-columns: ${({theme}) => theme.layout.tablet};
    grid-column: 1/9;
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    grid-template-columns: ${({theme}) => theme.layout.mobile};
    grid-column: 1/7;
  }
/* Default Styles End */

/* Homepage Styles Start */
  &.feature_donate_section{
    grid-column: 1/15;
    padding: 5em 1em;
    justify-self:center;
    align-items:center;
    width: 100%;
    color: ${({theme}) => theme.shades._900};
    background-image: linear-gradient(
      to bottom right,
      ${({theme}) => theme.colors.primary},
      ${({theme}) => theme.shades._50},
      ${({theme}) => theme.colors.tertiary}
    );

    .donate_feature_media{
      grid-column: 2/9;
      grid-row: 1/2;
      position:relative;
      aspect-ratio: 2/1.5;
      overflow: hidden;
      position: relative;
    }
    .donate_feature_text_container{
      grid-column: 10/14;
      grid-row: 1/2;
      position: relative;
      z-index: 5;

      .hot_donate_feature_button-con{
        width: fit-content;
      }
    }
    
    @media ${({theme}) => theme.breakpoints.tablet}{
      grid-column: 1/9;
      
      .donate_feature_media{
        grid-column: 2/8;
        grid-row: 1/2;
        z-index: 2;
      }
      .donate_feature_text_container{
        grid-column: 2/8;
        grid-row: 2/3;
        z-index: 1;
        padding-top: 1em;
      }
    }
    @media ${({theme}) => theme.breakpoints.mobile}{
      grid-column: 1/7;
      .donate_feature_media{
      grid-column: 2/6;
    }
    .donate_feature_text_container{
      grid-column: 2/6; 
    }
    }
  }
  &.the_latest_section{   
    box-sizing: border-box;
    overflow: hidden;
    background: ${({theme}) => theme.shades._100};
    .latest_bg_container{
     grid-row: 1/3;
     grid-column: 1/15;
    }
    .stay_updated_display{
      grid-row: 1/2;
      grid-column: 1/15;
      position:relative;
      z-index:1;
      justify-self:center;
      align-self:absolute;
      overflow: hidden;
      justify-content: center;
      align-items: center;
      height: 500px;
      display:none;
      
      ${Display}{
        font-size: 18vw !important;
        color: ${({theme}) => theme.shades._300};
        opacity: .1;
      }
    }
    .the_latest_text{
      grid-row: 1/2;
      grid-column: 2/7;
      position:relative;
      z-index: 2;
      justify-self: start;
      align-self: center;
      margin-top: 5em;
    }
    .latest_feature_container{
      grid-row: 2/3;
      grid-column: 2/14;
      display:flex;
      flex-flow: column nowrap;
      box-sizing: border-box;
      padding: 1em;
      gap: 2em 0em;
      margin-bottom: 5em;
      position: relative;
      z-index: 2;

      .the_latest_switch_container{
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items:center;
        box-sizing: border-box;
        border-bottom: 2px solid ${({theme}) => theme.colors.tertiary};
        padding: 1em 0em;

        .selector_button{
          font-size: ${({theme}) => theme.font_size.body_medium};
        }

        .active{
          background: ${({theme}) => theme.colors.primary};
          color: ${({theme}) => theme.shades._50};
          border-radius: .5em;
        }
      }
      .news_and_stories_feature,
      .projects_feature,
      .events_feature{
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 2em 2em;

        .feature_cards_container{
          gap: 2em;
          grid-template-columns: repeat(auto-fit, minmax(300px,max-content));
          grid-auto-rows: auto auto auto;
          grid-auto-flow: row;
          width: 100%;
          justify-content: start;
          align-content: start;

          ${Card}{
            display: grid;
            grid-template-row: 1fr;
            grid-template-column: 1fr;
            aspect-ratio: 2/1.5;
            border-radius: .5em;
            overflow:hidden;
            position:relative;
            width: 100%;    

            .card_link{
              grid-column: 1/2;
              grid-row: 1/2;
              position: relative;
              z-index: 1;
              
            }
            @media ${({theme}) => theme.breakpoints.desktop}{
              max-width: 492px;
            }
            
            ${MediaContainer}{
              grid-row: 1/2;
              grid-column: 1/2;
              position:relative;
              z-index: 1;
              width: 100%;
              border-radius: 0em !important;
              box-shadow: none !important;
              aspect-ratio: 2/1.5;
              pointer-events: none;

              .full_image{
                border-radius: 0em !important;
              }
            }
            ${TextContainer}{
              grid-column: 1/2;
              grid-row: 1/2;
              position:relative;
              z-index: 2;
              justify-self: start;
              align-self: end;
              padding: 2em;
              color: ${({theme}) => theme.shades._50};
              box-sizing: border-box;
              width: 100%;
              pointer-events: none;

              ${Heading3}{
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                font-size: clamp(1.2rem, 5vw, 1.4rem);
              }
              ${NavLink}{
                color: inherit;
                font-weight:600;
              }
            }
          }
          ${Card}:before{
            content: '';
            position: absolute; 
            width:100%;
            height:100%;
            top:0;
            z-index: 2;
            pointer-events: none;
            background-image: linear-gradient(
              rgba(0,0,0,.1),
              rgba(0,0,0,.7)
            );
          }
        }
      }
    }
    @media ${({theme}) => theme.breakpoints.tablet}{
      grid-column: 1/9;
      .latest_bg_container{
        grid-row: 1/4;
        grid-column: 1/9;
      }
      .stay_updated_display{
        grid-column: 1/9;
        box-sizing: border-box;
      }
      .the_latest_text{
        grid-column: 2/8;
      }
      .latest_feature_container{
        grid-column: 2/8;
        grid-row: 3/4;
        margin-bottom: 3em;
        padding: 0em;

        .the_latest_switch_container{
          flex-flow: row nowrap;
          justify-content: center;
          align-items:center;

          .selector_button{
            height: auto;
            flex: 1 1 10%;
            padding: 1em 1.5em;
          }
        }
      }
        .news_and_stories_feature,
        .projects_feature,
        .events_feature{  

          & .feature_cards_container{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)) !important;
            grid-auto-rows: auto auto auto;
            grid-auto-flow: row;

            ${Card}{
              aspect-ratio: 2/1.5 !important;
              border-radius: .25em;
              overflow:hidden;

              .latest_feature_image{
                width: 100%;
                .full_image{
                  border-radius: .5em !important;
                }
              }

              ${TextContainer}{
                padding: 1em;
                ${NavLink}{
                  font-size: ${({theme}) => theme.font_size.body_medium};
                }
              } 
            }
            ${Card}:first-child{ 
              grid-column: span / 2;
            }
          }
        }
    }
    @media ${({theme}) => theme.breakpoints.mobile}{
     grid-column: 1/7;

      .latest_bg_container{
        grid-row: 1/4;
        grid-column: 1/7;
      }
      .stay_updated_display{
        grid-column: 1/7;
        grid-row: 1/2;
        height: 100px;
        margin-top: 3em;
      }
      .the_latest_text{
        grid-column: 2/6;
        grid-row: 2/3;
        margin-top: 2em;
      }
      .latest_feature_container{
        grid-column: 2/6;
        grid-row: 3/4;
        margin-bottom: 3em;
        padding: 0em;
        flex-flow: column nowrap;

        .the_latest_switch_container{
         padding: 1em 1em;
          
          .selector_button{
            font-size: ${({theme}) => theme.font_size.caption_medium};
          }
        }
        .news_and_stories_feature,
        .projects_feature,
        .events_feature{
          width: 100%;   

          .feature_cards_container{
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) !important;
            ${Card}{
              width:100%;
              aspect-ratio: 2/1 !important;
              border-radius: .25em;
              overflow:hidden;
              grid-column: span 2;

              .latest_feature_image{
                width: 100%;

              .full_image{
                border-radius: .5em !important;
              }
              }
              ${TextContainer}{
                padding: 1em;
              } 
            }
            
          }
        }
      }
    }
  }
  &.what_cypress_does{
    background-image: linear-gradient(
      ${({theme}) => theme.colors.primary},
      ${({theme}) => theme.colors.tertiary} 
    );
    overflow: hidden;
    gap: 5em 1em;
    position:relative;

    .mesh_bg_image_container{
      grid-column: 1/15;
      grid-row: 1/3;
      position:relative;
      z-index: 1;
    }
    .what_we_do_text{
      grid-row: 1/2;
      grid-column: 6/10;
      justify-self:center;
      align-self:center;
      margin-top: 5em; 
      position:relative;  
      z-index: 2;
      justify-content: flex-start;
      align-items:center;
      text-align:center;
      color: ${({theme}) => theme.shades._50};
    }
    .what_we_do_cards_container{
      grid-row: 2/3;
      grid-column: 2/14;
      margin-bottom: 5em;
      position:relative;
      z-index: 2;
      gap: 1em 2em;
      box-sizing: border-box;
      color: ${({theme}) => theme.shades._50};
      flex-flow: row wrap;

     & > ${Card}{
        flex: 1 1 20%;
        background: transparent;
        flex-flow: column;
        justify-content:flex-start;
        align-items:center;
        font-size: 5em;
        gap: .1em !important;

        ${IconContainer}{
          display:flex;
        }
        & > ${TextContainer}{
          text-align:center;
          justify-content:flex-start;
          align-items: center;
          gap: .1em;
        }
      }
    }
    @media ${({theme}) => theme.breakpoints.tablet}{
      grid-column: 1/9;
      .mesh_bg_image_container{
        grid-row: 1/4;
        grid-column: 1/9;
      }
      .what_we_do_text{
        grid-column: 2/8;
      }
      .what_we_do_cards_container{
        grid-column:2/8;
        grid-row:2/3;

        ${Card}{
          flex: 1 1 35%;
        }
      }
    }
    @media ${({theme}) => theme.breakpoints.mobile}{
      grid-column:1/7;
      gap: 2em 1em;

      .mesh_bg_image_container{
        grid-row: 1/3;
        grid-column: 1/7;
      }
      .what_we_do_text{
        grid-column: 2/6;
        grid-row: 1/2;
        margin-top: 3em;
      }
      .what_we_do_cards_container{
        grid-column: 2/6;
        flex-flow: column nowrap;
        margin-bottom: 3em;
      }
    }
  }
  &.get_involved_feature_section{
    padding: 5em 0em;
    gap: 2em 1em;
    .get_involved_display{
      grid-row: 1/2;
      grid-column: 1/15;
      display: none;
    }
    .get_involved_text{
      grid-row: 1/2;
      grid-column: 2/7;
      justify-self: start;
      align-self: end;
    }
    .get_involved_donate_media{
      grid-row: 2/3;
      grid-column: 1/12;
      border-radius: 0em 1em 1em 0em;
      .full_image{
        border-radius: inherit;
      }
    }
    .get_involved_feature_donate_text{
      grid-row: 2/3;
      grid-column: 9/14;
      position: relative;
      z-index:2;
    }
    .get_involved_feature_donate_display{
      grid-row: 3/4;
      grid-column: 1/15;
      align-self: start;
    }
    .get_involved_feature_volunteer_media{
      grid-row: 4/5;
      grid-column: 4/15;
      border-radius: 1em 0em 0em 1em;
      .full_image{
        border-radius: inherit;
      }
    }
    .get_involved_feature_volunteer_text{
      grid-row: 4/5;
      grid-column: 2/7;
    }
    .get_involved_feature_volunteer_display{
      grid-row: 5/6;
      grid-column: 1/15;
    }
    .get_involved_feature_donate_text,
    .get_involved_feature_volunteer_text{
      position: relative;
      z-index: 2;
      justify-self: start;
      align-self: center;
      padding: 1em 2em;
      background: ${({theme}) => theme.shades._50};
      border-radius: 1em;
      border: 4px solid ${({theme}) => theme.colors.primary};
    }
    .get_involved_donate_media,
    .get_involved_feature_volunteer_media{
      aspect-ratio: 5/3; 
      position: relative;
      z-index: 1;
      box-shadow: none;
      justify-self: center;
      align-self: center;
      width: 100%;
    }
    .get_involved_feature_donate_display,
    .get_involved_feature_volunteer_display,
    .get_involved_display{
      position:relative;
      z-index:1;
      justify-self:center;
      align-self:absolute;
      overflow: hidden;
      justify-content: center;
      align-items: center;
      height: 350px;
      
      ${Display}{
        font-size: 18vw !important;
        color: ${({theme}) => theme.shades._300};
        opacity: .1;
      }
    }
    @media ${({theme}) => theme.breakpoints.tablet}{
      grid-column: 1/9;

      .get_involved_display{
        grid-column: 1/9;
        grid-row: 1/2;
        display:none;     
      }
      .get_involved_text{
        grid-column: 2/7;
        grid-row: 2/3;
      }
      .get_involved_donate_media{
        grid-row: 4/5;
        grid-column: 1/8;     
      }
      .get_involved_feature_donate_text{
        grid-row: 5/6;
        grid-column: 2/8;
        position: relative;
        z-index:2;
      }
      .get_involved_feature_donate_display{
        grid-row: 3/4;
        grid-column: 1/9;
        padding-left: 1em;
        justify-self: start;
        align-self: center;
        max-height: 300px;
        height: 10vh;
        margin-top: 2em;
      }
      .get_involved_feature_volunteer_media{
        grid-row: 7/8;
        grid-column: 2/9;
        border-radius: 1em 0em 0em 1em;
        .full_image{
          border-radius: inherit;
        }
      }
      .get_involved_feature_volunteer_text{
        grid-row: 8/9;
        grid-column: 2/8;
      }
      .get_involved_feature_volunteer_display{
        grid-row: 6/7;
        grid-column: 1/9;
        height: 10vh;
        max-height: 250px;
        justify-self: end;
        align-self: end;
        margin-top: 2em;
      }
    }        
    @media ${({theme}) => theme.breakpoints.mobile}{
      grid-column: 1/7;
      padding: 2.5em 0em;
      gap: 1em;
      
      .get_involved_display{
        grid-column: 1/7;
        grid-row: 1/2;
        justify-self:center;
        align-self:center;
        height: 100px;
      }
      .get_involved_text{
        grid-column: 2/6;
        grid-row: 2/3;
      }
      .get_involved_donate_media{
        grid-row: 4/5;
        grid-column: 1/6; 
        border-radius: 0em .5em .5em 0em;
        border-left: 0px;    
      }
      .get_involved_feature_donate_text{
        grid-row: 5/6;
        grid-column: 2/7;
        position: relative;
        z-index:2;
        justify-self: end;
        align-self: end;
        padding: 1em 2em 1em 1em;
        border-right: 0px !important;
        border-radius: .5em 0em 0em .5em;
      }
      .get_involved_feature_donate_display{
        grid-row: 3/4;
        grid-column: 1/7;
        height: 100px;
        justify-self:start;
        padding-left: 1em;
      }
      .get_involved_feature_volunteer_media{
        grid-row: 7/8;
        grid-column: 2/7;
        border-radius: .5em 0em 0em .5em;
        .full_image{
          border-radius: inherit;
        }
      }
      .get_involved_feature_volunteer_text{
        grid-row: 8/9;
        grid-column: 1/6;
        justify-self: start;
        padding: 1em 1em 1em 2em;
        border-left: 0px !important;
        border-radius: 0em .5em .5em 0em;
      }
      .get_involved_feature_volunteer_display{
        grid-row: 6/7;
        grid-column: 1/7;
        height: 100px;
        justify-self: end;
        padding-right: 1em;
      }
    }  
  }
/* Homepage Styles End */

/* Our Work Styles Start */
  &.our_impact{
    grid-column: 1/15;
    gap: calc(2em * 2) 1em;
    background:${({theme}) => theme.shades._50};
    overflow: hidden;
    
    ${BackgroundContainer}{
      grid-column: 1/15;
      grid-row: 1/3;
      position:relative;
      z-index: 1;
    }

    & > ${TextContainer}{
          grid-column: 5/11;
          grid-row: 1/2;
          justify-self:center;
          align-items:center;
          text-align:center;
          margin-top: calc(${({theme}) => theme.sizes.x_large} * 2);
          position:relative;
          z-index:2;
        }
    & > ${CardsContainer}{
      grid-column: 3/13;
      grid-row: 2/3;
      margin-bottom: calc(${({theme}) => theme.sizes.x_large} * 2);
      gap: 1em 2em;
      position:relative;
      z-index: 2;

      ${Card}{
        border: 2px solid ${({theme}) => theme.shades._200};
        border-radius: ${({theme}) => theme.sizes.medium};
        background: ${({theme}) => theme.colors.secondary};
        flex-flow: column nowrap;
        justify-content:center;
        align-items:center;
        flex: 1 1 100%;
        padding: 2.5em 2em;
        gap: 1em;
        box-shadow: 0px 151px 42px 0px rgba(0, 0, 0, 0.00), 0px 97px 39px 0px rgba(0, 0, 0, 0.04), 0px 54px 33px 0px rgba(0, 0, 0, 0.12), 0px 24px 24px 0px rgba(0, 0, 0, 0.21), 0px 6px 13px 0px rgba(0, 0, 0, 0.24);
        
        ${TextContainer}{
          justify-content:center;
          align-items:center;
          text-align: center;
        }
      }
    }
      @media ${({theme}) => theme.breakpoints.tablet}{
        grid-column: 1/9;
        ${BackgroundContainer}{
          grid-column: 1/9;
        }
        ${TextContainer}{
          grid-column: 2/8;
          grid-row:1/2;  
        }
        ${CardsContainer}{
          grid-column: 3/7;
          flex-flow: column nowrap;
          ${Card}{
            padding: 1.5em 1em;
            justify-content: flex-start;
            gap: .5em;
            flex-flow: column wrap;
            ${IconContainer}{
              svg{
                aspect-ratio: 1/1;
                
              }
            }
            ${TextContainer}{
              p{
                margin-bottom: 0em;
              }
            }
          }
        }
        
      } 
      @media ${({theme}) => theme.breakpoints.mobile}{
        grid-column: 1/7;
        ${BackgroundContainer}{
          grid-column:1/7;
        }
        ${TextContainer}{
          grid-column: 2/6;
        }
        ${CardsContainer}{
          grid-column: 2/6;
          gap: 2em;
        }
      }
  }
  &.areas_of_reach_section{
      grid-column: 1/15;
      background: ${({theme}) => theme.colors.primary};
      gap: 2em 2em;
      position:relative;
      
    ${BackgroundContainer}{
        grid-column: 1/15;
        grid-row: 1/3;
        z-index: 1;
      }
    ${MediaContainer}{
        border: 2px solid ${({theme}) => theme.shades._400};
        position: relative;
        z-index: 2;
    }
    ${MediaContainer}:nth-child(2){
      grid-column: 2/7;
      grid-row: 1/2;
      aspect-ratio: 16/9;
      margin-top: calc(${({theme}) => theme.sizes.x_large} * 2);
      width: 100%;
      justify-self: center;
      align-self: stretch;
    }
    ${MediaContainer}:nth-child(3){
      grid-column: 2/5;
      grid-row: 2/3; 
      aspect-ratio: 5/4;
      width:100%;
    }
    ${MediaContainer}:nth-child(4){
      grid-column: 5/8;
      grid-row: 2/3;
      margin-bottom: calc(${({theme}) => theme.sizes.x_large} * 2); 
      aspect-ratio: 1/1;
    }
      
    & > ${TextContainer}{
      grid-column: 9/14;
      grid-row: 1/3;
      justify-self:center;
      align-self:center;
      color: ${({theme}) => theme.shades._50};
      margin:  calc(${({theme}) => theme.sizes.x_large} * 2) 0; 
      gap: .5em;
      position: relative;
      z-index: 2;
    }
    ${ContentContainer}{
      flex-flow: row nowrap;
      justify-content:center;
      align-items:center;
      gap: 1.5em;
      padding: 1em 2em;
      
    & > ${TextContainer}{
        gap: .5em;
        }
    }
    @media ${({theme}) => theme.breakpoints.tablet}{
      grid-column: 1/9;
      ${BackgroundContainer}{
        grid-column: 1/9;
        grid-row: 1/4;
        z-index: 1;
      }
      ${MediaContainer}{
          border: 2px solid ${({theme}) => theme.shades._400};
          position: relative;
          z-index: 2;
      }
      ${MediaContainer}:nth-child(2){
        grid-column: 2/8;
        grid-row: 2/3;
        aspect-ratio: 16/9;
        justify-self: center;
        align-self: center;
        margin-top: 0em;
      }
      ${MediaContainer}:nth-child(3){
        grid-column: 2/5;
        grid-row: 3/4; 
        aspect-ratio: 5/4;
        margin-bottom: calc(${({theme}) => theme.sizes.x_large} * 2); 
      }
      ${MediaContainer}:nth-child(4){
        grid-column: 5/8;
        grid-row: 3/4;
        margin-bottom: calc(${({theme}) => theme.sizes.x_large} * 2); 
        aspect-ratio: 1/1;
      }
      
      & > ${TextContainer}{
        grid-column: 2/8;
        grid-row: 1/2;
        margin-bottom: 0em;
      }
      ${ContentContainer}{
        flex-flow: row nowrap;
        justify-content:center;
        align-items:center;
        gap: 1.5em;
        padding: 1em 2em;
        
      & > ${TextContainer}{
          gap: .5em;
          p{
            margin-bottom: 0em;
          }
          }
      }
    }
    @media ${({theme}) => theme.breakpoints.mobile}{
      grid-column: 1/7;
      ${BackgroundContainer}{
        grid-column: 1/7;
        grid-row: 1/4;
        z-index: 1;
      }
      ${MediaContainer}{
          border: 2px solid ${({theme}) => theme.shades._400};
          position: relative;
          z-index: 2;
      }
      ${MediaContainer}:nth-child(2){
        grid-column: 2/6;
        grid-row: 2/3;
        aspect-ratio: 16/9;
        justify-self: center;
        align-self: center;
        margin-top: 0em;
      }
      ${MediaContainer}:nth-child(3){
      display: none;
      }
      ${MediaContainer}:nth-child(4){
        display:none;
      }
      
      & > ${TextContainer}{
        grid-column: 2/6;
        grid-row: 1/2;
        margin-bottom: 0em;
      }
      ${ContentContainer}{
        flex-flow: row nowrap;
        justify-content:center;
        align-items:center;
        gap: 1.5em;
        padding: 1em 2em;
        
      & > ${TextContainer}{
          gap: .5em;
          p{
            margin-bottom: 0em;
          }
          }
      }
    }
  }
  &.featured_projects{
    background:${({theme}) => theme.shades._100};
    grid-column: 1/15;
    padding: 5em 0em;
    gap: 1em;
    box-sizing: border-box;

    ${TextContainer}{
      grid-column: 2/8;
      grid-row: 1/2;
    }
    .featured_projects_button_container{
      grid-row: 1/2;
      grid-column: 10/14;
      ${ButtonPageLink}{
        width: 100%;
        min-width: 100%;
        justify-content: flex-end;
      }
    }
    ${FeatureContainer}{
      grid-row: 2/3;
      grid-column: 2/14;
      display: flex;
      gap: 1em;

      ${Card}{
       background: orange;
       aspect-ratio: 4/3;
       width: 100%;
       box-sizing: border-box;
       border-radius: .5em;
       display: grid;
       grid-template-columns: 1fr;
       grid-template-rows: 1fr;
       position: relative;
       overflow: hidden;


        ${NavLink}{
          grid-column: 1/2;
          grid-row: 1/2;
          position: relative;
          z-index: 4;
        }
        ${MediaContainer}{
          grid-row: 1/2;
          grid-column: 1/2;
          border-radius: .5em;
          position: relative;
          z-index: 1;
          .full_image{
            border-radius: .5em;
          }
        }
        .project_info{
          grid-column: 1/2;
          grid-row:1/2;
          z-index: 3;
          justify-self: start;
          align-self: end;
          margin: 1em;
          color: ${({theme}) => theme.shades._50};
          ${Heading3}{
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2; /* number of lines to show before truncating */
            -webkit-box-orient: vertical;
          } 
        }
      }
      ${Card}:after{
        content: '';
        width: 100%;
        height: 100%;
        position:absolute;
        z-index: 2;
        background-image: linear-gradient(
          rgba(0,0,0,0),
          rgba(0,0,0,.9)
        );
      }
    }
    @media ${({theme}) => theme.breakpoints.tablet}{
      grid-column: 1/9;
      padding: 2.5em 0em;

      ${TextContainer}{
        grid-column: 2/8;
        grid-row: 1/2;
      }
      .featured_projects_button_container{
        grid-row: 2/3;
        grid-column: 2/5;
        justify-self: start;
        align-self: start;

        ${ButtonPageLink}{
          justify-content:flex-start;
          align-items:center;
          width: auto;
        }
      }
      ${FeatureContainer}{
        grid-row: 3/4;
        grid-column: 2/8;
      

        ${Card}{
          display: grid;
          aspect-ratio: 4/3;

          ${NavLink}{
            grid-row: 1/2;
            grid-column: 1/2;
            position: relative;
            z-index: 3;
          }
          ${MediaContainer}{
            grid-row: 1/2;
            grid-column: 1/2;
            border-radius: .5em;
            position: relative;
            z-index: 1;
            .full_image{
              border-radius: .5em;
            }
          }
          .project_info{
         
          }
        }
      }
    } 
    @media ${({theme}) => theme.breakpoints.mobile}{
      grid-column: 1/7;
      padding: 2.5em 0em;

      ${TextContainer}{
        grid-column: 2/6;
        grid-row: 1/2;
      }
      .featured_projects_button_container{
        grid-row: 2/3;
        grid-column: 2/6;
      }
      ${FeatureContainer}{
        grid-row: 3/4;
        grid-column: 2/6;
        flex-flow: column;
        ${Card}{
          aspect-ratio: 4/2;
          ${NavLink}{
            grid-row: 1/2;
            grid-column: 1/2;
            position: relative;
            z-index: 3;
          }
          ${MediaContainer}{
            grid-row: 1/2;
            grid-column: 1/2;
            border-radius: .5em;
            .full_image{
              border-radius: .5em;
            }
          }
          .project_info{
            
          }
      }
    }
  }
  }

  &.local_feature_section{
    grid-column: 1/15;
    position:relative;
    ${TextContainer}{
      grid-column: 2/6;
      grid-row: 1/2;
      justify-self:center;
      align-self:center;
      padding: 1em 0em 1em 2em;
      border-left: .5em solid ${({theme}) => theme.shades._500};
      margin: 5em 0em;
    }
    ${IframeContainer}{
      grid-column: 8/14;
      grid-row:  1/2;
      aspect-ratio: 16/9;
      position:relative;
      width:100%;
      justify-self: center;
      align-self: center;
      margin: 5em 0;
      border-radius: 1em;
      overflow: hidden;
      ${Iframe}{
        position: absolute;
        top:0;
        bottom: 0;
        width: 100%;
        height: 100%;
        border-radius: 1em;
      }
    }
    @media ${({theme}) => theme.breakpoints.tablet}{
      grid-column: 1/9;
      ${TextContainer}{
        grid-column: 2/8;
        grid-row: 1/2;
        margin-bottom: 0em;
      } 
      ${IframeContainer}{
        grid-column: 2/8;
        grid-row: 2/3;
      }
    }
    @media ${({theme}) => theme.breakpoints.mobile}{
      grid-column: 1/7;
      ${TextContainer}{
        grid-column: 2/6;
        grid-row: 1/2;
        margin-bottom: 0em;
      } 
      ${IframeContainer}{
        grid-column: 2/6;
        grid-row: 2/3;
      }
    }
  }
    
/* Our Work Styles End */

/* Events Page Styles Start */
  &.events_page_section{
    grid-column: 1/15;
    padding: 5em 0em;

    ${CardsContainer}{
      grid-column:2/14;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(400px,1fr));
      grid-auto-rows: minmax(320px,auto);
      grid-auto-flow: dense;
      grid-gap: 2em;
      box-sizing: border-box;
      padding: 1em 1.5em;
      
      ${Card}{     
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        background: orange;
        border-radius: .5em;
        position: relative;
        overflow: hidden;

        ${NavLink},
        .event_card_image,
        .event_card_text,
        .event_card_date{
          grid-column: 1/2;
          grid-row: 1/2;
          position: relative;
        }
        ${NavLink}{
          z-index: 3;
        }
        .event_card_image{
          z-index: 1;
          position: relative;
          .full_image{
            position: absolute;
            width: 100%;
            height: 100%;
          }
        }
        .event_card_text{
          z-index: 3;
          justify-self: start;
          align-self: end;
          margin: 1em;
          color: ${({theme}) => theme.shades._50};

          ${Heading4}{
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2; 
            -webkit-box-orient: vertical;
          }
        }
        .event_card_date{
          z-index: 3;
          margin-left: 1em;
          display: flex;
          flex-flow: column;
          justify-content: center;
          align-items: center;
          padding: 1em;
          text-align: center;
          justify-self: start;
          align-self: start;
          background: ${({theme}) => theme.colors.tertiary};
          border-radius: 0em 0em .5em .5em;
          border: 2px solid ${({theme}) => theme.colors.primary};
          border-top: 0px;
        }
      }
      ${Card}:after{
        content: '';
        width: 100%;
        height: 100%;
        position:absolute;
        z-index: 2;
        background-image: linear-gradient(
          rgba(0,0,0,0),
          rgba(0,0,0,.9)
        );
      }
    }
    @media ${({theme}) => theme.breakpoints.tablet}{
        grid-column: 1/9;

        ${CardsContainer}{
          grid-column: 2/8;
          grid-template-columns: repeat(auto-fill, minmax(300px,1fr));
          grid-auto-rows: minmax(250px,auto);
        }
    }
    @media ${({theme}) => theme.breakpoints.mobile}{
        grid-column: 1/7;
        ${CardsContainer}{
          grid-column: 2/6;
          grid-template-columns: repeat(auto-fill, minmax(200px,1fr));
          grid-auto-rows: minmax(200px,auto);
          padding: 0em;
        }       
    }
  }
/* Events Page Styles End */

/* Event Template Styles Start */
  &.info_bar_section{
    grid-column: 1/15;
    padding: 3em 0em;

    ${ContentContainer}{
      grid-column: 4/12;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between; 
      padding: 2em 1.5em;

      hr{
        width: 1.5%;
        border-radius: .5em;
        background: ${({theme}) => theme.colors.primary};
        border: none;
      }
      .date_container,
      .time_container,
      .location_container{
        display: flex;
        flex-flow: column nowrap;
        justify-content:start;
        align-items: center;
        text-align: center;
        gap: 1em;
        width: 100%;
        padding: 0em 1em;
      }
      ${TextContainer}{
        justify-content:center;
        align-items: center;
        a{
          text-decoration: none;
          color: ${({theme}) => theme.colors.primary};
        }
      }

      ${IconContainer}{
        border-radius: 10%;
        background: ${({theme}) => theme.colors.tertiary};
        display: flex;
        flex-flow: column nowrap;
        justify-content:center;
        align-item:center;
        padding: 1em;

        .icons{
          font-size: 2em;
          color: ${({theme}) => theme.shades._800};
        }
      }
    }
    @media ${({theme}) => theme.breakpoints.tablet}{
      grid-column: 1/9;

      ${ContentContainer}{
        grid-column: 2/8;
      }

    } 
    @media ${({theme}) => theme.breakpoints.mobile}{
      grid-column: 1/7;
      padding: 2.5em 0em;
      ${ContentContainer}{
        grid-column: 2/6;
        flex-flow: column nowrap;
        padding: 1em;
        align-items: center;
        gap: 0em 1em;

        hr{
          width: 100%;
          height: 2px;
          background-image: linear-gradient(
            ${({theme}) => theme.shades._100},
            ${({theme}) => theme.colors.tertiary},
            ${({theme}) => theme.colors.tertiary}
          );
        }
        .date_container,
        .time_container,
        .location_container{
          flex-flow: row;
          text-align: left;
          justify-content: flex-start;
          align-items: center;
          padding: 1em 0em;
        }
        ${TextContainer}{
          text-align: left;
          justify-content: flex-start;
          align-items: flex-start;
        }
      }
    }
  }
  &.event_cta_section{
    grid-column: 1/15;

    ${ButtonContainer}:first-child{
      grid-column: 5 / 11;
      grid-row: 1 / 2;
      gap: 1em;

      ${ButtonPageLink},${ButtonLink}{
        display: flex;
        flex-flow: row nowrap;
        align-items:center;
        justify-content:center;
        gap: .5em;
        flex: 1;
        .arrow_right{
          font-size: 1em;
        }
      }
    }
    ${ButtonContainer}:nth-child(2){
      grid-column: 5 / 11;
      grid-row: 2 / 3;
      width: 100%;
      flex-flow: row wrap;
      justify-content:center;
      align-items:center;
      border: 2px solid ${({theme}) => theme.shades._500};
      border-radius: .5em;
      gap: 1em;
      hr{
        width: 5em;
        height: .1em;
        border-radius: 50%;
        border: none;
        background: ${({theme}) => theme.shades._500};
        opacity: .5;
      }
      ${ButtonLink}{
        flex: 1;
        width: max-content;
        display: flex;
        flex-flow: row nowrap;
        align-items:center;
        justify-content:center;
        gap: .5em;        
        .plus{
          color: ${({theme}) => theme.colors.primary};
          font-size: 1.5em;
        }
      }
    }
    @media ${({theme}) => theme.breakpoints.tablet}{
      grid-column: 1/9;
      ${ButtonContainer}:first-child{
        grid-column: 2/8;
      }
      ${ButtonContainer}:nth-child(2){
        grid-column: 2/8;
      }
    } 
    @media ${({theme}) => theme.breakpoints.mobile}{
      grid-column: 1/7;
      ${ButtonContainer}:first-child{
        grid-column: 2/6;
        flex-flow: column nowrap;
        
        ${ButtonPageLink},${ButtonLink}{
          flex: 1;
        }
      }
      ${ButtonContainer}:nth-child(2){
        grid-column: 2/6;
        flex-flow: column;
      }
    }
  }
  &.event_article{
    grid-column: 1 / 15;
    padding: 4em 0em;
    ${TextContainer}{
      grid-column: 5 / 11;
      ul{
        padding-left: 2em;
        li{
          margin-bottom:
        }
      }
    }
    @media ${({theme}) => theme.breakpoints.tablet}{
      grid-column: 1/9;
      ${TextContainer}{
        grid-column: 3/7;
      }

    } 
    @media ${({theme}) => theme.breakpoints.mobile}{
      grid-column: 1/7;
      ${TextContainer}{
        grid-column: 2/6;
      }
    }
  }
/* Event Template Styles End */

/* Volunteer Template Styles Start*/
 &.volunteer_impact{
  grid-column: 1/15;
  gap: 2.5em 1em;
  position: relative;
  background-image: linear-gradient(
    ${({ theme }) => theme.colors.tertiary} 30%,
    ${({ theme }) => theme.colors.primary} 60%
  );

  ${BackgroundContainer}{
    grid-column: 1 / 15;
    grid-row: 1 / 4;
    position:relative;
    z-index: 1;
    mix-blend-mode: color-burn;
  }
  ${TextContainer}:nth-child(4){
    grid-row: 2/3;
    grid-column: 2/14;
    justify-self: center;
    align-self:center;
    border-radius: 3em;
    position: relative;
    z-index: 2;
    color: ${({theme}) => theme.shades._50};
    text-align: center;
    margin-top: 2.5em;
  }
  ${TextContainer}:nth-child(2){
    grid-row: 1/2;
    grid-column: 10/14;
    justify-self: center;
    align-self: center;
    z-index: 2;
    margin-top: 5em;
    color: ${({theme}) => theme.shades._900};
  }
  ${IframeContainer}{
    grid-row: 1/2;
    grid-column: 2/9;
    aspect-ratio: 16/9;
    width: 100%;
    justify-self: center;
    align-self: center;
    position: relative;
    z-index: 2;
    overflow: hidden;
    border-radius: 1em;
    margin-top: 5em;
    box-shadow: 0px 60px 17px 0px rgba(0, 0, 0, 0.00), 0px 38px 15px 0px rgba(0, 0, 0, 0.02), 0px 22px 13px 0px rgba(0, 0, 0, 0.08), 0px 10px 10px 0px rgba(0, 0, 0, 0.14), 0px 2px 5px 0px rgba(0, 0, 0, 0.16);
  }
  ${CardsContainer}{
    grid-column: 2/14;
    grid-row: 3/4;
    gap: 2em;
    margin-bottom: 5em;
    padding: 0em 2em 2em 2em;
    position:relative;
    z-index: 2;
    scroll-snap-type: x mandatory;
    scroll-padding-inline-start: 24px;
    overflow-x: auto;

    ${Card}{
      display:grid;
      grid-template-columns: 1fr;
      grid-template-rows: auto auto;
      background: ${({theme}) => theme.shades._50};
      position: relative;
      border-radius: 1em;
      overflow:hidden;
      box-shadow: 0px 60px 17px 0px rgba(0, 0, 0, 0.00), 0px 38px 15px 0px rgba(0, 0, 0, 0.02), 0px 22px 13px 0px rgba(0, 0, 0, 0.08), 0px 10px 10px 0px rgba(0, 0, 0, 0.14), 0px 2px 5px 0px rgba(0, 0, 0, 0.16);
      min-width: 400px;
      scroll-snap-align: center start;

      ${BackgroundContainer}{
        grid-row: 1/2;
        grid-column: 1/2;
        mix-blend-mode: normal;
        position: relative;
        z-index: 1;
        justify-self: stretch;
        align-self: stretch;
        aspect-ratio: 3/1;
        width: 100%;
        overflow:hidden;
      }
      ${BackgroundContainer}:after{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        background-image: linear-gradient(
          to bottom,
          rgba(0,0,0,.2),
          ${({theme}) => theme.shades._50} 85%
        );
        z-index: 1;
      }
      ${MediaContainer}{
        grid-row: 1/2;
        grid-column: 1/2;
        position:relative;
        z-index: 2;
        box-shadow: none;
        width: 30%;
        border-radius: 15em;
        justify-self:start;
        align-self:end;
        margin-left: 1em;
        margin-top: 1em;
        box-shadow: 0px 60px 17px 0px rgba(0, 0, 0, 0.00), 0px 38px 15px 0px rgba(0, 0, 0, 0.02), 0px 22px 13px 0px rgba(0, 0, 0, 0.08), 0px 10px 10px 0px rgba(0, 0, 0, 0.14), 0px 2px 5px 0px rgba(0, 0, 0, 0.16);
        
      }
      ${TextContainer}{
        grid-row: 2/3;
        grid-column: 1/2;
        padding: 1em;
        margin:0em;
        color: ${({theme}) => theme.shades._900};
      }
    }
    
  }
  ::-webkit-scrollbar{
    height: 1.5em;
    background: ${({theme}) => theme.colors.tertiary}; 
    border-radius: 100vw;     
  }
  ::-webkit-scrollbar-track{
    margin-block: .5em;
      
  }
  ::-webkit-scrollbar-thumb{
    background: ${({theme}) => theme.colors.primary};
    border-radius: 100vw; 
    border: .2em solid ${({theme}) => theme.colors.tertiary}; 
  }
  @media ${({theme}) => theme.breakpoints.tablet}{
    grid-column: 1/9;
    gap: 2em 1em;
    ${BackgroundContainer}{
      grid-row: 1/5;
      grid-column: 1/9;
    }
    ${TextContainer}:nth-child(4){
      grid-row: 3/4;
      grid-column: 2/8;
    }
    ${TextContainer}:nth-child(2){
      grid-row: 1/2;
      grid-column: 2/8;
      margin-top: 2em;
      margin-bottom: 0em;
    }
    ${IframeContainer}{
      grid-column: 2/8;
      grid-row: 2/3;
      margin-bottom: 2em;
      margin-top: 0em;
      border-radius: .5em;
    }
    ${CardsContainer}{
      grid-column: 2/8;
      grid-row: 4/5;
      overflow: auto;
      padding: 2em 2em;
      position: relative;
      z-index: 2;
      scroll-snap-type: x mandatory;
      scroll-padding-inline-start: 24px;

      ${Card}{
        min-width: 324px;
        scroll-snap-align: none start;
        ${TextContainer}{
          padding: 1em;
          margin: 0;
          p{
            margin-bottom: 0em;
          }
        }
      }
    }
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    grid-column: 1/7;
    ${BackgroundContainer}{
      grid-column: 1/7;
    }
    ${TextContainer}:nth-child(4){
      grid-column: 2/6;
    }
    ${TextContainer}:nth-child(2){
      grid-column: 2/6;
    }
    ${IframeContainer}{
      grid-column: 2/6;
      border-radius: .5em;
      ${Iframe}{
        border-radius: .5em;
      }
    }
    ${CardsContainer}{
      grid-column: 2/6;
      scroll-inline-padding-start: .5em;
      padding: 1em 1em;
      ${Card}{
        min-width: 280px;
      }
    }
  }
  @media ${({theme}) => theme.breakpoints.noHover}{
    ::-webkit-scrollbar{
      display: none;
    }
  }
  
 }
 &.volunteer_opportunities{
  grid-column: 1/15;
  grid-template-rows: auto auto auto 100px;
  padding: 0em 0em 5em 0em;
  gap: 0em 1em;

  ${TextContainer}:first-child{
    grid-row: 1/5;
    grid-column: 2/3;
    margin-top: 5em;
    padding: 0em 0em 5em 0em;

    ${Display}{
      writing-mode: vertical-lr;
      color: ${({theme}) => theme.shades._400};
      opacity: .2;
      font-size: 15vw;
    }
  }
  ${TextContainer}:nth-child(2){
    grid-row: 1/2;
    grid-column: 3/7;
    justify-self: start;
    align-self:start;
    margin: 5em 0em;
  }
  ${MediaContainer}{
    grid-column: 8/15;
    grid-row: 1 / 4;
    border-radius: 0;
    box-shadow: none;
    
    
    .full_image{
      border-radius: 0;
    }
  }
  ${Form}{
    grid-row: 3/5;
    grid-column: 3/9;
    background: ${({theme}) => theme.shades._50};
    position: relative;
    z-index: 3;
    justify-self: start;
    align-self:start;
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 3em;
  }
  @media ${({theme}) => theme.breakpoints.tablet}{
    grid-template-rows: auto auto auto auto;
    grid-column: 1/9;
    gap: 3em 1em;

    ${TextContainer}:first-child{
      grid-row: 1/2;
      grid-column: 1/9;
      justify-self: center;
      align-self: center;
      margin: 0em;
      padding: 0em;
      ${Display}{
        writing-mode: horizontal-tb;
        font-size: 10vw !important;
      }
    }
    ${TextContainer}:nth-child(2){
      grid-row: 2/3;
      grid-column: 2/8;
      padding: 0em;
      margin: 0em;
    }
    ${MediaContainer}{
      grid-column: 1/9;
      grid-row: 3/4;
      width: 100%;
      aspect-ratio: 14/10;
    }
    ${Form}{
      grid-row: 3/5;
      grid-column: 2/8;
      justify-self: start;
      align-self: start;
      margin-top: 50%;
    }
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    grid-column: 1/7;
    ${TextContainer}:first-child{
    grid-row: 1/2;
    grid-column: 1/7;
    text-align:center;
    display: none;

    ${Display}{
      font-size: 10vw !important;
    }
    }
    ${TextContainer}:nth-child(2){
      grid-row: 2/3;
      grid-column: 2/6;
    }
    ${MediaContainer}{
      grid-column: 1/7;
      grid-row: 3 / 4;
    
    }
    ${Form}{
      grid-row: 3/5;
      grid-column: 2/6;
      padding: 1.5em;
    }
    }
 }
/* Volunteer Template Styles End */

/* About Us Template Styles Start*/
 &.history{
  grid-column: 1/15;
  padding: 5em 0em;
  background: ${({theme}) => theme.colors.primary};
  ${TextContainer}{
    grid-column:  10 / 14;
    grid-row: 1/3;
    justify-self:center;
    align-self:center;
    color: ${({theme}) => theme.shades._50};
  }
  ${MediaContainer}:nth-child(1){
    grid-column: 2/5;
    grid-row: 1/3;
    aspect-ratio: 1;
    justify-self:stretch;
    align-self: stretch;
  }${MediaContainer}:nth-child(2){
    grid-column: 5/9;
    grid-row: 1/2;
    aspect-ratio: 16/9 ;
  }${MediaContainer}:nth-child(3){
    grid-column: 5/7;
    grid-row: 2/3;
    aspect-ratio: 1/1.5 ;
  }${MediaContainer}:nth-child(4){
    grid-column: 7/9;
    grid-row: 2/3;
    aspect-ratio: 1/1.5 ;
  }
  @media ${({theme}) => theme.breakpoints.tablet}{
    grid-column: 1/9;

    ${TextContainer}{
      grid-column:  2/8;
      grid-row: 1/2;
      justify-self:flex-start;
      align-self:flex-start;
      color: ${({theme}) => theme.shades._50};
    }
    ${MediaContainer}:nth-child(1){
      grid-column: 2/4;
      grid-row: 3/4;
      aspect-ratio: 1;
      justify-self:stretch;
      align-self: stretch;
    }${MediaContainer}:nth-child(2){
      grid-column: 2/8;
      grid-row: 2/3;
      aspect-ratio: 16/9;
    }${MediaContainer}:nth-child(3){
      grid-column: 4/6;
      grid-row: 3/4;
      aspect-ratio: 1/1.5;
    }${MediaContainer}:nth-child(4){
      grid-column: 6/8;
      grid-row: 3/4;
      aspect-ratio: 1/1.5;
    }
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    grid-column: 1/7;
    ${TextContainer}{
      grid-column:  2/6;
      grid-row: 2/3;
      justify-self:flex-start;
      align-self:flex-start;
      color: ${({theme}) => theme.shades._50};
    }
    ${MediaContainer}:nth-child(1){
      grid-column: 2/4;
      grid-row: 1/2;
      aspect-ratio: 1;
      justify-self:stretch;
      align-self: stretch;
      display: none;
    }${MediaContainer}:nth-child(2){
      grid-column: 2/6;
      grid-row: 3/4;
      aspect-ratio: 16/9;
    }${MediaContainer}:nth-child(3){
      grid-column: 4/6;
      grid-row: 3/4;
      aspect-ratio: 1/1.5;
      display:none;
    }${MediaContainer}:nth-child(4){
      grid-column: 2/6;
      grid-row: 1/2;
      aspect-ratio: 16/9;
    }

  }
 }
 &.founder_section{
  grid-column: 1/15;
  background: ${({theme}) => theme.shades._50};
  padding: 5em 0em;
  ${TextContainer}{
    grid-column: 2/6;
    grid-row:1/2;
    justify-self:center;
    align-self: center;
  }
  ${MediaContainer}{
    grid-column: 7/14;
    grid-row: 1/2;
    aspect-ratio: 16/9;
  }
  @media ${({theme}) => theme.breakpoints.tablet}{
    grid-column: 1/9;
    ${TextContainer}{
      grid-column: 2/6;
    }
    ${MediaContainer}{
      grid-column: 2/8;
      grid-row: 2/3;
    }
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    grid-column: 1/7;
    ${TextContainer}{
      grid-column: 2/6;
    }
    ${MediaContainer}{
      grid-column: 2/6;
      grid-row: 2/3;
    }
  }
 }  
 &.recognition_section{
  grid-column: 1/15;
  display:none;

  ${BackgroundContainer}{
    grid-column: 1/15;
    grid-row: 1/2;
    position:relative;
    .bg_image{
      mix-blend-mode: normal;
    }
  }
  & > ${MediaContainer}{
    grid-row: 1/2;
    grid-column: 4/8;
    margin: 5em 0em;
    position:relative;
    z-index: 3;
  }
  ${TextContainer}{
    grid-column: 8/12;
    grid-row: 1/2;
    justify-self:center;
    align-self: center;
    padding: 1em 2em;
    position: relative;
    margin: 5em 0;
    
    ${Overline}{
      position: relative;
      z-index: 2;
    }
    ${Heading2}{
      position:relative;
      z-index:2;
    }
    ${Paragraph}{
      position: relative;
      z-index: 2;
    }
    
  }
  ${TextContainer}:before{
    content:'';
    position: absolute;
    top: 0;
    right: 10em;
    width: 100%;
    height: 100%;
    background: green;
    transform: scaleX(1.5) scaleY(2.5);
    z-index: 1; 
    border-radius: 1em;
  }
  @media ${({theme}) => theme.breakpoints.tablet}{

  }
  @media ${({theme}) => theme.breakpoints.mobile}{
  
  }
 }
 
/* About Us Template Styles End */

/* Contact Us Template Styles Start*/
  &.contact_info{
    grid-column: 5/11;
    display: flex;
    flex-flow: row nowrap;
    gap: 2em;
    padding: 5em 3em;
    
    ${ContentContainer}{
      display: flex;
      flex-flow: row nowrap;
      align-items:center;
      justify-content:space-between;
      flex: 1 1 100%;
      position: relative;
      border-radius: 1em;
      padding: 1em 0em;
      gap: 1em;

      ${IconContainer}{
        display:inherit;
        justify-content: center;
        align-items:center;
        padding: .5em;
        border-radius: 2em;
        font-size:clamp(
          1em,
          4vw,
          2em
        );
        background: white;
        position:relative;
        border: 12px solid ${({theme}) => theme.colors.primary};
        box-shadow: -12px 0px 12px 0px rgba(0,0,0,.3);
      }
      ${ButtonLink}{
        background: ${({theme}) => theme.shades._50};
        position:relative;
        width: 100%;
        text-align: center;
        border-radius: 1em 0em 0em 1em;
        color: black;
        font-weight: ${({theme}) => theme.font_weight.bold};
        box-shadow: -12px 0px 12px 0px rgba(0,0,0,.3);
      }
    } 
    ${ContentContainer}:before{
      content:'';
      position:absolute;
      bottom:0; right:0;
      width: 92%;
      height: 100%;
      background: ${({theme}) => theme.colors.primary};
      border-radius: 1em;
      box-shadow: inset 0px 0px 12px 4px rgba(0,0,0,.8);
    }
    @media ${({theme}) => theme.breakpoints.tablet}{
      grid-column: 1/9;
      ${ContentContainer}{
        grid-column: 2/8;
      }
    }
    @media ${({theme}) => theme.breakpoints.mobile}{
      grid-column: 1/7;
      flex-flow: column;
      padding: 2.5em 1em;
      ${ContentContainer}{
        grid-column: 2/6;
      }
      ${ContentContainer}:before{
        width:96%;
      }
    }
  }
 &.reach_out_section{
    grid-column: 1/15;
    padding: 2em 0em;
    
    ${TextContainer}{
      grid-column: 5/11;
      grid-row: 1/2;
      justify-self:center;
      align-self:center;
      justify-content:center;
      align-items:center;
    }
    ${Form}{
      grid-column: 5/11;
      grid-row: 2/3;
      box-shadow: none;
      padding: 2em 2em;
    }
    @media ${({theme}) => theme.breakpoints.tablet}{
      grid-column: 1/9;
      ${TextContainer}{
        grid-column: 2/8;
      }
      ${Form}{
        grid-column: 2/8;
      }
    }
    @media ${({theme}) => theme.breakpoints.mobile}{
      grid-column: 1/7;
      ${TextContainer}{
        grid-column: 2/6;
      }
      ${Form}{
        grid-column: 2/6;
        padding: .5em;
      }
    }
 }
/* Contact Us Template Styles End */

/* Projects Page Styles Start */
 &.projects_section{
    background: ${({theme}) => theme.shades._50};
    grid-column: 1/15;
    grid-auto-row: auto;
    box-sizing: border-box;
    padding-bottom: 8.75em;
    height: auto;
    
    ${ContentContainer}{
      grid-column: 5/14;
      grid-row: 2/3;
      justify-self: stretch;
      align-self: stretch;
      gap: 1em 1em;
      margin-top: 8.75em;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
      grid-auto-rows: auto auto auto;
      grid-auto-flow: row;
      justify-content: stretch;
      align-self: stretch;
      box-sizing: inherit;
    }
    @media ${({theme}) => theme.breakpoints.tablet}{
      grid-column: 1/9;
      margin-top: 0em;
     
      ${ContentContainer}{
        grid-column: 2/8; 
        margin: 0em;
        grid-template-columns: repeat(auto-fit, minmax(332px, 1fr));
      }
    }
    @media ${({theme}) => theme.breakpoints.mobile}{
      grid-column: 1/7;
      
      ${ContentContainer}{
        grid-column: 2/6;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      }
    }
 }
/* Projects Page Styles End */

/* Project Page Styles Start */
  &.tags_section{
    grid-column: 1/15;
    background: ${({theme}) => theme.colors.primary};
    padding: 1em 0;
    ${Tag}{
      min-width: 200px;
      display: none;
    }
    @media ${({theme}) => theme.breakpoints.tablet}{
      grid-column: 1/9;
    }
    @media ${({theme}) => theme.breakpoints.mobile}{
      grid-column: 1/7;
    }
  }
  &.project_article_section{
    grid-column: 1/15;
    padding: 3em 0em;

    .project_article{
      grid-column: 5/11;
      display: flex;
      flex-flow: column nowrap;

      ${Heading2}{
        margin-bottom: .25em;
      }
      ${Heading3}{
        margin-bottom: .25em;
      }
      ul{
        display: flex;
        flex-flow: column nowrap;
        gap: 1em;
        padding-bottom: 1em;
        list-style-position: inside;
        padding: 0em 1em 3fem 1em;
        }
      p, li{
          line-height: ${({theme}) => theme.line_height.body};
          letter-spacing: ${({theme}) => theme.letter_spacing.body};
        }
      p{
        margin-bottom: 2em;
        font-size: clamp(
        ${({theme}) => theme.font_size.body_small},
        4vw,
        ${({theme}) => theme.font_size.body_large}
        );
        }
      li{
        font-size: clamp(
        ${({theme}) => theme.font_size.body_small},
        3vw,
        ${({theme}) => theme.font_size.body_large}
        );
        }
      }
      & > ${Paragraph}{
        padding-bottom: 1em;
      }
      .entry_link{
        color: ${({theme}) => theme.shades._700};
        font-size: inherit;
      }
      .entry_link:hover{
        color: ${({theme}) => theme.colors.primary};
      }
    @media ${({theme}) => theme.breakpoints.tablet}{
      grid-column: 1/9;
      .project_article{
        grid-column: 2/8;
        padding-top: 0em;
      }
    }
    @media ${({theme}) => theme.breakpoints.mobile}{
      grid-column: 1/7;
      .project_article{
        grid-column: 2/6;
      }
    }
  }
  &.project_slider_section{
    grid-column: 1/15;
    background: ${({theme}) => theme.colors.primary};
    padding: 10em 0em;
    
    .slider_section_heading_2_text{
      grid-column:3/13;
      display:flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: center;
      color: ${({theme}) => theme.shades._50};
      hr{
        width: 100%;
        height: .25em;
        border-radius: .25em;
        border:none;
        background: ${({theme}) => theme.colors.tertiary};
      }
    }
    .image_slider_container{
      grid-column: 2/14;
      width: 100%;
      box-sizing: border-box;
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items:center;
      gap: 2em;
      padding: 2em 1em;
      overflow: auto;
      scroll-snap-type: x mandatory;
      scroll-padding-inline-start: 1em;

      ${MediaContainer}{
        aspect-ratio: 5/4;
        flex: 1 0 35%;
        scroll-margin-block: 1em;
        scroll-snap-align:start;
      }
    }
    ::-webkit-scrollbar{
        height: 1.5em;
        background: ${({theme}) => theme.colors.tertiary}; 
        border-radius: 100vw;     
    }
    ::-webkit-scrollbar-track{
       margin-block: .5em;
      
    }
    ::-webkit-scrollbar-thumb{
      background: ${({theme}) => theme.colors.primary};
      border-radius: 100vw; 
      border: .2em solid ${({theme}) => theme.colors.tertiary}; 
    }
    @media ${({theme}) => theme.breakpoints.tablet}{
      grid-column: 1/9;

      .slider_section_heading_2_text{
        grid-column: 2/8;
      }
      .image_slider_container{
        grid-column: 2/8;
      }
    }
    @media ${({theme}) => theme.breakpoints.mobile}{
      grid-column: 1/7;
      padding: 2.5em 0em;
      .slider_section_heading_2_text{
        grid-column: 2/6;
      }
      .image_slider_container{
        grid-column: 2/6;
        ${MediaContainer}{
          min-width: 250px;
          border-radius:
        }
      }
    }
  }
  &.project_video_section{
    grid-column: 1/15;
    padding: 5em 0em;
    gap: 1em;

    .project_video_text{
      grid-column: 4/12;
      padding-bottom: 1em;
    }
    .project_video_iframe_container{
      grid-column: 4/12;
      aspect-ratio: 16/9;
      position:relative;
      width:100%;
      justify-self: center;
      align-self: center;
      margin: 5em 0;
      .project_iframe{
       box-shadow: 0px 229px 64px 0px rgba(0, 0, 0, 0.00), 0px 147px 59px 0px rgba(0, 0, 0, 0.02), 0px 83px 50px 0px rgba(0, 0, 0, 0.08), 0px 37px 37px 0px rgba(0, 0, 0, 0.14), 0px 9px 20px 0px rgba(0, 0, 0, 0.16);
       border-radius: 1em;
      }
    }

    @media ${({theme}) => theme.breakpoints.tablet}{
      grid-column: 1/9;
      .project_video_text{
        grid-column: 2/8;
      }
      .project_video_iframe_container{
        grid-column: 2/8;
        margin: 0em;
      } 
    }
    @media ${({theme}) => theme.breakpoints.mobile}{
      grid-column: 1/7; 
      padding: 0em;
      background: ${({theme}) => theme.colors.tertiary};
      .project_video_text{
        grid-column: 2/6;
      }
      .project_video_iframe_container{
        grid-column: 1/7;
        margin: 0em;
        min-width:default;
        width: 100%;
        height: 100%;
        border-radius: 0em;
        box-shadow: 0em;
        aspect-ratio: none;

        .project_iframe{
          border-radius: 0em;
          box-shadow: none;
        }
      } 
    }
  }
  &.get_involved_cta_section{
    grid-column: 1/15;
    position: relative;
    padding: 5em 0;
    
    .get_involved_media{
      grid-column: 3/9;
      grid-row: 1/2;
      aspect-ratio:3/3;
      position:relative;
      align-self:center;
      z-index:3;
    }
    .get_involved_text{
      grid-column: 10/14;
      grid-row: 1/2;
      justify-self:center;
      align-self:center; 
    }
    .get_involved_display_text{
      grid-column: 2/3;
      grid-row: 1/2;
      position: relative;
      z-index: 3;
      justify-self: center;
      align-self: center;
     
      ${Display}{
        font-size: clamp(
          ${({theme}) => theme.font_size.heading_h1_medium},
          5vw,
          ${({theme}) => theme.font_size.display_large}
          ) !important;
        color: ${({theme}) => theme.shades._50};
        text-transform: uppercase;
        letter-spacing: ${({theme}) => theme.letter_spacing.display};
        font-weight: ${({theme}) => theme.font_weight.bold};
        opacity: .5;
        writing-mode: vertical-rl;
      }
    }  
    @media ${({theme}) => theme.breakpoints.tablet}{
      grid-column: 1/9;
      padding: 3em 0;

      .get_involved_media{
        grid-column: 2/8;
        grid-row: 2/3;
        aspect-ratio: 3/2;
      }
      .get_involved_text{
        grid-column: 2/8;
        grid-row: 3/4;
      }
      .get_involved_display_text{
        grid-column: 1/9;
        grid-row: 1/2;
        justify-self: center;
        align-self: center;

        ${Display}{
          writing-mode: horizontal-tb;
        }
      } 
    }
    @media ${({theme}) => theme.breakpoints.mobile}{
      grid-column: 1/7;
      .get_involved_media{
        grid-column: 2/6;
        grid-row: 2/3;
        aspect-ratio: 3/2;
      }
      .get_involved_text{
        grid-column: 2/6;
        grid-row: 3/4;
        .get_involved_button_container{
          width: 100%;
          margin-top: 1em;
          
          ${ButtonPageLink}{
            display: flex;
            width: 100%;
            justify-content: center;
            align-items: center;
            gap: .5em;
            ${IconContainer}{
              display: flex;
            }
          }
        }
      }
      .get_involved_display_text{
        grid-column: 2/6;
        grid-row: 1/2;  
        ${Display}{
          writing-mode: horizontal-tb;
          text-align: center;
        }
      }
      
    }
  }
  &.get_involved_cta_section::before{
      content: '';
      position: absolute;
      height: 100%;
      width: 30%;
      left:0;
      top:0;
      z-index: 1;
      background:${({theme}) => theme.colors.tertiary};
      border-radius: 0em 50% 50% 0em;

      @media ${({theme}) => theme.breakpoints.tablet}{
        width: 100%;
        height: 40%;
        border-radius: 0em 0em 50% 50%;
      }
      @media ${({theme}) => theme.breakpoints.mobile}{
        width: 100%;
        height: 40%;
        max-height: 40%;
        border-radius: 0em 0em 50% 50%;
      }
  }


  
/* Project Page Styles End */

/* Blogs Page Styles Start */
  &.blogs_section{
    background: ${({theme}) => theme.shades._50};
    grid-column: 1/15;
    box-sizing: border-box;
    padding-bottom: 8.75em;
    height: auto;
    
    ${ContentContainer}{
      grid-column: 5/14;
      justify-self: start;
      align-self: start;
      gap: 1em 1em;
      margin-top: 8.75em;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      grid-auto-rows: auto auto auto;
      grid-auto-flow: row;
      justify-content: stretch;
    }
    ${Pagination}{
      grid-row: 2/3;
    }

    @media ${({theme}) => theme.breakpoints.tablet}{
     grid-column: 1/9;
     padding-bottom: 2em;

     ${ContentContainer}{
      grid-column: 2/8;
      grid-row: 2/3;
      margin-top: 0em;
      grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
     }
     ${Pagination}{
      grid-row: 2/3;
     }
    }
    @media ${({theme}) => theme.breakpoints.mobile}{
      grid-column: 1/7;
      gap: .4em;
      ${ContentContainer}{
        grid-column: 2/6;
      }
      ${Pagination}{
        grid-column: 3/4;
      }
    }
 }
/* Blogs Page Styles End */

/* Blog Page Styles Start */
 &.share_section{
  grid-column: 1/15;
  background: ${({theme}) => theme.colors.secondary};
  padding: 1.5em 2em;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: .5em 0em;
  ${ContentContainer}{
    display: flex;
    flex-flow: row nowrap;
    justify-content:center;
    align-items:center;
    gap: 0em 1.5em;
  }
  @media ${({theme}) => theme.breakpoints.tablet}{
    grid-column: 1/9;
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    grid-column: 1/7;
  } 
 }
 &.article_body_section{
    grid-column: 1/15;
    padding:5em 0em;
    gap: 0em 0em;
    
    ${TextContainer}{
      grid-column: 5/11;
    }
    ${ContentContainer}{
      grid-row: 2/3;
      grid-column: 5/11;
      justify-content: flex-start;
      align-items:baseline;
      gap:0em 1em;
      padding: 1em 0em;
      border-top: 2px solid ${({theme}) => theme.shades._500};
      p{
        margin-bottom: 0em;
      }
    }
    @media ${({theme}) => theme.breakpoints.tablet}{
      grid-column: 1/9;
      ${TextContainer}{
        grid-column: 2/8;
      }
      ${ContentContainer}{
        grid-column: 2/8;
      }
    }
    @media ${({theme}) => theme.breakpoints.mobile}{
      grid-column: 1/7;
      padding: 2em 0em;
      ${TextContainer}{
        grid-column: 2/6;
      }
      ${ContentContainer}{
        grid-column: 2/6;
      }
    } 
 }
/* Blog Page Styles End */
`