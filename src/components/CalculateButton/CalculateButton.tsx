import React, {FC} from 'react'
import {Props} from "../../global/types";
import {P, StyledButton} from "./CalculateButton.styled";
import {IconCalculator} from "../icons/IconCalculator";

export const CalculateButton: FC<Props> = ({children}) => {
    return (
        <StyledButton>
            <IconCalculator/>
            <P>{children}</P>
        </StyledButton>
    )
}
