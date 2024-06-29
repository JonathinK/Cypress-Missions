import styled from "styled-components";
import { Heading3 } from "./typography.styled";
import { CheckboxInput, Label } from "./form.styled";


export const Filter = styled.aside`
  grid-column: 2/5;
  grid-row: 1/5;
  justify-self: stretch;
  align-self: start;
  position: sticky;
  top: 0;
  padding: 8.75em 1em 1em 1em;
  background: ${({theme}) => theme.shades._50};
  z-index:5;
  border-radius: 1em;
  overflow: hidden;
  min-width: 200px;
  
  @media ${({theme}) => theme.breakpoints.tablet}{
    grid-column: 2/8;
    grid-row: 1/2;
    padding: 5.5em 1em 1em 1em;
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    grid-column: 2/6;
  }
`
export const FilterTitleBar = styled.div`
  border-radius: .5em;
  background:white;
  box-shadow: 0px 43px 12px 0px rgba(0, 0, 0, 0.00), 
                0px 28px 11px 0px rgba(0, 0, 0, 0.01), 
                0px 16px 9px 0px rgba(0, 0, 0, 0.02), 
                0px 7px 7px 0px rgba(0, 0, 0, 0.03), 
                0px 2px 4px 0px rgba(0, 0, 0, 0.04);
  padding: .5em 1em;
  ${Heading3}{
    text-align:center;
  }
  cursor: pointer;
`
export const Categories = styled.div`
  padding: 1em 0em;
  @media ${({theme}) => theme.breakpoints.tablet}{
    display: ${(props) => (props.$showCategories ? 'block' : 'none')};
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
  }
`
export const Category = styled.div`
  cursor: pointer;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1em;
  width: 100%;
  border-bottom: 2px solid black;
  padding: 1em 0em;
`
export const CategoryTitle = styled.div`
  display: inherit;
  flex-flow: row nowrap;
  justify-content:space-between;
  align-items: center;
  width: 100%;
`
export const CategorySelection = styled.div`
  display: flex;
  flex-flow:column nowrap;
  justify-content: stretch;
  align-items: flex-start;
  width: 100%;
  box-sizing: border-box;
  gap: .5em;

  
`
export const SelectionBlock = styled.div`
  width: 100%;
  display:flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 1em;
  flex: 1 1 100%;
  background: ${({theme}) => theme.colors.tertiary};
  box-sizing: border-box;
  border-radius: .5em;
`
export const FilterSelection = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items:center;
  flex: 1 1 80%;
  gap: 1em;

  ${CheckboxInput}{
    width: auto;
  }
  ${Label}{
    pointer-events: none;
    font-family: ${({theme}) => theme.fonts.body};
  }
`
export const FilterCounter = styled.div`
  display: inherit;
  flex-flow: column nowrap;
  justify-content: center;
  align-items:center;
  padding: .25em .6em;
  border-radius: .25em;
  border: 2px solid ${({theme}) => theme.colors.primary};
  background: ${({theme}) =>  theme.shades._50};
  font-family: ${({theme}) => theme.fonts.body};
`
export const FilterSearchBar = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: .5em;
  padding: 1em 0em;
`