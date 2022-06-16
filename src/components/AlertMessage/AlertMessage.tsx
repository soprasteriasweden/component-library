import * as React from "react";
import { IChildren } from "../../models/IChildren";
import './AlertMessage.style.scss';

interface IAlertMessage extends IChildren {
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

    return (
        <div>
            {
                showAlert ?
                    <div className={`alert ${renderOnTopOfPage ? "alert-top-of-page" : ""} alert-${alertType}`} role="alert">
                        {children}
                        {
                            renderOnTopOfPage ?
                                <button type="button" className="remove-alert" onClick={() => setShowAlert(false)}></button>
                                : null
                        }
                    </div>
                    : ""
            }
        </div>
    )
}