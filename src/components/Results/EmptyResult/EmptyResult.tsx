import {
    Heading,
} from "../ResultsCommon.styled.ts";
import {ResultsBackground} from "../../icons/ResultsBackground.tsx";
import {ResultsBoxEmptyContainer} from "./EmptyResult.styled.ts";

interface EmptyResultsProps {
    emptyResultsHeadingText?: string;
    emptyResultsDescriptionText?: string;
}

export const EmptyResult = ({
                                 emptyResultsHeadingText = "Results shown here",
                                 emptyResultsDescriptionText = "Complete the form and click calculate repayments to see what your monthly repayments would be.",
                             }: EmptyResultsProps) => (
    <ResultsBoxEmptyContainer>
        <ResultsBackground/>
        <Heading isEmpty>{emptyResultsHeadingText}</Heading>
        <p>{emptyResultsDescriptionText}</p>
    </ResultsBoxEmptyContainer>
);
