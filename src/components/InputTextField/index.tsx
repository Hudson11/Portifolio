import React from 'react';

import { Container, Input, Label } from './style';

export interface Props {
  type?: string;
  placeholder?: string;
  label?: string;
}

const InputTextField: React.FC<Props> = ({ type = 'text', placeholder = '', label = ''}) => {
  return(
    <Container>
      <Input type={type} placeholder={placeholder}/>
      <Label> {label} </Label>
    </Container>
  );
}

export default InputTextField;