import { useNavigate } from 'react-router-dom';

import Button from '~/components/Button';
import Input from '~/components/Input';
import theme from '~/theme';

import { Container, Content, Title, Label, ContentInput } from './styles';

function InsertWarning() {
  const navigation = useNavigate();
  return (
    <Container>
      <Title>Criar aviso</Title>

      <Content>
        <Label htmlFor="title"> Titulo: </Label>
        <Input name="title" placeholder="Escreva o titulo do aviso" />

        <Label htmlFor="content"> Conteudo: </Label>
        <ContentInput name="content" placeholder="Conteudo do seu aviso" />

        <Button style={{ marginTop: 15, background: theme.colors.success }}>
          Criar
        </Button>
        <Button
          style={{ marginTop: 15, background: theme.colors.attention }}
          onClick={() => navigation('/home')}
        >
          Cancelar
        </Button>
      </Content>
    </Container>
  );
}

export default InsertWarning;
