import {StyledContainer} from "./Container.styled";
import {FC} from "react";
import {Props} from "../../global/types";

export const Container: FC<Props> = ({children}) => {
    return <StyledContainer>{children}</StyledContainer>;
};