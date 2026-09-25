import * as React from "react";
import { IChildren } from "../../../models/IChildren";
export declare enum CustomSubmitButtonType {
    default = "btn-primary",
    alternative = "btn-link",
    search = "btn-outline-secondary btn-search"
}
export interface ICustomSubmitButton extends IChildren {
    onButtonSubmit?: (data: any) => any;
    buttonType?: CustomSubmitButtonType;
    isLoading?: boolean;
}
export declare const CustomSubmitButton: React.FunctionComponent<ICustomSubmitButton & React.ButtonHTMLAttributes<HTMLButtonElement>>;
