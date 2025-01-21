import { jsx as _jsx } from "react/jsx-runtime";
import { ButtonType, CustomButton } from '../CustomButton/CustomButton';
export const ClearFormButton = ({ buttonText = "Rensa" }) => {
    return (_jsx(CustomButton, { id: "clear-form", buttonType: ButtonType.general, buttonText: buttonText }));
};
