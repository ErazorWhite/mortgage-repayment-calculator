import {FieldError, UseFormRegister} from "react-hook-form";
import {ReactNode} from "react";

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

export enum Direction {
    prefix = 'prefix',
    suffix = 'suffix'
}

export interface TextInputProps {
    label: string;
    name: keyof MortgageData;
    register: UseFormRegister<MortgageData>;
    error?: FieldError;
    type?: string;
    decoratorOptions?: {text: string, dir?: Direction};
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

// Results

export interface ResultsProps {
    monthlyRepayment: number | null;
    totalRepayment: number | null;
}

// Children

export interface Props {
    children?: ReactNode
}