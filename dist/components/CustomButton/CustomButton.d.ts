import * as React from "react";
export declare enum ButtonType {
    create = "btn-primary btn-create",
    createAlt = "btn-outline-primary btn-create-alt",
    edit = "btn-primary btn-edit",
    editAlt = "btn-outline-primary btn-edit-alt",
    credit = "btn-warning",
    download = "btn-primary btn-download",
    pdf = "btn-primary btn-pdf",
    excel = "btn-primary btn-excel",
    general = "btn-outline-dark",
    success = "btn-success",
    warning = "btn-warning",
    delete = "btn-danger",
    deleteAlt = "btn-outline-danger"
}
export interface ICustomButton {
    buttonType: ButtonType;
    buttonText: string;
    isLoading?: boolean;
}
export declare const CustomButton: React.FunctionComponent<ICustomButton & React.HTMLProps<HTMLButtonElement>>;
