import {RadioGroupProps} from "../../../global/types.ts";
import {Li, RadioInput, RadioLabel, RadioLegend, StyledRadio} from "./RadioGroup.styles";
import {ValidateErrorStyled} from "../../ValidateError/ValidateError.styled";

export const RadioGroup = ({label, name, options, register, error}: RadioGroupProps) => {

    return (
        <StyledRadio>
            <RadioLegend>{label}</RadioLegend>
            <ul>
                {options.map((option) => (
                    <Li key={option.value}>
                        <RadioInput
                            {...register(name)}
                            type="radio"
                            id={option.value}
                            value={option.value}
                        />
                        <RadioLabel htmlFor={option.value}>
                            {option.label}
                        </RadioLabel>
                    </Li>
                ))}
            </ul>
            {error && <ValidateErrorStyled>{error.message}</ValidateErrorStyled>}

        </StyledRadio>
    )
};
