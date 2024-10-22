import styled, {css} from "styled-components";
import {typography} from "../../../global/theme";

interface InputBoxProps {
    isInvalid?: boolean;
    isTouched?: boolean;
    'data-prefix'?: string;
    'data-suffix'?: string;
}

export const TextLabel = styled.label`
    ${typography.preset4};
    margin-bottom: 12px;
    display: block;

    color: var(--color-state-700);
`

export const InputBox = styled.div.withConfig({shouldForwardProp: (prop) => prop !== 'isInvalid' && prop !== 'isTouched'})<InputBoxProps>`
    display: flex;
    border: 1px solid var(--color-state-500);
    border-radius: 4px;
    transition: var(--animation);

    &::before,
    &::after {
        display: block;
        ${typography.preset3};
        padding: 13px 16px;
        color: var(--color-state-700);
        background-color: var(--color-state-100);
    }

    ${({isInvalid}) => isInvalid && css`
        border-color: var(--color-error);

        &::before, &::after {
            background-color: var(--color-error);
            color: var(--color-white);
        }
    `}
    
    ${({isTouched}) => isTouched && css`
        border-color: var(--color-lime);

        &::before, &::after {
            background-color: var(--color-lime);
        }
    `}
    
    &:hover,
    &:focus {
        border-color: var(--color-state-900);
    }

    &[data-prefix]::before {
        content: attr(data-prefix);
    }

    &[data-suffix]::after {
        content: attr(data-suffix);
    }
`

export const StyledInput = styled.input`
    padding: 13px 16px;
    width: 100%;
    border: none;
    border-radius: inherit;
`