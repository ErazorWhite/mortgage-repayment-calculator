import React from 'react'
import {H2, P, ResultsBox} from "./EmptyResults.styled";
import {ResultsBackground} from "../../../assets/Icons/ResultsBackground";

export const EmptyResults = () => {
    return (
        <ResultsBox>
            <ResultsBackground/>
            <H2>Results shown here</H2>
            <P>
                Complete the form and click "calculate repayments" to see what your monthly repayments would
                be.
            </P>
        </ResultsBox>
    )
}
