import * as React from "react";

import { ButtonType, CustomButton } from '../CustomButton/CustomButton';

export const ClearFormButton = ({ buttonText = "Rensa" }) => {

    return (React.createElement(CustomButton, { id: "clear-form", buttonType: ButtonType.general, buttonText: buttonText }));

};

