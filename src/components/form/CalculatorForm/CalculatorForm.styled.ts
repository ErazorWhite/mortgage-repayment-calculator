import styled from "styled-components";
import {typography} from "../../../global/theme";
import {DESKTOP_BP, PHONE_BP, TABLET_BP} from "../../../global/breakpoints";

export const FormThumb = styled.div`
    background-color: var(--color-white);

    @media screen and ${TABLET_BP} {
        border-radius: 24px;
    }

    @media screen and ${DESKTOP_BP} {
        display: flex;
    }
    
    box-shadow: 0 32px 64px rgba(19, 48, 65, 0.1);
`

export const Form = styled.form`
    padding: 24px 32px;
    flex: 1;

    @media screen and ${DESKTOP_BP} {
        padding: 40px;

    }
`

export const FormHeader = styled.div`
    margin-bottom: 24px;

    @media screen and ${TABLET_BP} {
        display: flex;
        justify-content: space-between;
    }
`

export const H1 = styled.h1`
    margin-bottom: 8px;
    ${typography.preset2};
    color: var(--color-state-900);
`

export const ClearButton = styled.button`
    ${typography.preset4};
    border: none;
    text-decoration: underline;
    background-color: transparent;
    color: var(--color-state-700);
    transition: var(--animation);
    cursor: pointer;

    &:hover,
    &:focus {
        color: var(--color-state-900);
    }
`

export const Li = styled.li`
    box-sizing: border-box;

    @media screen and ${PHONE_BP} {
        margin: 0 0 24px 0;
    }

    @media screen and ${TABLET_BP} {
        &:first-child {
            flex-basis: 100%;
        }

        &:not(:first-child) {
            flex-basis: calc(50% - 12px);
        }
    }
`

export const Ul = styled.ul`
    margin: 0 0 24px 0;
    flex-wrap: wrap;

    @media screen and ${TABLET_BP} {
        display: flex;
        gap: 24px;
    }
`
