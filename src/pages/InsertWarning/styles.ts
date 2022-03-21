import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  align-items: center;
`;
export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.primary_300};
  margin-top: 2rem;
`;

export const Label = styled.label`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 1rem;
`;

export const ContentInput = styled.textarea`
  width: 30rem;
  height: 10rem;
  border-radius: 0.5rem;
  border: none;
`;
