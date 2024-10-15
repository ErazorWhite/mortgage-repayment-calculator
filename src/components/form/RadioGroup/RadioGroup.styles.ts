import styled from "styled-components";
import {typography} from "../../../global/theme";
import {TABLET_BP} from "../../../global/breakpoints";

export const StyledRadio = styled.div`
    margin-bottom: 24px;
    @media screen and ${TABLET_BP} {
        margin-bottom: 40px;
    }
`

export const RadioLegend = styled.legend`
    ${typography.preset4};
    margin-bottom: 12px;

    color: var(--color-state-700);
`

export const Li = styled.li`
    margin-bottom: 12px;
`

export const RadioLabel = styled.label`
    ${typography.preset3};
    display: flex;
    align-items: center;
    padding: 13px 16px;
    border: 1px solid var(--color-state-700);
    border-radius: 4px;
    color: var(--color-state-900);
    cursor: pointer;
    transition: var(--animation);
    
    &::before {
        content: '';
        margin-right: 16px;
        width: 20px;
        height: 20px;
        box-shadow: 0 0 0 2px var(--color-state-700);
        border-radius: 50%;
        transition: background-color var(--animation);
    }

    &:hover {
        border-color: var(--color-lime);
    }
`;

export const RadioInput = styled.input`
    position: absolute;
    cursor: pointer;
    opacity: 0;
    height: 0;
    width: 0;

    &:focus + ${RadioLabel} {
        outline: 2px solid black;
    }

    &:checked + ${RadioLabel} {
        background-color: var(--color-lime-light);
        border-color: var(--color-lime);

        &::before {
            background-color: var(--color-lime);
            border: 3px solid var(--color-lime-light);
            box-shadow: 0 0 0 2px var(--color-lime);

            width: 20px;
            height: 20px;
        }
    }
}
`;






