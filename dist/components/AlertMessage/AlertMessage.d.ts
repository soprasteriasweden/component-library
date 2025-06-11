import * as React from "react";
import '../../assets/styles/AlertMessage.style.scss';
import { IChildren } from "../../models/IChildren";
export interface IAlertMessage extends IChildren {
    alertType: AlertType;
    duration?: number;
    alwaysShow?: boolean;
    renderOnTopOfPage?: boolean;
}
export declare enum AlertType {
    success = "success",
    danger = "danger",
    primary = "primary",
    warning = "warning"
}
export declare const AlertMessage: React.FunctionComponent<IAlertMessage>;
