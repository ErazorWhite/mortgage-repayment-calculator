import {InputBox, StyledInput, TextLabel} from "./FormattedNumberInput.styled.ts";
import {NumberFormatValues, NumericFormat} from "react-number-format";
import {Control, Controller} from "react-hook-form";
import {ValidationErrorStyled} from "../../ValidateError/ValidationErrorStyled.ts";

export interface InputProps {
    label: string;
    name: string;
    control: Control<any>;
    prefix?: string;
    suffix?: string
}

export const FormattedNumberInput = ({name, label, control, prefix, suffix}: InputProps) =>
    (
        <Controller
            name={name}
            control={control}
            render={({field: {onChange, onBlur, value, ref}, fieldState: {error, isTouched}}) => (
                <>
                    <TextLabel htmlFor={name}>{label}</TextLabel>
                    <InputBox data-prefix={prefix} data-suffix={suffix} isInvalid={!!error} isTouched={isTouched && !error}>

                        <NumericFormat
                            getInputRef={ref}
                            name={name}
                            customInput={StyledInput}
                            thousandSeparator=','
                            allowNegative={false}
                            decimalScale={2}
                            value={value ?? ''}
                            onBlur={onBlur}
                            onValueChange={(values: NumberFormatValues) => {
                                onChange(values.floatValue ?? values.value);
                            }}
                        />

                    </InputBox>
                    {error && <ValidationErrorStyled>{error.message}
                    </ValidationErrorStyled>
                    }
                </>

            )}/>
    )