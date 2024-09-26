import {RadioGroupProps} from "../../global/types.ts";
import {CheckMark, Li, RadioInput, RadioLabel, RadioLegend, StyledRadio} from "./RadioGroup.styles";

export const RadioGroup = ({label, name, options, register, error}: RadioGroupProps) => {

    return (
        <StyledRadio>
            <RadioLegend>{label}</RadioLegend>
            <ul>
                {options.map((option) => (
                    <Li key={option.value}>
                        <RadioLabel htmlFor={option.value}>
                            <RadioInput
                                {...register(name)}
                                type="radio"
                                id={option.value}
                                value={option.value}
                            />
                            <CheckMark/>
                            {option.label}
                        </RadioLabel>
                    </Li>
                ))}
            </ul>
            {error && <p>{error.message}</p>}

        </StyledRadio>
    )
};
