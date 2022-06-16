import * as React from "react";
import { ButtonType, CustomButton } from '../CustomButton/CustomButton';

interface IClearFormButton {
    buttonText?: string;
}
export const ClearFormButton: React.FunctionComponent<IClearFormButton> = ({ buttonText = "Rensa" }) => {

    return (
        <CustomButton id="clear-form" buttonType={ButtonType.general} buttonText={buttonText} />
    )
}