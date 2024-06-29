import styled from "styled-components";

export const IconContainer = styled.div`

  & > .disaster_response_svg,  
      .rebuilding_communities_svg,
      .local_outreach_svg {
        width: clamp(
          60px,
          10vw,
          128px
        );
        aspect-ratio: 1/1;
        path{
          fill: ${({theme}) => theme.colors.primary};
        }

`