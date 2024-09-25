import { FieldError, UseFormRegister } from 'react-hook-form';
import {MortgageData} from "../CalculatorForm/CalculatorForm.tsx";

interface TextInputProps {
    label: string;
    name: keyof MortgageData;
    register: UseFormRegister<MortgageData>;
    error?: FieldError;
    type?: string;
    registerOptions?: object;
}

export const TextInput = ({ label, name, register, error, type = 'text', registerOptions }: TextInputProps) => (
    <div>
        <label htmlFor={name}>{label}</label>
        <input type={type} {...register(name, registerOptions)} />
        {error && <p>{error.message}</p>}
    </div>
);
