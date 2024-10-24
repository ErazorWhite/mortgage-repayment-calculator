import {Li, RadioHeader, StyledRadio} from './RadioGroup.styled.ts';
import {ValidationErrorStyled} from '../../ValidateError/ValidationErrorStyled.ts';
import {FieldError, FieldValues, Path, UseFormRegister} from 'react-hook-form';
import {RadioInput} from "../../RadioInput/RadioInput.tsx";

interface IRadioOption {
    label: string;
    value: string;
}

interface IRadioGroupProps<TFieldValues extends FieldValues> {
    label: string;
    name: Path<TFieldValues>;
    options: IRadioOption[];
    register: UseFormRegister<TFieldValues>;
    error?: FieldError;
}

export const RadioGroup = <TFieldValues extends FieldValues, >({
                                                                   label,
                                                                   name,
                                                                   options,
                                                                   register,
                                                                   error
                                                               }: IRadioGroupProps<TFieldValues>) => (
    <StyledRadio>
        <RadioHeader>{label}</RadioHeader>
        <ul>
            {options.map((option) =>
                <Li key={option.value}>
                    <RadioInput
                        {...register(name)}
                        type='radio'
                        value={option.value}
                        label={option.label}
                    />
                </Li>)}
        </ul>
        {error && <ValidationErrorStyled>{error.message}</ValidationErrorStyled>}

    </StyledRadio>
);
