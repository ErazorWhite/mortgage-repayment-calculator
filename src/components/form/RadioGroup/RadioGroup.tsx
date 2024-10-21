import {Li, RadioInput, RadioLabel, RadioHeader, StyledRadio} from "./RadioGroup.styles";
import {ValidationErrorStyled} from "../../ValidateError/ValidationErrorStyled.ts";
import {FieldError, FieldValues, Path, UseFormRegister} from "react-hook-form";

interface RadioOption {
    label: string;
    value: string;
}

interface RadioGroupProps<TFieldValues extends FieldValues> {
    label: string;
    name: Path<TFieldValues>;
    options: RadioOption[];
    register: UseFormRegister<TFieldValues>;
    error?: FieldError;
}

export const RadioGroup = <TFieldValues extends FieldValues, >({
                                                                   label,
                                                                   name,
                                                                   options,
                                                                   register,
                                                                   error
                                                               }: RadioGroupProps<TFieldValues>) => {

    return (
        <StyledRadio>
            <RadioHeader>{label}</RadioHeader>
            <ul>
                {options.map((option) =>
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
                    </Li>)}
            </ul>
            {error && <ValidationErrorStyled>{error.message}</ValidationErrorStyled>}

        </StyledRadio>
    )
};
