import * as React from "react";
import { ButtonType, CustomButton } from '../CustomButton/CustomButton';
export var ClearFormButton = function (_a) {
    var _b = _a.buttonText, buttonText = _b === void 0 ? "Rensa" : _b;
    return (React.createElement(CustomButton, { id: "clear-form", buttonType: ButtonType.general, buttonText: buttonText }));
};
