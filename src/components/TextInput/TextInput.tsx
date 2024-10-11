import {Position, TextInputProps} from "../../global/types.ts";
import {InputBox, StyledInput, TextBox, TextLabel} from "./TextInput.styled";
import {Controller} from "react-hook-form";
import {forwardRef} from "react";
import {NumericFormat} from "react-number-format";

const CustomInput = forwardRef((props, ref) => (
    <StyledInput  {...props}/>
));

export const TextInput = ({
                              label,
                              control,
                              name,
                              decoratorOptions = {text: "", pos: Position.prefix},
                          }: TextInputProps) => (
    <Controller
        name={name}
        control={control}
        render={({field: {ref, ...rest}, fieldState: {error}}) => (
            <TextBox>
                <TextLabel htmlFor={name}>{label}</TextLabel>
                <InputBox $content={decoratorOptions.text} $position={decoratorOptions.pos}>

                    <NumericFormat
                        getInputRef={ref}
                        customInput={CustomInput}
                        thousandSeparator=','
                        allowNegative={false}
                        decimalScale={2}
                        onValueChange={(values) => {
                            rest.onChange(values.floatValue);
                        }}
                    />

                </InputBox>
                {error && <p>{error.message}
                </p>
                }
            </TextBox>
        )}
    />
)