import styled from "styled-components";
import {typography} from "../../../global/theme";

export const ResultsBox = styled.div`
    background-color: var(--color-state-900);
    padding: 32px 24px;
    text-align: center;
`

export const H2 = styled.h2`
    ${typography.preset2};
    color: var(--color-white);
    margin: 16px 0;
`

export const P = styled.p`
    ${typography.preset4};
    color: var(--color-state-300);
`