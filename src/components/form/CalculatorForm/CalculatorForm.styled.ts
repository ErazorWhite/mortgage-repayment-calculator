import styled from 'styled-components';
import { typography } from '../../../global/theme';
import { DESKTOP_BP, MOBILE_BP, TABLET_BP } from '../../../global/breakpoints';

export const FormThumb = styled.div`
  background-color: var(--color-white);
  box-shadow: 0 32px 64px rgba(19, 48, 65, 0.1);

  @media screen and ${TABLET_BP} {
    border-radius: 24px;
  }

  @media screen and ${DESKTOP_BP} {
    display: flex;
  }
`;

export const Form = styled.form`
  padding: 24px 32px;
  flex: 1;

  @media screen and ${DESKTOP_BP} {
    padding: 40px;
  }
`;

export const FormHeader = styled.div`
  margin-bottom: 24px;

  @media screen and ${TABLET_BP} {
    display: flex;
    justify-content: space-between;
  }
`;

export const H1 = styled.h1`
  margin-bottom: 8px;
  color: var(--color-state-900);
  ${typography.preset2};
`;

export const ClearButton = styled.button`
  ${typography.preset4};
  border: none;
  text-decoration: underline;
  background-color: transparent;
  color: var(--color-state-700);
  transition: var(--animation-ease-in);
  cursor: pointer;

  &:hover,
  &:focus {
    color: var(--color-state-900);
  }
`;

const InputSeparator = styled.div`
  box-sizing: border-box;
  @media screen and ${MOBILE_BP} {
    margin: 0 0 24px 0;
  }
`;

export const FullInputSeparator = styled(InputSeparator)`
  @media screen and ${TABLET_BP} {
    flex-basis: 100%;
  }
`;
export const HalfInputSeparator = styled(InputSeparator)`
  @media screen and ${TABLET_BP} {
    flex-basis: calc(50% - 12px);
  }
`;

export const InputsContainer = styled.div`
  margin: 0 0 24px 0;

  @media screen and ${TABLET_BP} {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
  }
`;
