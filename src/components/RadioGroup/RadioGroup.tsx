import {FieldError, UseFormRegister} from 'react-hook-form';
import {MortgageData} from "../CalculatorForm/CalculatorForm.tsx";

interface RadioOption {
    label: string;
    value: string;
}

interface RadioGroupProps {
    label: string;
    name: keyof MortgageData;
    options: RadioOption[];
    register: UseFormRegister<MortgageData>;
    error?: FieldError;
}

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
