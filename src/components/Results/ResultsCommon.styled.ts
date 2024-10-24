import styled from 'styled-components';
import {DESKTOP_BP, TABLET_BP} from '../../global/breakpoints.ts';
import {typography} from '../../global/theme.ts';

interface IResultsHeadingProps {
    isEmpty?: boolean
}

export const ResultsBox = styled.div`
    flex: 1;
    background-color: var(--color-state-900);
    padding: 32px 24px;

    color: var(--color-state-300);
    ${typography.preset4};

    @media screen and ${TABLET_BP} {
        border-radius: 0 0 24px 24px;
        padding: 40px;
    }

    @media screen and ${DESKTOP_BP} {
        width: 50%;
        border-radius: 0 24px 24px 80px;
    }

    h1, h2, h3, h4, h5, h6 {
        ${typography.preset2};
        color: var(--color-white);
    }
`

export const CalculationResultContainer = styled(ResultsBox)`
    text-align: left;
    @media screen and ${DESKTOP_BP} {
        padding-bottom: 115px;
    }
`
export const Heading = styled.h2.withConfig({ shouldForwardProp: (prop) => prop !== 'isEmpty', })<IResultsHeadingProps>`
    margin: ${({isEmpty}) => isEmpty ? `16px 0` : `0 0 16px 0`};
`
