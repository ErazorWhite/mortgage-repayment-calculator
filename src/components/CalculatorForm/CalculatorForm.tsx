import {SubmitErrorHandler, SubmitHandler, useForm} from "react-hook-form";
import {useState} from "react";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {TextInput} from "../TextInput/TextInput.tsx";
import {RadioGroup} from "../RadioGroup/RadioGroup.tsx";
import {Results} from "../Results/Results.tsx";

// # TODO
//     # DONE # Break into sub-components to improve code readability;
//     # IN PROGRESS # Validation;
//     # Styling;
//     # Icons;
//     # Animations;

enum MortgageType {
    Repayment = 'Repayment',
    InterestOnly = 'Interest Only',
}

export interface MortgageData {
    amount: number;
    term: number;
    rate: number;
    type: MortgageType;
}

const MortgageDataSchema = yup
    .object({
        amount: yup.number().positive().integer().required("required").typeError("123"),
        term: yup.number().positive().integer().required(),
        rate: yup.number().positive().integer().required(),
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
        const mortgageTermMonths = term * 12;
        const monthlyInterestRate = (rate / 100) / 12;

        let monthlyPayment: number;
        let totalRepayment: number;

        if (type === MortgageType.Repayment) {
            const numerator = amount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, mortgageTermMonths);
            const denominator = Math.pow(1 + monthlyInterestRate, mortgageTermMonths) - 1;

            monthlyPayment = numerator / denominator;
            totalRepayment = monthlyPayment * mortgageTermMonths;
        } else {
            monthlyPayment = (amount * monthlyInterestRate);
            totalRepayment = monthlyPayment * mortgageTermMonths;
        }

        console.log("Your monthly repayment: £" + monthlyPayment.toFixed(2));
        console.log("Total you'll repay over the term: £" + totalRepayment.toFixed(2));

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
