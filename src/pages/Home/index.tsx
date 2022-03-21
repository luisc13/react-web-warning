import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '~/components/Button';
import theme from '~/theme';

import {
  Container,
  ExitButton,
  Header,
  Title,
  Content,
  ButtonContainer,
  WarningContainer,
  WarningMessage,
  WarningTitle,
  WarningTop,
} from './styles';

function Home() {
  const [deleteMode, setDeleteMode] = useState(false);
  const navigation = useNavigate();

  return (
    <Container>
      <Header>
        <Title>Avisos</Title>
        <ExitButton onClick={() => navigation('/')}>Sair</ExitButton>
      </Header>
      <Content>
        <ButtonContainer>
          <Button
            style={{ background: theme.colors.green_2, padding: '4rem' }}
            onClick={() => navigation('/warning/insert')}
          >
            Adicionar
          </Button>
          <Button
            style={{ background: theme.colors.attention, padding: '4rem' }}
            onClick={() => setDeleteMode(!deleteMode)}
          >
            Excluir
          </Button>
          <Button
            style={{
              background: theme.colors.secondary_500,
              padding: '4rem',
            }}
            onClick={() => navigation('/warning/insert')}
          >
            Alterar
          </Button>
        </ButtonContainer>
      </Content>

      <WarningContainer>
        <WarningTop>
          <WarningTitle>Aviso</WarningTitle>
          {deleteMode && (
            <ExitButton
              style={{ maxWidth: 80, background: theme.colors.attention }}
            >
              Excluir
            </ExitButton>
          )}
        </WarningTop>
        <WarningMessage>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum sit
          qui modi earum recusandae vitae saepe obcaecati sunt natus quidem iure
          sed praesentium possimus quaerat nihil veniam, tempora, ullam aliquid.
        </WarningMessage>
      </WarningContainer>

      <WarningContainer>
        <WarningTitle>Aviso</WarningTitle>
        <WarningMessage>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum sit
          qui modi earum recusandae vitae saepe obcaecati sunt natus quidem iure
          sed praesentium possimus quaerat nihil veniam, tempora, ullam aliquid.
        </WarningMessage>
      </WarningContainer>
    </Container>
  );
}

export default Home;
