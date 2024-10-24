import {MortgageType} from "../../../global/sharedData.ts";

export interface IMortgageData {
    amount: number;
    term: number;
    rate: number;
    type: MortgageType;
}