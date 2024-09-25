import {MortgageType} from "../../global/types.ts";

export function mortgageCalc(term: number, rate: number, type: MortgageType, amount: number) {
    const mortgageTermMonths = term * 12;
    const monthlyInterestRate = (rate / 100) / 12;

    let monthlyPayment: number;
    let totalRepayment: number;

    if (type === MortgageType.Repayment) {
        const numerator = amount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, mortgageTermMonths);
        const denominator = Math.pow(1 + monthlyInterestRate, mortgageTermMonths) - 1;

        monthlyPayment = numerator / denominator;
        totalRepayment = monthlyPayment * mortgageTermMonths;
    } else {
        monthlyPayment = (amount * monthlyInterestRate);
        totalRepayment = monthlyPayment * mortgageTermMonths;
    }
    return {monthlyPayment, totalRepayment};
}