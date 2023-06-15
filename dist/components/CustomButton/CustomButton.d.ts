import * as React from "react";
export declare enum ButtonType {
    create = "btn-link",
    createAlt = "btn-success",
    edit = "btn-link ",
    editAlt = " ",
    credit = "btn-warning ",
    download = " btn-link ",
    pdf = "btn-link pdf",
    excel = "btn-link excel",
    general = "",
    success = "btn-success",
    warning = "btn-warning",
    delete = "btn-danger",
    deleteAlt = "btn-danger "
}
export interface ICustomButton {
    buttonType: ButtonType;
    buttonText: string;
    isLoading?: boolean;
}
export declare const CustomButton: React.FunctionComponent<ICustomButton & React.HTMLProps<HTMLButtonElement>>;
