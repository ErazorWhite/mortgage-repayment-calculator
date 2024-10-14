import {Control, FieldError, UseFormRegister} from "react-hook-form";
import {ReactNode, Ref} from "react";

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

export enum Position {
    prefix = 'prefix',
    suffix = 'suffix'
}

// Input

export interface MortgageInput {
    name: keyof MortgageData;
    label: string;
    decoratorOptions: {
        text: string;
        pos: Position;
    };
}

export interface InputBoxProps {
    $content?: string;
    $position?: 'prefix' | 'suffix';
}

export interface TextInputProps {
    label: string;
    name: string;
    decoratorOptions?: {
        text: string;
        pos: Position;
    };
    error?: FieldError;
    control?: Control<any>;
    onChange: (value: any) => void;
    onBlur?: () => void;
    value: any;
    ref?: Ref<HTMLInputElement>;
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