import styled from "styled-components";

export const Form = styled.form.attrs(props => {

  })`
  display:flex;
  flex-flow: column nowrap;
  justify-content: start;
  align-items: stretch;
  gap: 1em 0em;
  font-family: ${({theme}) => theme.fonts.body};

  border-radius: 1em;
  box-shadow: 0px 60px 17px 0px rgba(0, 0, 0, 0.00), 0px 38px 15px 0px rgba(0, 0, 0, 0.02), 0px 22px 13px 0px rgba(0, 0, 0, 0.08), 0px 10px 10px 0px rgba(0, 0, 0, 0.14), 0px 2px 5px 0px rgba(0, 0, 0, 0.16);
  padding: 2em;

  .form_button_container{
    display: flex;
    flex-flow: row nowrap;
    justify-content: end;
    align-items:center;
    width: 100%;
  }
`
export const TextInput = styled.input.attrs((props) => ({
    type:"text",
  }))`
  
  width:100%;
  box-sizing: border-box;
  padding: 1em .5em;
  border-radius: .5em;
`
export const CheckboxInput = styled(TextInput).attrs({
    type:"checkbox",
  })`
`
export const RadioInput = styled(TextInput).attrs({
    type:"radio",
  })`

`
export const SubmitInput = styled(TextInput).attrs({
  type:"submit",
  })`
  width: auto;
  padding: 1em 1.5em;
  border-radius:.5em;
  border: none;
  background: ${({theme}) => theme.colors.tertiary};
  font-family: ${({theme}) => theme.fonts.body};
  color: ${({theme}) => theme.shades._50};
`
export const ResetInput = styled(SubmitInput).attrs({
    type:"reset",
  })`

`
export const EmailInput = styled(TextInput).attrs({
  type:"email",
  })`

`
export const PhoneInput = styled(TextInput).attrs({
    type:"tel",
  })`

`
export const RangeInput = styled(TextInput).attrs({
    type:"range",
  })`

`
export const NumberInput = styled(TextInput).attrs({
    type:"number",
  })`

`
export const TimeInput = styled(TextInput).attrs({
    type:"time",
  })`

`
export const DateInput = styled(TextInput).attrs({
    type:"date",
  })`

`
export const FileInput = styled(TextInput).attrs({
    type:"file",
  })`

`
export const Label = styled.label`
  font-size: ${({theme}) => theme.font_size.body_large};
`
export const Option = styled.option`
`
export const TextArea = styled.textarea`
  resize: none;
  box-sizing: border-box;
  width: 100%;
  aspect-ratio: 3/1;
  padding: .5em;
  border-radius: .5em;
  border: 2px inset grey;
`
export const FieldSet = styled.fieldset`
`
export const Legend = styled.legend`
`
export const DataList = styled.datalist`
`
export const Select = styled.select`
  width: 100%;
  padding: 1em .5em;
  border: 2px inset grey;
  border-radius: .5em;
`
export const FormElement = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content:start;
  align-items: start;
  gap: .5em;
  width: 100%;
  box-sizing: border-box;
`

