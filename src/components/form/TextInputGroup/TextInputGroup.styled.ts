import styled from "styled-components";
import {PHONE_BP, TABLET_BP} from "../../../global/breakpoints";

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
