import React from 'react'
import {H2, P, ResultsBoxEmpty} from "./EmptyResults.styled";
import {ResultsBackground} from "../../icons/ResultsBackground";

export const EmptyResults = () => {
    return (
        <ResultsBoxEmpty>
            <ResultsBackground/>
            <H2>Results shown here</H2>
            <P>
                Complete the form and click "calculate repayments" to see what your monthly repayments would
                be.
            </P>
        </ResultsBoxEmpty>
    )
}
