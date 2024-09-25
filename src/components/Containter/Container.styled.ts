import {styled} from "@linaria/react";

export const StyledContainer = styled.div`
    max-width: 380px;
    margin: 0 auto;
    padding: 0 20px;
    justify-content: center;
    align-items: center;
    align-content: center;

    @media (--tablet-bp) {
        max-width: 768px;
        padding: 0 32px;
    }

    @media (--desktop-bp) {
        max-width: 1440px;
    }
`

