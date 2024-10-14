import styled from "styled-components";
import {typography} from "../../../global/theme";
import {TABLET_BP} from "../../../global/breakpoints";

export const Form = styled.form`
    padding: 24px 32px;
    background-color: var(--color-white);
`

export const FormHeader = styled.div`
    margin-bottom: 24px;

    @media screen and ${TABLET_BP} {
        display: flex;
        justify-content: space-between;
    }
`

export const H1 = styled.h1`
    margin-bottom: 8px;
    ${typography.preset2};

`

export const ClearButton = styled.button`
    ${typography.preset4};
    background-color: transparent;
    border: none;
    text-decoration: underline;
    
    color: var(--color-state-700);
`