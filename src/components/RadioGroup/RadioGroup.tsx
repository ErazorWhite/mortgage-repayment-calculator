import {RadioGroupProps} from "../../global/types.ts";

export const RadioGroup = ({label, name, options, register, error}: RadioGroupProps) => (
    <div>
        <legend>{label}</legend>
        {options.map((option) => (
            <label key={option.value} htmlFor={option.value}>
                <input
                    {...register(name)}
                    type="radio"
                    id={option.value}
                    value={option.value}
                />
                {option.label}
            </label>
        ))}
        {error && <p>{error.message}</p>}

    </div>
);
