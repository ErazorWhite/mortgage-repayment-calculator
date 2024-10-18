import {SubmitErrorHandler, SubmitHandler, useForm} from "react-hook-form";
import {useCallback, useState} from "react";
import {yupResolver} from '@hookform/resolvers/yup';
import {MortgageData} from "../../../global/types.ts";
import {RadioGroup} from "../RadioGroup/RadioGroup.tsx";
import {Results} from "../../Results/Results.tsx";
import {mortgageCalc} from "../../utilities/mortgageCalc.ts";
import {ClearButton, Form, FormHeader, FormThumb, FullLi, H1, HalfLi, Ul} from "./CalculatorForm.styled";
import {CalculateButton} from "../../CalculateButton/CalculateButton";
import {MortgageDataSchema} from "../../utilities/validationSchemas";
import {TextInput} from "../TextInput/TextInput";

const radioOptions = [
    {label: 'Repayment', value: 'Repayment'},
    {label: 'Interest Only', value: 'Interest Only'},
]

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

    const onSubmit: SubmitHandler<MortgageData> = useCallback(({amount, term, rate, type}) => {

        let {monthlyPayment, totalRepayment} = mortgageCalc(term, rate, type, amount);

        setMonthlyRepayment(parseFloat(monthlyPayment.toFixed(2)));
        setTotalRepayment(parseFloat(totalRepayment.toFixed(2)));

    }, [])

    const handleClear = useCallback(() => {
        setMonthlyRepayment(null);
        setTotalRepayment(null);
        reset();
    }, []);

    const onError: SubmitErrorHandler<MortgageData> = useCallback((data) => console.log(data), []);

    return (
        <FormThumb>
            <Form onSubmit={handleSubmit(onSubmit, onError)}>
                <FormHeader>
                    <H1>Mortgage Calculator</H1>
                    <ClearButton type="button" onClick={handleClear}>Clear All
                    </ClearButton>
                </FormHeader>

                <Ul>
                    <FullLi>
                        <TextInput name="amount" label="Mortgage Amount" prefix="£" control={control}/>
                    </FullLi>
                    <HalfLi>
                        <TextInput name="term" label="Mortgage Term" suffix="years" control={control}/>
                    </HalfLi>
                    <HalfLi>
                        <TextInput name="rate" label="Interest rate" suffix="%" control={control}/>
                    </HalfLi>
                </Ul>


                <RadioGroup
                    label="Mortgage Type"
                    name="type"
                    options={radioOptions}
                    register={register}
                    error={errors.type}
                />

                <CalculateButton>Calculate Repayments</CalculateButton>

            </Form>
            <Results monthlyRepayment={monthlyRepayment} totalRepayment={totalRepayment}/>
        </FormThumb>
    )
}
