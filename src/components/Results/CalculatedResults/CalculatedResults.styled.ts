import styled from "styled-components";
import {typography} from "../../../global/theme";

export const ResultsBox = styled.div`
    text-align: left;
    padding: 32px 24px;
    background-color: var(--color-state-900);
`

export const H2 = styled.h2`
    ${typography.preset2};
    color: var(--color-white);
    padding-bottom: 16px;
`

export const P = styled.p`
    ${typography.preset4};
    padding-bottom: 8px;
    color: var(--color-state-300);
`
export const Description = styled.p`
    ${typography.preset4};
    color: var(--color-state-300);
    padding-bottom: 24px;
`

export const H3 = styled.h3`
    ${typography.preset1};
    color: var(--color-lime);
`
export const H4 = styled.h4`
    ${typography.preset2};
    color: var(--color-white);
`
export const CalculatedBox = styled.div`
    padding: 24px 16px;
    border-top: 4px solid var(--color-lime);
    border-radius: 8px;
    background-color: var(--color-black-opacity)
`
