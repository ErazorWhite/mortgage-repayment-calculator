import styled from "styled-components";
import {typography} from "../../../global/theme";
import {ResultsBox} from "../ResultsCommon.styles";
import {DESKTOP_BP} from "../../../global/breakpoints";

export const ResultsBoxEmpty = styled(ResultsBox)`
    text-align: center;
    @media screen and ${DESKTOP_BP} {
        padding: 152px 40px;
    }
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