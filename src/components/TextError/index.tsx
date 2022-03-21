import styled from 'styled-components';

export default styled.span`
  display: block;
  border: 1px solid ${({ theme }) => theme.colors.secondary_600};
  color: ${({ theme }) => theme.colors.text};
  margin-top: 5px;
`;
