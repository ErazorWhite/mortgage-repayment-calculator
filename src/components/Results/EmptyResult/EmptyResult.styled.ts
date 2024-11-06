import { DESKTOP_BP } from '../../../global/breakpoints.ts';
import styled from 'styled-components';
import { ResultsBox } from '../ResultsCommon.styled.ts';

export const ResultsBoxEmptyContainer = styled(ResultsBox)`
  text-align: center;
  @media screen and ${DESKTOP_BP} {
    padding: 152px 40px;
  }
`;
