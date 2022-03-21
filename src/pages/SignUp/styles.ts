import styled from 'styled-components';
import Select from 'react-select';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 20rem;
`;

export const FormContainer = styled.form`
  margin-top: 5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 4rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  max-width: 30vw;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.colors.primary_300};
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  padding: 1rem;
`;

export const Selector = styled(Select)`
  margin-top: 1rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary_600};
`;
