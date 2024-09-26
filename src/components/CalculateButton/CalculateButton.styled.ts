import styled from "styled-components";
import {typography} from "../../global/theme";

export const StyledButton = styled.button`
    ${typography.preset3};
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 17px 47px;
    background-color: var(--color-lime);
    color: var(--color-state-900);
    border: none;
    border-radius: 999px;
`

export const P = styled.p`
    display: inline-block;
    
    &::before {
        
    }
`