import {InputBox, StyledInput, TextLabel} from "./TextInput.styled";
import {NumericFormat} from "react-number-format";
import {Controller} from "react-hook-form";
import {InputProps} from "../../../global/types";

export const TextInput = ({name, label, control, prefix, suffix}: InputProps) =>
    (
        <Controller
            name={name}
            control={control}
            render={({field: {onChange, value, ref}, fieldState: {error}}) => (
                <>
                    <TextLabel htmlFor={name}>{label}</TextLabel>
                    <InputBox $prefix={prefix} $suffix={suffix} >

                        <NumericFormat
                            getInputRef={ref}
                            name={name}
                            customInput={StyledInput}
                            thousandSeparator=','
                            allowNegative={false}
                            decimalScale={2}
                            value={value}
                            onValueChange={(values) => {
                                onChange(values.floatValue ?? values.value);
                            }}
                        />

                    </InputBox>
                    {error && <p>{error.message}
                    </p>
                    }
                </>
            )}
        />
    )
