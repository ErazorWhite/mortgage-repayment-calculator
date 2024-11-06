import { RadioLabel, StyledRadioInput } from './RadioInput.styled.ts';
import { ChangeEvent, FocusEvent, ForwardedRef, forwardRef } from 'react';

interface IRadioInput {
  type: string;
  value: string;
  label: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent) => void;
}

export const RadioInput = forwardRef(
  (
    { type, value, label, onChange, onBlur, name }: IRadioInput,
    ref?: ForwardedRef<HTMLInputElement>
  ) => (
    <>
      <StyledRadioInput
        type={type}
        id={value}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        ref={ref}
      />
      <RadioLabel htmlFor={value}>{label}</RadioLabel>
    </>
  )
);
