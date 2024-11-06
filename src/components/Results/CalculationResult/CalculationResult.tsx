import { Heading, CalculationResultContainer } from '../ResultsCommon.styled.ts';
import {
  CalculationLabel,
  CalculationValue,
  CalculationDetailsBox,
  Description,
} from './CalculationResult.styled.ts';
import { useMemo } from 'react';

interface IResultsProps {
  monthlyRepayment: number;
  totalRepayment: number;
  currency?: string;
  calculationHeadingText?: string;
  calculationDescriptionText?: string;
  calculationPrimaryLabelText?: string;
  calculationSecondaryLabelText?: string;
}

export const CalculationResult = ({
  monthlyRepayment,
  totalRepayment,
  currency = 'GBP',
  calculationHeadingText = 'Your results',
  calculationDescriptionText = 'Your results are shown below based on the information you provided. To adjust the results, edit\n' +
    '                the form and click “calculate repayments” again.',
  calculationPrimaryLabelText = 'Your monthly repayments',
  calculationSecondaryLabelText = 'Total you will repay over the term',
}: IResultsProps) => {
  const formatter = useMemo(
    () =>
      new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
      }),
    [currency]
  );

  return (
    monthlyRepayment &&
    totalRepayment && (
      <CalculationResultContainer>
        <Heading>{calculationHeadingText}</Heading>
        <Description>{calculationDescriptionText}</Description>

        <CalculationDetailsBox>
          <CalculationLabel>{calculationPrimaryLabelText}</CalculationLabel>
          <CalculationValue primary>{formatter.format(monthlyRepayment)}</CalculationValue>

          <CalculationLabel>{calculationSecondaryLabelText}</CalculationLabel>
          <CalculationValue>{formatter.format(totalRepayment)}</CalculationValue>
        </CalculationDetailsBox>
      </CalculationResultContainer>
    )
  );
};
