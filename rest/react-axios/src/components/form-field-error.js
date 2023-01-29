import React from 'react'
import styled from 'styled-components'

const StyledFormFieldError = styled.p`
  color: red;
  margin: 0;
  padding-top: 3px;
  font-size: 10px;
`

const FormFieldError = ({ error }) => {
  if (!error) return <div></div>

  return <StyledFormFieldError>{error}</StyledFormFieldError>
}

export default FormFieldError
