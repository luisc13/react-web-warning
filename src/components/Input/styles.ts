import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary_600} 2px;
  display: flex;
`;

export const InputStyle = styled.input`
  padding: 10px;
  border: none;
  display: block;
  width: 100%;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;

  > img {
    height: 40px;
  }
`;
