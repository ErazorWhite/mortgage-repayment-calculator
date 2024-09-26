import styled from "styled-components";
import {typography} from "../../global/theme";

export const RadioLegend = styled.legend`
    ${typography.preset4};
    padding-bottom: 12px;

    color: var(--color-state-700);
`

export const Li = styled.li`
    padding-bottom: 12px;
`
export const CheckMark = styled.span`
    position: relative;
    display: inline-block;
    margin-right: 16px;
    width: 20px;
    height: 20px;
    border: 2px solid var(--color-state-700);
    border-radius: 50%;
    background-color: transparent;
    transition: background-color var(--animation);
`
export const RadioInput = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    
    &:focus + ${CheckMark} {
        outline: 2px solid black;
    }
    
    &:checked + ${CheckMark} {
        background-color: var(--color-lime-opacity);
        border-color: var(--color-lime);
        
        &::after {
            content: '';
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            width: 10px;
            height: 10px;
            background-color: var(--color-lime);
            border-radius: 50%;
            transform: translate(-50%, -50%);
        }
    }

`

export const RadioLabel = styled.label`
    ${typography.preset3};
    position: relative;
    display: flex;
    align-items: center;
    padding: 13px 16px;
    border: 1px solid var(--color-state-700);
    border-radius: 4px;
    color: var(--color-state-900);
    cursor: pointer;
    transition: var(--animation);
    
    &:hover {
        border-color: var(--color-lime);
    }

    &:has(${RadioInput}:checked) {
        background-color: var(--color-lime-opacity);
        border-color: var(--color-state-500);
    }
`


