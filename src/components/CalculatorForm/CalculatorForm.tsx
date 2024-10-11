import {SubmitErrorHandler, SubmitHandler, useForm} from "react-hook-form";
import {useState} from "react";
import {yupResolver} from '@hookform/resolvers/yup';
import {Position, MortgageData, MortgageInput} from "../../global/types.ts";
import {TextInput} from "../TextInput/TextInput.tsx";
import {RadioGroup} from "../RadioGroup/RadioGroup.tsx";
import {Results} from "../Results/Results.tsx";
import {mortgageCalc} from "../utilities/mortgageCalc.ts";
import {ClearButton, Form, FormHeader, H1} from "./CalculatorForm.styled";
import {CalculateButton} from "../CalculateButton/CalculateButton";
import {MortgageDataSchema} from "../utilities/validationSchemas";

const formFields: Array<MortgageInput> = [
    {
        name: 'amount',
        label: 'Mortgage Amount',
        decoratorOptions: {text: "£", pos: Position.prefix}
    },
    {
        name: 'term',
        label: 'Mortgage Term',
        decoratorOptions: {text: "years", pos: Position.suffix}
    },
    {
        name: 'rate',
        label: 'Interest Rate',
        decoratorOptions: {text: "%", pos: Position.suffix}
    }
];

export const CalculatorForm = () => {
    const [monthlyRepayment, setMonthlyRepayment] = useState<number | null>(null);
    const [totalRepayment, setTotalRepayment] = useState<number | null>(null);
    const {
        control,
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm<MortgageData>({resolver: yupResolver(MortgageDataSchema), mode: "onTouched"});

    const onSubmit: SubmitHandler<MortgageData> = ({amount, term, rate, type}) => {
        let {monthlyPayment, totalRepayment} = mortgageCalc(term, rate, type, amount);

        setMonthlyRepayment(parseFloat(monthlyPayment.toFixed(2)));
        setTotalRepayment(parseFloat(totalRepayment.toFixed(2)));
    };

    const handleClear = () => {
        setMonthlyRepayment(null);
        setTotalRepayment(null);
        reset()
    };

    const onError: SubmitErrorHandler<MortgageData> = (data) => console.log(data);

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit, onError)}>
                <FormHeader>
                    <H1>Mortgage Calculator</H1>
                    <ClearButton type="button" onClick={handleClear}>Clear All
                    </ClearButton>
                </FormHeader>

                {formFields.map(({...props}) => (
                    <TextInput key={props.name} control={control} {...props}/>
                ))}

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

                <CalculateButton>Calculate Repayments</CalculateButton>

            </Form>

            <Results monthlyRepayment={monthlyRepayment} totalRepayment={totalRepayment}/>
        </>
    )
}
