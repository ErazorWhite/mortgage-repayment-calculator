import {Direction, TextInputProps} from "../../global/types.ts";
import {Decorator, InputBox, StyledInput, TextBox, TextLabel} from "./TextInput.styled";

export const TextInput = ({
                              label,
                              name,
                              register,
                              error,
                              type = 'text',
                              decoratorOptions = {text: "", dir: Direction.prefix},
                              registerOptions
                          }: TextInputProps) => (
    <TextBox>
        <TextLabel htmlFor={name}>{label}</TextLabel>
        <InputBox>
            {decoratorOptions.dir === Direction.prefix ?
                <>
                    <Decorator>{decoratorOptions.text}</Decorator>
                    <StyledInput type={type} {...register(name, registerOptions)} />
                </> :
                <>
                    <StyledInput type={type} {...register(name, registerOptions)} />
                    <Decorator>{decoratorOptions.text}</Decorator>
                </>
            }

        </InputBox>
        {error && <p>{error.message}</p>}
    </TextBox>
);
