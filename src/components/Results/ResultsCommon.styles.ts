import styled from "styled-components";
import {DESKTOP_BP, TABLET_BP} from "../../global/breakpoints";

export const ResultsBox = styled.div`
    flex: 1;
    background-color: var(--color-state-900);
    padding: 32px 24px;

    @media screen and ${TABLET_BP} {
        border-radius: 0 0 24px 24px;
        padding: 40px;
    }

    @media screen and ${DESKTOP_BP} {
        border-radius: 0 24px 24px 80px;
    }
`