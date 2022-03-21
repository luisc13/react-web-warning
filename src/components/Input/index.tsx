/* eslint-disable jsx-a11y/label-has-associated-control */
import { ComponentType, forwardRef, InputHTMLAttributes, Ref } from 'react';

import TextError from '~/components/TextError';

import { Container, IconContainer, InputStyle } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ComponentType;
  error?: string;
}

function Input(
  { icon: Icon, error, ...rest }: Props,
  ref: Ref<HTMLInputElement>,
) {
  return (
    <div style={{ marginTop: 10 }}>
      <Container>
        {Icon && (
          <IconContainer>
            <Icon />
          </IconContainer>
        )}
        <InputStyle ref={ref} {...rest} />
      </Container>
      {error && <TextError>{error}</TextError>}
    </div>
  );
}

export default forwardRef<HTMLInputElement, Props>(Input);
