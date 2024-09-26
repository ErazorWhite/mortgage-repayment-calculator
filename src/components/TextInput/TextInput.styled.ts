import styled from "styled-components";
import {typography} from "../../global/theme";

export const TextLabel = styled.label`
    ${typography.preset4};
    padding-bottom: 12px;
    display: block;
    
    color: var(--color-state-700);
`

export const TextBox = styled.div`
    padding: 0 0 24px 0;
`

export const InputBox = styled.div`
    display: flex;
    border: 1px solid var(--color-state-500);
    border-radius: 4px;
`

export const StyledInput = styled.input`
    padding: 13px 16px;
    width: 100%;
    border: none;
`

export const Decorator = styled.span`
    ${typography.preset3};
    display: block;
    padding: 13px 16px;
    color: var(--color-state-700);
    background-color: var(--color-state-100);
`