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