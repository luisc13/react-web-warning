import styled from 'styled-components';
import Icon from '~/assets/warning.svg';
import { Link } from 'react-router-dom';
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 20rem;
`;

export const IconContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background: url(${Icon}) no-repeat;
  background-size: contain;
  background-position: center;
  align-items: center;
  justify-content: center;
  padding: 5rem;
  padding-top: 5rem;
`;

export const FormContainer = styled.div`
  margin-top: 5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.colors.primary_300};
  padding: 6rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h1`
  ${({ theme }) => theme.colors.primary_300};
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  padding: 1rem;
`;

export const IconTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
  padding: 1rem;
  text-align: center;
  background: none;
`;

export const SignUp = styled(Link)`
  margin-top: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  background: none;
  color: ${({ theme }) => theme.colors.secondary_600};
  text-align: center;
  text-decoration: underline;
`;
