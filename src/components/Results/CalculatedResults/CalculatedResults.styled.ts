import styled from "styled-components";
import {typography} from "../../../global/theme";
import {DESKTOP_BP, TABLET_BP} from "../../../global/breakpoints";
import {ResultsBox} from "../ResultsCommon.styles";

export const ResultsBoxCalculated = styled(ResultsBox)`
    text-align: left;
    @media screen and ${DESKTOP_BP} {
        padding-bottom: 115px;
    }
`

export const H2 = styled.h2`
    ${typography.preset2};
    color: var(--color-white);
    margin-bottom: 16px;
`

export const P = styled.p`
    ${typography.preset4};
    margin-bottom: 8px;
    color: var(--color-state-300);
`
export const Description = styled.p`
    ${typography.preset4};
    color: var(--color-state-300);
    margin-bottom: 24px;
    
    @media screen and ${TABLET_BP} {
        margin-bottom: 40px;
    }
`

export const H3 = styled.h3`
    ${typography.preset1};
    color: var(--color-lime);
    padding: 0 0 16px 0;
    margin: 0 0 16px 0;
    border-bottom: 1px solid var(--color-state-900);
    
    @media screen and ${TABLET_BP} {
        padding: 0 0 32px 0;
        margin: 0 0 32px 0;
    }
`
export const H4 = styled.h4`
    ${typography.preset2};
    color: var(--color-white);
`
export const CalculatedBox = styled.div`
    padding: 24px 16px;
    border-top: 4px solid var(--color-lime);
    border-radius: 8px;
    background-color: var(--color-black-opacity);

    @media screen and ${TABLET_BP} {
        padding: 32px 32px;
    }
}
`
