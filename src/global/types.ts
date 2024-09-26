import {FieldError, UseFormRegister} from "react-hook-form";

// CalculatorForm Data

export enum MortgageType {
    Repayment = 'Repayment',
    InterestOnly = 'Interest Only',
}

export interface MortgageData {
    amount: number;
    term: number;
    rate: number;
    type: MortgageType;
}

// Text input

export interface TextInputProps {
    label: string;
    name: keyof MortgageData;
    register: UseFormRegister<MortgageData>;
    error?: FieldError;
    type?: string;
    registerOptions?: object;
}

// Radio buttons

interface RadioOption {
    label: string;
    value: string;
}

export interface RadioGroupProps {
    label: string;
    name: keyof MortgageData;
    options: RadioOption[];
    register: UseFormRegister<MortgageData>;
    error?: FieldError;
}