import {
    ResultsHeading,
} from "../ResultsCommon.styled.ts";
import {ResultsBackground} from "../../icons/ResultsBackground.tsx";
import {ResultsBoxEmptyContainer} from "./EmptyResults.styled.ts";

interface EmptyResultsProps {
    emptyResultsHeadingText?: string;
    emptyResultsDescriptionText?: string;
}

export const EmptyResults = ({
                                 emptyResultsHeadingText = "Results shown here",
                                 emptyResultsDescriptionText = "Complete the form and click calculate repayments to see what your monthly repayments would be.",
                             }: EmptyResultsProps) => (
    <ResultsBoxEmptyContainer>
        <ResultsBackground/>
        <ResultsHeading stylesForEmpty>{emptyResultsHeadingText}</ResultsHeading>
        <p>{emptyResultsDescriptionText}</p>
    </ResultsBoxEmptyContainer>
);
