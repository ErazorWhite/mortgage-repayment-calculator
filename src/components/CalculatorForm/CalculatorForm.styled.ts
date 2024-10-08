import styled from "styled-components";
import {typography} from "../../global/theme";

export const Form = styled.form`
    padding: 24px 32px;
    background-color: var(--color-white);
`

export const FormHeader = styled.div`
    padding-bottom: 24px;
`

export const H1 = styled.h1`
    padding-bottom: 8px;
    ${typography.preset2};

`

export const ClearButton = styled.button`
    ${typography.preset4};
    background-color: transparent;
    border: none;
    text-decoration: underline;
    
    color: var(--color-state-700);
`