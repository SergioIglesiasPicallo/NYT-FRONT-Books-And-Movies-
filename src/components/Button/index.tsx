import { FC } from "react";
import { Props } from "./types";
import { CustomButtom} from "./styles";

const Buttom: FC<Props> = ({ children, disabled, onClick}) => {
    return(
        <CustomButtom onClick={onClick} disabled={disabled}> 
        {children}
        </CustomButtom>
    )
}
