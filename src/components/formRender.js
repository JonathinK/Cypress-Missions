import { graphql } from 'gatsby';
import React from 'react';
import { DateInput, EmailInput, Form, FormElement, Label, NumberInput, Option, PhoneInput, RadioInput, ResetInput, Select, SubmitInput, TextArea, TextInput, TimeInput } from '../styles';

export const FormRender = ({ content }) => {
  const formContainer = content || null;
  const formComponents = content.content[0].content || null;

  return(
    <Form 
      name={formContainer.externalName} 
      autoComplete='on' 
      autoCorrect='on'
      method="POST"
      action='/volunteer/'
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >  
      <input type="hidden" name="form-name" value={formContainer.externalName} />
      <input 
        type='hidden' 
        name='subject'
        value={`New form submission from ${formContainer.externalName}`}
      />
      {formComponents.map((component) => {
        //Text
        if(component.typeSelector === "text"){
            return(
            <FormElement key={component.contentful_id}>
              <Label htmlFor={component.name}>
                {component.label}
                {component.isRequired ? "*" : ""}
              </Label>
              <TextInput 
                id={component.name} 
                name={component.name} 
                type='text'
                required={component.isRequired}
                placeholder={component.placeholder || ''} 
              />
            </FormElement>  
          )
        }//Email
        else if(component.typeSelector === "email"){
          return(
            <FormElement key={component.contentful_id}>
              <Label htmlFor={component.name}>
                {component.label}
                {component.isRequired ? "*" : ""}
              </Label>
              <EmailInput 
                id={component.name}
                name={component.name}
                type='email'
                required={component.isRequired}
              />
            </FormElement>
          )
        }//Telephone
        else if(component.typeSelector === "tel"){
          return(
            <FormElement key={component.contentful_id}>
              <Label htmlFor={component.name}>
                {component.label}
                {component.isRequired ? "*" : ""}
              </Label>
              <PhoneInput 
                id={component.name} 
                name={component.name} 
                type='tel'
                placeholder={component.placeholder}
                required={component.isRequired}
                pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
            />
            </FormElement>
          )
        }//Number
        else if(component.typeSelector === "number"){
          return(
            <FormElement key={component.contentful_id}>
              <Label htmlFor={component.name}>
                {component.label}
                {component.isRequired ? "*" : ""}
              </Label>
              <NumberInput 
                id={component.name} 
                name={component.name}
                type='number' 
                min="0" 
                placeholder='0' 
                required={component.isRequired}
                />
            </FormElement>
          )
        }//Date
        else if(component.typeSelector === "date"){
          return(
            <FormElement key={component.contentful_id}>
              <Label htmlFor={component.name}>
                {component.label}
                {component.isRequired ? "*" : ""}
              </Label>
              <DateInput 
                id={component.name} 
                name={component.name} 
                type='date'
                required={component.isRequired}
              />
            </FormElement>
          )
        }//Time
        else if(component.typeSelector === "time"){
          return(
            <FormElement key={component.contentful_id}>
              <Label htmlFor={component.name}>
              {component.label}
              {component.isRequired ? "*" : ""}
              </Label>
              <TimeInput 
                id={component.name} 
                name={component.name} 
                required={component.isRequired}
                type='time'
              />
            </FormElement>
          )
        }//Radio
        else if(component.typeSelector === "radio"){
          return(
            <FormElement key={component.contentful_id}>
            <Label htmlFor={component.name}>
              {component.label}
              {component.isRequired ? "*" : ""}
            </Label>
            {/* Maps through radio selections and wraps each in a div*/}
             {component.values.map((items) => {
              return(
                <FormElement key={items.contentful_id} className="radio_container">
                  <RadioInput 
                    name={items.name} 
                    value={items.value} 
                    id={items.value}
                    required={component.isRequired}
                    />
                  <Label $RadioButtonLabel htmlFor={items.value}>{items.value}</Label>
                </FormElement> 
              )
             })}
            </FormElement>
          )
        }//TextArea
        else if(component.codeId === "text_area"){
          return(
            <FormElement key={component.contentful_id}>
              <Label htmlFor={component.name}>
                {component.label}
                {component.isRequired ? "*" : ""}
              </Label>
              <TextArea 
                id={component.name} 
                name={component.name} 
                placeholder={component.placeholder} 
                required={component.isRequired}
              />
            </FormElement>
          )
        }
        else if(component.codeId === "select_input"){
          return(
            <FormElement
              key={component.contentful_id}
            >
              <Label htmlFor={component.name}>
                {component.label}
                {component.isRequired ? "*":""}
              </Label>
              <Select
              required={component.isRequired}
              name={component.name}
              id={component.name}
              multiple={component.allowMultipleSelections === "true"}
              >
              {component.selections.map((option) => {
                return <Option value={option.value} key={option.contentful_id}>{option.value}</Option>
              })}
              </Select>
            </FormElement>
          )
        }
        else{
          return null;
        }
      })}
      <div className="form_button_container">
        {formComponents.map((buttons) => {
          if(buttons.typeSelector === "reset"){
            return(
              <ResetInput key={buttons.contentful_id}/>
            )
          }
          else if(buttons.typeSelector === "submit"){
            return(
              <SubmitInput key={buttons.contentful_id}  id="submit" type='submit'/>
            )
          }
          else{
            return null;
          }
        })}
      </div>
    </Form>
  )
}

export const query = graphql`
 fragment formRender on ContentfulForm{
  codeId
  contentful_id
  externalName
  content{
    ... on ContentfulFormTextarea {
      id
      name
      codeId
      contentful_id
      isRequired
      label
      placeholder
    }
    ... on ContentfulFormSelect {
      id
      name
      codeId
      isRequired
      allowMultipleSelections
      contentful_id
      label
      selections {
        contentful_id
        isDefault
        label
        value
      }
    }
    ... on ContentfulFormInputType {
      id
      codeId
      contentful_id
      helpText
      isDefault
      isRequired
      label
      name
      typeSelector
    }
  }
 }
`
