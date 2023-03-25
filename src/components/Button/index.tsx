import { FC } from "react";
import { Props } from "./types";
import { CustomButton} from "./styles";
import React from "react";

const Buttom: FC<Props> = ({ children, disabled, onClick}) => {
    return(
        <CustomButton onClick={onClick} disabled={disabled}> 
        {children}
        </CustomButton>
    )
}
