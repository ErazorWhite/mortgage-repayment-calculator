import {InputBox, StyledInput, TextLabel} from "./TextInput.styled";
import {NumericFormat} from "react-number-format";
import {Controller} from "react-hook-form";
import {InputProps} from "../../../global/types";
import {ValidateErrorStyled} from "../../ValidateError/ValidateError.styled";

export const TextInput = ({name, label, control, prefix, suffix}: InputProps) =>
    (
        <Controller
            name={name}
            control={control}
            render={({field: {onChange, onBlur, value, ref}, fieldState: {error, isTouched}}) => (
                <>
                    <TextLabel htmlFor={name}>{label}</TextLabel>
                    <InputBox data-prefix={prefix} data-suffix={suffix} data-error={error}
                              data-touched={isTouched && !error ? true : undefined}>

                        <NumericFormat
                            getInputRef={ref}
                            name={name}
                            customInput={StyledInput}
                            thousandSeparator=','
                            allowNegative={false}
                            decimalScale={2}
                            value={value ?? ''}
                            onBlur={onBlur}
                            onValueChange={(values) => {
                                onChange(values.floatValue ?? values.value);
                            }}
                        />

                    </InputBox>
                    {error && <ValidateErrorStyled>{error.message}
                    </ValidateErrorStyled>
                    }
                </>

            )}/>
    )