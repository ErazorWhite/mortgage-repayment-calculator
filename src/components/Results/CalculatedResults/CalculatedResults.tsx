import {
    ResultsHeading,
    ResultsCalculatedContainer
} from "../ResultsCommon.styled.ts";
import {
    NumbersLabel,
    NumbersHeading,
    CalculatedNumbersBox,
    Description
} from "./CalculatedResults.styled.ts";
import {useMemo} from "react";

interface ResultsProps {
    monthlyRepayment: number;
    totalRepayment: number;
    currency?: string;
    calculatedHeadingText?: string;
    calculatedDescriptionText?: string;
    numbersPrimaryLabelText?: string;
    numbersSecondaryLabelText?: string;
}

export const CalculatedResults = ({
                                      monthlyRepayment,
                                      totalRepayment,
                                      currency = "GBP",
                                      calculatedHeadingText = "Your results",
                                      calculatedDescriptionText = "Your results are shown below based on the information you provided. To adjust the results, edit\n" +
                                      "                the form and click “calculate repayments” again.",
                                      numbersPrimaryLabelText = "Your monthly repayments",
                                      numbersSecondaryLabelText = "Total you'll repay over the term",
                                  }: ResultsProps) => {

    const formatter = useMemo(
        () =>
            new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: currency,
            }),
        [currency]
    );

    return (
        monthlyRepayment && totalRepayment &&
        <ResultsCalculatedContainer>
            <ResultsHeading>{calculatedHeadingText}</ResultsHeading>
            <Description>
                {calculatedDescriptionText}
            </Description>

            <CalculatedNumbersBox>
                <NumbersLabel>{numbersPrimaryLabelText}</NumbersLabel>
                <NumbersHeading primary>{formatter.format(monthlyRepayment)}</NumbersHeading>

                <NumbersLabel>{numbersSecondaryLabelText}</NumbersLabel>
                <NumbersHeading>{formatter.format(totalRepayment)}</NumbersHeading>
            </CalculatedNumbersBox>
        </ResultsCalculatedContainer>
    )
}