import React, {ButtonHTMLAttributes, FC} from 'react'
import {StyledButton} from "./CalculateButton.styled";
import {IconCalculator} from "../icons/IconCalculator";

export const CalculateButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({children, ...props}) => {
    return (
        <StyledButton {...props}>
            <IconCalculator/>
            {children}
        </StyledButton>
    )
}
