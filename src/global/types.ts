import {Control, FieldError, FieldValues, Path, UseFormRegister} from "react-hook-form";
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

export enum Position {
    prefix = 'prefix',
    suffix = 'suffix'
}

// Input

export interface InputBoxProps {
    $isInvalid?: boolean;
    $isTouched?: boolean;
}

export interface InputProps {
    label: string;
    name: string;
    control: Control<any>;
    prefix?: string;
    suffix?: string
}

// Radio buttons

interface RadioOption {
    label: string;
    value: string;
}

export interface RadioGroupProps<TFieldValues extends FieldValues> {
    label: string;
    name: Path<TFieldValues>;
    options: RadioOption[];
    register: UseFormRegister<TFieldValues>;
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