import styled, {css} from "styled-components";
import {typography} from "../../global/theme";
import {InputBoxProps} from "../../global/types";

export const TextLabel = styled.label`
    ${typography.preset4};
    margin-bottom: 12px;
    display: block;

    color: var(--color-state-700);
`

export const InputBox = styled.div<InputBoxProps>`
    display: flex;
    border: 1px solid var(--color-state-500);
    border-radius: 4px;

    ${({$prefix}) =>
            $prefix &&
            css`
                &::before {
                    content: '${$prefix}';
                    display: block;
                    ${typography.preset3};
                    padding: 13px 16px;
                    color: var(--color-state-700);
                    background-color: var(--color-state-100);
                }
            `}

    ${({$suffix}) =>
            $suffix &&
            css`
                &::after {
                    content: '${$suffix}';
                    display: block;
                    ${typography.preset3};
                    padding: 13px 16px;
                    color: var(--color-state-700);
                    background-color: var(--color-state-100);
                }
            `}


`

export const StyledInput = styled.input`
    padding: 13px 16px;
    width: 100%;
    border: none;
`