import styled from "styled-components";
import {TABLET_BP, DESKTOP_BP} from "../../global/breakpoints";

export const StyledContainer = styled.div`
    max-width: 415px;
    margin: 0 auto;
    padding: 0 20px;
    justify-content: center;
    align-items: center;
    align-content: center;

    @media screen and ${TABLET_BP} {
        max-width: 768px;
        padding: 0 32px;
    }

    @media screen and ${DESKTOP_BP} {
        max-width: 1440px;
    }
`

