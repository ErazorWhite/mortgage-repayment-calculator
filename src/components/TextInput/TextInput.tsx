import {TextInputProps} from "../../global/types.ts";

export const TextInput = ({label, name, register, error, type = 'text', registerOptions}: TextInputProps) => (
    <div>
        <label htmlFor={name}>{label}</label>
        <input type={type} {...register(name, registerOptions)} />
        {error && <p>{error.message}</p>}
    </div>
);
