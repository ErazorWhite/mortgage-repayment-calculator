import { IMortgageData } from '../components/form/CalculatorForm/types.ts';
import { MortgageType } from '../global/sharedData.ts';

export function calculateMortgage({ term, rate, type, amount }: IMortgageData) {
  const mortgageTermMonths = term * 12;
  const monthlyInterestRate = rate / 100 / 12;

  let monthlyPaymentUnrounded: number;

  if (type === MortgageType.Repayment) {
    const numerator =
      amount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, mortgageTermMonths);
    const denominator = Math.pow(1 + monthlyInterestRate, mortgageTermMonths) - 1;

    monthlyPaymentUnrounded = numerator / denominator;
  } else {
    monthlyPaymentUnrounded = amount * monthlyInterestRate;
  }

  const totalRepaymentUnrounded = monthlyPaymentUnrounded * mortgageTermMonths;

  const monthlyPayment = Math.round(monthlyPaymentUnrounded * 100) / 100;
  const totalRepayment = Math.round(totalRepaymentUnrounded * 100) / 100;

  return { monthlyPayment, totalRepayment };
}
