import * as yup from "yup";
import {numberFieldValidator} from "./numberFieldValidator";
import {MortgageType} from "../form/CalculatorForm/types.ts";


export const MortgageDataSchema = yup
    .object({
        amount: numberFieldValidator("Mortgage amount"),
        term: numberFieldValidator("Mortgage term"),
        rate: numberFieldValidator("Interest rate"),
        type: yup.mixed<MortgageType>()
            .oneOf(Object.values(MortgageType), 'Please select a mortgage type')
            .required('Mortgage type is required'),
    })
    .required()