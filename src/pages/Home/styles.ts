import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem 20rem;
`;

export const Content = styled.div`
  padding: 1rem;
  background: ${({ theme }) => theme.colors.primary_300};
  margin-top: 2rem;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.shape};
  border-radius: 0.5rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

export const ExitButton = styled.button`
  background: ${({ theme }) => theme.colors.primary_300};
  padding: 0.5rem;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const WarningContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.primary_300};
  border: 1px solid ${({ theme }) => theme.colors.shape};
  padding: 0.5rem;
  margin-top: 1rem;
  border-radius: 0.5rem;
`;

export const WarningTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const WarningTitle = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

export const WarningMessage = styled.span`
  margin-top: 0.5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;
