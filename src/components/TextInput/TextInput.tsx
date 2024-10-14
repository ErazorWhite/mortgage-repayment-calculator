import {Position} from "../../global/types.ts";
import {InputBox, StyledInput, TextLabel} from "./TextInput.styled";
import {forwardRef} from "react";
import {NumericFormat} from "react-number-format";

export const TextInput = forwardRef(
    (
        {
            label,
            name,
            value,
            decoratorOptions = {text: "", pos: Position.prefix},
            error,
            onChange,
        },
        ref
    ) => (
        <>
            <TextLabel htmlFor={name}>{label}</TextLabel>
            <InputBox $content={decoratorOptions.text} $position={decoratorOptions.pos}>

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
    )
)