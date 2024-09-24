import {SubmitErrorHandler, SubmitHandler, useForm} from "react-hook-form";
import {useState} from "react";

// # TODO
//     # Break into sub-components to improve code readability;
//     # Validation;
//     # Styling;
//     # Icons;
//     # Animations;

enum mortgageType {
    repayment,
    interestOnly
}

interface MortgageData {
    amount: number;
    term: number;
    rate: number;
    type: mortgageType;
}

export const CalculatorForm = () => {

    const [monthlyRepayment, setMonthlyRepayment] = useState<number | null>(null);
    const [totalRepayment, setTotalRepayment] = useState<number | null>(null);
    const {register, handleSubmit, reset, formState: {errors}} = useForm<MortgageData>();

    const onSubmit: SubmitHandler<MortgageData> = ({amount, term, rate}) => {
        const mortgageTermMonths = term * 12;
        const monthlyInterestRate = (rate / 100) / 12;

        const numerator = amount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, mortgageTermMonths);
        const denominator = Math.pow(1 + monthlyInterestRate, mortgageTermMonths) - 1;

        const monthlyPayment = numerator / denominator;
        const totalRepayment = monthlyPayment * mortgageTermMonths;

        console.log("Your monthly repayment: £" + monthlyPayment.toFixed(2));
        console.log("Total you'll repay over the term: £" + totalRepayment.toFixed(2));

        setMonthlyRepayment(monthlyPayment);
        setTotalRepayment(totalRepayment);
    };
    const onError: SubmitErrorHandler<MortgageData> = (data) => console.log(data);

    const isName = () => {
        return true;
    }

    return (
        <form onSubmit={handleSubmit(onSubmit, onError)}>
            <div>
                <h1>Mortgage Calculator</h1>
                <button type="button" onClick={() => {
                    reset()
                }}>Clear All
                </button>
            </div>

            <label htmlFor="amount">Mortgage Amount</label>
            <input type="text" {...register('amount', {required: true, validate: isName})}/>
            {errors.amount && <p>Error</p>}

            <label htmlFor="term">Mortgage Term</label>
            <input type="text" {...register('term', {required: true})}/>

            <label htmlFor="rate">Interest Rate</label>
            <input type="text" {...register('rate', {required: true})}/>

            <legend>Mortgage Type</legend>

            <label htmlFor="repayment">
                <input {...register("type", {required: true})} type="radio" id="repayment" value="Repayment"/>
                Repayment
            </label>

            <label htmlFor="interestOnly">
                <input {...register("type", {required: true})} type="radio" id="interestOnly"
                       value="Interest Only"/>
                Interest Only
            </label>


            <button>Calculate Repayments</button>

            {monthlyRepayment ?
                <div>
                    <p>Your monthly repayments</p>
                    <p>£{monthlyRepayment.toFixed(2)}</p>

                    <p>Total you'll repay over the term</p>
                    <p>£{totalRepayment?.toFixed(2)}</p>
                    <h2>Results shown here</h2>
                    <p>Complete the form and click "calculate repayments" to see what your monthly repayments would
                        be.</p>
                </div>
                :
                <div>
                    <h2>Your results</h2>
                    <p>Your results are shown below based on the information you provided. To adjust the results, edit
                        the
                        form and click “calculate repayments” again.</p>
                </div>
            }
        </form>
    )
}
