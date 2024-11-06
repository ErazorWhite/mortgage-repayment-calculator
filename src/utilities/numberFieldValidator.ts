import * as yup from 'yup';

export const numberFieldValidator = (fieldName: string) => {
  return yup
    .number()
    .required(`${fieldName} is required`)
    .typeError(`${fieldName} must be a number`)
    .transform((value, originalValue) =>
      (isNaN(value) && value === '') || originalValue === '' ? undefined : value
    )
    .positive('Must be positive');
};
