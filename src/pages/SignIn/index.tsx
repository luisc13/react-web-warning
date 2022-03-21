import { useNavigate } from 'react-router-dom';

import Button from '~/components/Button';
import Input from '~/components/Input';

import {
  Container,
  FormContainer,
  IconContainer,
  Title,
  IconTitle,
  SignUp,
} from './styles';
import theme from '~/theme';

function SignIn() {
  const navigation = useNavigate();

  return (
    <Container>
      <IconContainer>
        <IconTitle>
          <br />
          Organize <br /> seus <br />
          avisos
        </IconTitle>
      </IconContainer>

      <FormContainer>
        <Title>Entrar</Title>
        <Input placeholder="Nome de usuário" />
        <Input placeholder="Senha" type="password" />
        <Button
          style={{ marginTop: 15, background: theme.colors.success }}
          onClick={() => navigation('/home')}
        >
          Entrar
        </Button>
        <SignUp to={'SignUp'}>Ainda não possui uma conta?</SignUp>
      </FormContainer>
    </Container>
  );
}

export default SignIn;
