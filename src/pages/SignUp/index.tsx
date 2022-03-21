import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import Input from '~/components/Input';
import Button from '~/components/Button';

import api from '~/utils/api';
import theme from '~/theme';

import { Container, FormContainer, Title, Selector } from './styles';

interface FormData {
  username: string;
  password: string;
  type: string;
}

function SignUp() {
  const options = [
    { value: 'admin', label: 'Admin' },
    { value: 'user', label: 'User' },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const navigation = useNavigate();

  const onSubmit = async ({ username, password, type }: FormData) => {
    try {
      await api.post('/create/user', { type, username, password });
      console.log('cheguei');
      toast.success('Usuário criado com sucesso!');
      navigation('/home');
    } catch (error) {
      toast.error('Erro ao criar usuário!');
      console.log(error);
    }
  };

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <Title>Cadastrar</Title>
        <Input
          placeholder="Nome de usuário"
          {...register('username', {
            required: 'Campo obrigatório',
          })}
          error={errors?.username?.message}
        />
        <Input
          type="password"
          placeholder="Senha"
          {...register('password', {
            required: 'Campo obrigatório',
          })}
          error={errors?.password?.message}
        />
        <Selector
          options={options}
          {...(register('type'),
          {
            required: 'Campo obrigatório',
          })}
        />
        <Button style={{ marginTop: 15, background: theme.colors.success }}>
          Cadastrar
        </Button>
        <Button
          style={{ marginTop: 15, background: theme.colors.attention }}
          onClick={() => navigation('/')}
        >
          Voltar
        </Button>
      </FormContainer>
    </Container>
  );
}

export default SignUp;
