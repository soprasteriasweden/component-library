import * as React from "react";
import { IChildren } from "../../models/IChildren";
import '../../assets/styles/AlertMessage.style.scss';
interface IAlertMessage extends IChildren {
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
export {};
