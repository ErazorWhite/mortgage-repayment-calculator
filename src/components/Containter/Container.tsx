import {StyledContainer} from "./Container.styled.ts";
import {FC, ReactNode} from "react";

interface ContainerProps {
    children: ReactNode
}

export const Container: FC<ContainerProps> = ({children}) => {
    return <StyledContainer>{children}</StyledContainer>;
};