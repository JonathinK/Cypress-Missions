import { graphql } from 'gatsby';
import React from 'react';
import { DateInput, EmailInput, Form, Label, NumberInput, PhoneInput, RadioInput, ResetInput, SubmitInput, TextArea, TextInput, TimeInput } from '../styles';

export const FormRender = ({ content }) => {
  const formContainer = content || null;
  const formComponents = content.content[0].content || null;
 

  return(
    <Form 
      name={formContainer.externalName} 
      autoComplete='on' 
      autoCorrect='on'
    >  
      {formComponents.map((component) => {
        //Text
        if(component.typeSelector === "text"){
            return(
            <div key={component.contentful_id}>
              <Label htmlFor={component.label}>
                {component.label}
                {component.isRequired === true ? "*" : ""}
              </Label>
              <TextInput 
                id={component.label} 
                name={component.name} 
                required={component.isRequired === "true"}
              />
            </div>  
          )
        }//Email
        else if(component.typeSelector === "email"){
          return(
            <div key={component.contentful_id}>
              <Label htmlFor={component.label}>
                {component.label}
                {component.isRequired === true ? "*" : ""}
              </Label>
              <EmailInput 
                id={component.label}
                name={component.name}
                required={component.isRequired === "true"}
              />
            </div>
          )
        }//Telephone
        else if(component.typeSelector === "tel"){
          return(
            <div key={component.contentful_id}>
              <Label>
                {component.label}
                {component.isRequired === true ? "*" : ""}
              </Label>
              <PhoneInput 
                id={component.label} 
                name={component.name} 
                placeholder={component.placeholder}
                required={component.isRequired === "true"}
                pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
            />
            </div>
          )
        }//Number
        else if(component.typeSelector === "number"){
          return(
            <div key={component.contentful_id}>
              <Label>
                {component.label}
                {component.isRequired === true ? "*" : ""}
              </Label>
              <NumberInput 
                id={component.label} 
                name={component.name} 
                min="0" 
                placeholder='0' 
                required={component.isRequired === "true"}
                />
            </div>
          )
        }//Date
        else if(component.typeSelector === "date"){
          return(
            <div key={component.contentful_id}>
              <Label htmlFor={component.label}>
                {component.label}
                {component.isRequired === true ? "*" : ""}
              </Label>
              <DateInput 
                id={component.label} 
                name={component.name} 
                required={component.isRequired === "true"}
              />
            </div>
          )
        }//Time
        else if(component.typeSelector === "time"){
          return(
            <div key={component.contentful_id}>
              <Label>
              {component.label}
              {component.isRequired === true ? "*" : ""}
              </Label>
              <TimeInput 
                id={component.label} 
                name={component.name} 
                required={component.isRequired === "true"}
              />
            </div>
          )
        }//Radio
        else if(component.typeSelector === "radio"){
          return(
            <div key={component.contentful_id}>
            <Label htmlFor={component.label}>
              {component.label}
              {component.isRequired === true ? "*" : ""}
            </Label>
            {/* Maps through radio selections and wraps each in a div*/}
             {component.values.map((items) => {
              return(
                <div key={items.contentful_id} className="radio_container">
                  <RadioInput 
                    name={items.name} 
                    value={items.value} 
                    id={items.value}
                    required={component.isRequired === "true"}
                    />
                  <Label $RadioButtonLabel htmlFor={items.value}>{items.value}</Label>
                </div> 
              )
             })}
            </div>
          )
        }//TextArea
        else if(component.codeId === "text_area_field"){
          return(
            <div key={component.contentful_id}>
              <Label>
                {component.label}
                {component.isRequired === true ? "*" : ""}
              </Label>
              <TextArea 
                id={component.name} 
                name={component.name} 
                placeholder={component.placeholder} 
                required={component.isRequired === "true"}
              />
            </div>
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
              <SubmitInput key={buttons.contentful_id}  id="submit"/>
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
 fragment FormRender on ContentfulForm{
  codeId
  contentful_id
  externalName
  content {
    ... on ContentfulFormInputType {
      id
      name
      codeId
      contentful_id
      errorMessage
      helpText
      isRequired
      label
      placeholder
      typeSelector
      value
      values {
        contentful_id
        name
        value
      }
      defaultValue
    }
    ... on ContentfulFormTextarea {
      name
      codeId
      contentful_id
      placeholder
      label
    }
  }
 }
`
