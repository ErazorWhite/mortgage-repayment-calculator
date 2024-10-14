import {Position, TextInputProps} from "../../../global/types.ts";
import {Controller} from "react-hook-form";
import {TextInput} from "../../TextInput/TextInput";
import {Li, Ul} from "./TextInputGroup.styled";


export const TextInputGroup = (
    ({control, formFields}) => (
        <Ul>
            {formFields.map(({
                                 label,
                                 name,
                                 decoratorOptions = {text: "", pos: Position.prefix},
                             }: TextInputProps) =>
                <Li key={name}>
                    <Controller
                        name={name}
                        control={control}
                        render={({field: {onChange, value, ref}, fieldState: {error}}) => (
                            <TextInput
                                label={label}
                                value={value}
                                decoratorOptions={decoratorOptions}
                                error={error}
                                onChange={onChange}
                                name={name}
                                ref={ref}
                            />
                        )}
                    />
                </Li>)
            }
        </Ul>
    )
)