import styled, {css} from "styled-components";
import {TABLET_BP} from "../../../global/breakpoints.ts";
import {typography} from "../../../global/theme.ts";

interface NumbersHeadingProps {
    primary?: boolean;
}

export const Description = styled.p`
    ${typography.preset4};
    color: var(--color-state-300);
    margin-bottom: 24px;
    
    @media screen and ${TABLET_BP} {
        margin-bottom: 40px;
    }
`
export const CalculationDetailsBox = styled.div`
    padding: 24px 16px;
    border-top: 4px solid var(--color-lime);
    border-radius: 8px;
    background-color: var(--color-black-opacity);

    @media screen and ${TABLET_BP} {
        padding: 32px 32px;
    }
}
`
export const CalculationValue = styled.span.withConfig({ shouldForwardProp: (prop) => prop !== 'primary', })<NumbersHeadingProps>`
    overflow: scroll;
    display: block;
    ${({primary})=> primary ? css`
        ${typography.preset1};
        color: var(--color-lime);
        padding: 0 0 16px 0;
        margin: 0 0 16px 0;
        border-bottom: 1px solid var(--color-state-900);

        @media screen and ${TABLET_BP} {
            padding: 0 0 32px 0;
            margin: 0 0 32px 0;
        }`: css`
        ${typography.preset2};
        color: var(--color-white);
    `}
`
export const CalculationLabel = styled.p`
    margin-bottom: 8px;
`