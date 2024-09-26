import React, {FC} from 'react'
import {Props} from "../../global/types";
import {P, StyledButton} from "./CalculateButton.styled";
import {IconCalculator} from "../../assets/Icons/IconCalculator";

export const CalculateButton: FC<Props> = ({children}) => {
    return (
        <StyledButton>
            <IconCalculator/>
            <P>{children}</P>
        </StyledButton>
    )
}
