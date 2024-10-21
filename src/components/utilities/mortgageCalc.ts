import {MortgageData, MortgageType} from "../form/CalculatorForm/types.ts";

export function mortgageCalc({term, rate, type, amount}: MortgageData) {
    const mortgageTermMonths = term * 12;
    const monthlyInterestRate = (rate / 100) / 12;

    if (type === MortgageType.Repayment) {
        const numerator = amount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, mortgageTermMonths);
        const denominator = Math.pow(1 + monthlyInterestRate, mortgageTermMonths) - 1;

        const monthlyPayment = numerator / denominator;
        const totalRepayment = monthlyPayment * mortgageTermMonths;

        return {monthlyPayment, totalRepayment};
    } else {
        const monthlyPayment = amount * monthlyInterestRate;
        const totalRepayment = monthlyPayment * mortgageTermMonths;

        return {monthlyPayment, totalRepayment};
    }
}