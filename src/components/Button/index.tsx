import React from 'react';
import { Container } from './styles';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const FunctionButton = ({ children, ...rest }: Props) => {
  return <Container {...rest}>{children}</Container>;
};

export default FunctionButton;
