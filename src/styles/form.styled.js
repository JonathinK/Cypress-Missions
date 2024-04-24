import styled from "styled-components";

export const Form = styled.form.attrs(props => {

})`
`

export const TextInput = styled.input.attrs((props) => ({
  type:"text",
}))`

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

`
export const Option = styled.option`

`
export const TextArea = styled.textarea`

`
export const FieldSet = styled.fieldset`

`
export const Legend = styled.legend`

`
export const DataList = styled.datalist`

`

