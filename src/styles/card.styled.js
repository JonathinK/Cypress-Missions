import styled from "styled-components";

export const Card =  styled.div`
  display:flex;
  
  p{
    margin-bottom:0;
  }

  &.event_card{
    .event_card_date,
    .event_card_text{
      pointer-events: none;
    }
  }
`