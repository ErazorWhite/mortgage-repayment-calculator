interface ResultsProps {
    monthlyRepayment: number | null;
    totalRepayment: number | null;
}

export const Results = ({monthlyRepayment, totalRepayment}: ResultsProps) => (
    monthlyRepayment && totalRepayment ?
        <div>
            <h2>Your results</h2>
            <p>
                Your results are shown below based on the information you provided. To adjust the results, edit
                the form and click “calculate repayments” again.
            </p>

            <p>Your monthly repayments</p>
            <p>£{monthlyRepayment}</p>

            <p>Total you'll repay over the term</p>
            <p>£{totalRepayment}</p>
        </div>
        :
        <div>
            <h2>Results shown here</h2>
            <p>Complete the form and click "calculate repayments" to see what your monthly repayments would
                be.</p>
        </div>
);
