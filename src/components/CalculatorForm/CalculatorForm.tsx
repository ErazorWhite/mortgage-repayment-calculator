import {SubmitErrorHandler, SubmitHandler, useForm} from "react-hook-form";
import {useState} from "react";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {MortgageData, MortgageType} from "../../global/types.ts";
import {TextInput} from "../TextInput/TextInput.tsx";
import {RadioGroup} from "../RadioGroup/RadioGroup.tsx";
import {Results} from "../Results/Results.tsx";
import {numberFieldValidator} from "../utilities/numberFieldValidator.ts";
import {mortgageCalc} from "../utilities/mortgageCalc.ts";

// # TODO
//     # DONE # Break into sub-components to improve code readability;
//     # DONE # Validation;
//     # Styling;
//     # Icons;
//     # Animations;

const MortgageDataSchema = yup
    .object({
        amount: numberFieldValidator("Mortgage amount"),
        term: numberFieldValidator("Mortgage term"),
        rate: numberFieldValidator("Interest rate"),
        type: yup.mixed<MortgageType>()
            .oneOf(Object.values(MortgageType), 'Please select a mortgage type')
            .required('Mortgage type is required'),
    })
    .required()

export const CalculatorForm = () => {
    const [monthlyRepayment, setMonthlyRepayment] = useState<number | null>(null);
    const [totalRepayment, setTotalRepayment] = useState<number | null>(null);
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm<MortgageData>({resolver: yupResolver(MortgageDataSchema)});

    const onSubmit: SubmitHandler<MortgageData> = ({amount, term, rate, type}) => {
        let {monthlyPayment, totalRepayment} = mortgageCalc(term, rate, type, amount);

        setMonthlyRepayment(parseFloat(monthlyPayment.toFixed(2)));
        setTotalRepayment(parseFloat(totalRepayment.toFixed(2)));
    };
    const onError: SubmitErrorHandler<MortgageData> = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit, onError)}>
            <div>
                <h1>Mortgage Calculator</h1>
                <button type="button" onClick={() => {
                    reset()
                }}>Clear All
                </button>
            </div>

            <TextInput
                label="Mortgage Amount"
                name="amount"
                register={register}
                error={errors.amount}
            />

            <TextInput
                label="Mortgage Term"
                name="term"
                register={register}
                error={errors.term}
            />

            <TextInput
                label="Interest Rate"
                name="rate"
                register={register}
                error={errors.rate}
            />

            <RadioGroup
                label="Mortgage Type"
                name="type"
                options={[
                    {label: 'Repayment', value: 'Repayment'},
                    {label: 'Interest Only', value: 'Interest Only'},
                ]}
                register={register}
                error={errors.type}

            />

            <button>Calculate Repayments</button>

            <Results monthlyRepayment={monthlyRepayment} totalRepayment={totalRepayment}/>

        </form>
    )
}
