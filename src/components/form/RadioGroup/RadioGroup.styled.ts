import styled from 'styled-components';
import { typography } from '../../../global/theme';
import { TABLET_BP } from '../../../global/breakpoints';

export const StyledRadio = styled.fieldset`
  margin: 0 0 24px 0;
  @media screen and ${TABLET_BP} {
    margin-bottom: 40px;
  }
`;

export const RadioHeader = styled.legend`
  ${typography.preset4};
  margin-bottom: 12px;

  color: var(--color-state-700);
`;

export const Li = styled.li`
  margin-bottom: 12px;
`;
