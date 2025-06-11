import * as React from "react";
import ReactDOM from 'react-dom';
import '../../assets/styles/AlertMessage.style.scss';
import { IChildren } from "../../models/IChildren";

export interface IAlertMessage extends IChildren {
    alertType: AlertType;
    duration?: number;
    alwaysShow?: boolean;
    renderOnTopOfPage?: boolean;
}

export enum AlertType {
    success = "success",
    danger = "danger",
    primary = "primary",
    warning = "warning"
}

export const AlertMessage: React.FunctionComponent<IAlertMessage> = ({ duration, alertType, alwaysShow, children, renderOnTopOfPage = true }) => {

    const [showAlert, setShowAlert] = React.useState<boolean>(false);

    React.useEffect(() => {
        let timeout: any;
        if (children) {
            setShowAlert(true);
            if (!alwaysShow) {
                timeout = setTimeout(() => {
                    setShowAlert(false);
                }, duration)
            }
        }
        else {
            setShowAlert(false);
        }

        return () => {
            if (timeout) {
                clearTimeout(timeout);
            }
        }
    }, [children])

    return showAlert ? (
    renderOnTopOfPage
        ? ReactDOM.createPortal(
            <div className={`alert alert-top-of-page alert-${alertType}`} role="alert">
                {children}
                <button type="button" className="remove-alert" onClick={() => setShowAlert(false)}></button>
            </div>,
            document.body
        )
        : (
            <div className={`alert alert-${alertType}`} role="alert">
                {children}
                <button type="button" className="remove-alert" onClick={() => setShowAlert(false)}></button>
            </div>
        )
) : null;
}