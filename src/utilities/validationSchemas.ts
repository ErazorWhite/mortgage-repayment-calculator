import * as yup from "yup";
import {numberFieldValidator} from "./numberFieldValidator.ts";
import {MortgageType} from "../components/form/CalculatorForm/types.ts";

const maxTerm = 100;
const maxRate = 250;

export const MortgageDataSchema = yup
    .object({
        amount: numberFieldValidator("Mortgage amount"),
        term: numberFieldValidator("Mortgage term").max(maxTerm, `Select a value less than ${maxTerm}`),
        rate: numberFieldValidator("Interest rate").max(maxRate, `Select a value less than ${maxRate}`),
        type: yup.mixed<MortgageType>()
            .oneOf(Object.values(MortgageType), 'Please select a mortgage type')
            .required('Mortgage type is required'),
    })
    .required()