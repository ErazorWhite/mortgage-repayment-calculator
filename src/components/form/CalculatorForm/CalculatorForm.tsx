import { SubmitHandler, useForm } from 'react-hook-form';
import { useCallback, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { IMortgageData } from './types.ts';
import { RadioGroup } from '../RadioGroup/RadioGroup.tsx';
import { calculateMortgage } from '../../../utilities/calculateMortgage.ts';
import {
  ClearButton,
  Form,
  FormHeader,
  FormThumb,
  FullInputSeparator,
  H1,
  HalfInputSeparator,
  InputsContainer,
} from './CalculatorForm.styled';
import { CalculateButton } from '../../CalculateButton/CalculateButton';
import { MortgageDataSchema } from '../../../utilities/validationSchemas';
import { FormattedNumberInput } from '../FormattedNumberInput/FormattedNumberInput.tsx';
import { CalculationResult } from '../../Results/CalculationResult/CalculationResult.tsx';
import { EmptyResult } from '../../Results/EmptyResult/EmptyResult.tsx';
import { MortgageType } from '../../../global/sharedData.ts';

const radioOptions = [
  { label: MortgageType.Repayment, value: MortgageType.Repayment },
  { label: MortgageType.InterestOnly, value: MortgageType.InterestOnly },
];

export const CalculatorForm = () => {
  const [monthlyRepayment, setMonthlyRepayment] = useState<number | null>(null);
  const [totalRepayment, setTotalRepayment] = useState<number | null>(null);
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IMortgageData>({ resolver: yupResolver(MortgageDataSchema), mode: 'onTouched' });

  const onSubmit: SubmitHandler<IMortgageData> = useCallback(({ amount, term, rate, type }) => {
    const { monthlyPayment, totalRepayment } = calculateMortgage({ term, rate, type, amount });

    setMonthlyRepayment(monthlyPayment);
    setTotalRepayment(totalRepayment);
  }, []);

  const handleClear = useCallback(() => {
    setMonthlyRepayment(null);
    setTotalRepayment(null);
    reset();
  }, []);

  return (
    <FormThumb>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormHeader>
          <H1>Mortgage Calculator</H1>
          <ClearButton type="button" onClick={handleClear}>
            Clear All
          </ClearButton>
        </FormHeader>
        <InputsContainer>
          <FullInputSeparator>
            <FormattedNumberInput
              name="amount"
              label="Mortgage Amount"
              prefix="£"
              control={control}
            />
          </FullInputSeparator>
          <HalfInputSeparator>
            <FormattedNumberInput
              name="term"
              label="Mortgage Term"
              suffix="years"
              control={control}
            />
          </HalfInputSeparator>
          <HalfInputSeparator>
            <FormattedNumberInput name="rate" label="Interest rate" suffix="%" control={control} />
          </HalfInputSeparator>
        </InputsContainer>
        <RadioGroup
          label="Mortgage Type"
          name="type"
          options={radioOptions}
          register={register}
          error={errors.type}
        />
        <CalculateButton type="submit">Calculate Repayments</CalculateButton>
      </Form>
      {monthlyRepayment && totalRepayment ? (
        <CalculationResult monthlyRepayment={monthlyRepayment} totalRepayment={totalRepayment} />
      ) : (
        <EmptyResult />
      )}
    </FormThumb>
  );
};
