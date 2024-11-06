import styled from 'styled-components';
import { typography } from '../../global/theme';

export const StyledButton = styled.button`
  ${typography.preset3};
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 17px 47px;
  background-color: var(--color-lime);
  color: var(--color-state-900);
  fill: var(--color-state-900);
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: var(--animation-ease-in);

  &:hover,
  &:focus {
    background-color: var(--color-lime-opacity);
  }
`;
