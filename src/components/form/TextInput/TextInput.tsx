import {InputBox, StyledInput, TextLabel} from "./TextInput.styled";
import {NumberFormatValues, NumericFormat} from "react-number-format";
import {Controller} from "react-hook-form";
import {InputProps} from "../../../global/types";
import {ValidationErrorStyled} from "../../ValidateError/ValidationErrorStyled.ts";
import {useCallback} from "react";

export const TextInput = ({name, label, control, prefix, suffix}: InputProps) =>
    (
        <Controller
            name={name}
            control={control}
            render={({field: {onChange, onBlur, value, ref}, fieldState: {error, isTouched}}) => (
                <>
                    <TextLabel htmlFor={name}>{label}</TextLabel>
                    <InputBox data-prefix={prefix} data-suffix={suffix} $isInvalid={!!error} $isTouched={isTouched && !error}>

                        <NumericFormat
                            getInputRef={ref}
                            name={name}
                            customInput={StyledInput}
                            thousandSeparator=','
                            allowNegative={false}
                            decimalScale={2}
                            value={value ?? ''}
                            onBlur={onBlur}
                            onValueChange={useCallback((values: NumberFormatValues) => {
                                onChange(values.floatValue ?? values.value);
                            },[])}
                        />

                    </InputBox>
                    {error && <ValidationErrorStyled>{error.message}
                    </ValidationErrorStyled>
                    }
                </>

            )}/>
    )