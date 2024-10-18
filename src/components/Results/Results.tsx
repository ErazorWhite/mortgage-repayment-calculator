import {EmptyResults} from "./EmptyResults/EmptyResults";
import {ResultsProps} from "../../global/types";
import {CalculatedResults} from "./CalculatedResults/CalculatedResults";

export const Results = ({monthlyRepayment, totalRepayment}: ResultsProps) => (
    monthlyRepayment && totalRepayment ?
        <CalculatedResults monthlyRepayment={monthlyRepayment} totalRepayment={totalRepayment}/>
        :
        <EmptyResults/>
);
