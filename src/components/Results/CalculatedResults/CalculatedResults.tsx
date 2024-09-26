import React from 'react'
import {ResultsProps} from "../../../global/types";
import {ResultsBox, H2, P, H3, H4, CalculatedBox, Description} from "./CalculatedResults.styled";

export const CalculatedResults = ({monthlyRepayment, totalRepayment}: ResultsProps) => {
    return (
        <ResultsBox>
            <H2>Your results</H2>
            <Description>
                Your results are shown below based on the information you provided. To adjust the results, edit
                the form and click “calculate repayments” again.
            </Description>

            <CalculatedBox>
                <P>Your monthly repayments</P>
                <H3>£{monthlyRepayment}</H3>

                <P>Total you'll repay over the term</P>
                <H4>£{totalRepayment}</H4>
            </CalculatedBox>
        </ResultsBox>
    )
}
