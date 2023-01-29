import React from 'react'
import styled from 'styled-components'

const StyledInputLabel = styled.div`
  h5 {
    margin: 0;
  }

  padding-bottom: 2px;
`

const InputLabel = ({ label, required = true }) => (
  <StyledInputLabel>
    <h5>
      {label}
      {required ? '*' : ''}
    </h5>
  </StyledInputLabel>
)

export default InputLabel
