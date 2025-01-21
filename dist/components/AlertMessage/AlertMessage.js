import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import '../../assets/styles/AlertMessage.style.scss';
export var AlertType;
(function (AlertType) {
    AlertType["success"] = "success";
    AlertType["danger"] = "danger";
    AlertType["primary"] = "primary";
    AlertType["warning"] = "warning";
})(AlertType || (AlertType = {}));
export const AlertMessage = ({ duration, alertType, alwaysShow, children, renderOnTopOfPage = true }) => {
    const [showAlert, setShowAlert] = React.useState(false);
    React.useEffect(() => {
        let timeout;
        if (children) {
            setShowAlert(true);
            if (!alwaysShow) {
                timeout = setTimeout(() => {
                    setShowAlert(false);
                }, duration);
            }
        }
        else {
            setShowAlert(false);
        }
        return () => {
            if (timeout) {
                clearTimeout(timeout);
            }
        };
    }, [children]);
    return (_jsx("div", { children: showAlert ?
            _jsxs("div", { className: `alert ${renderOnTopOfPage ? "alert-top-of-page" : ""} alert-${alertType}`, role: "alert", children: [children, renderOnTopOfPage ?
                        _jsx("button", { type: "button", className: "remove-alert", onClick: () => setShowAlert(false) })
                        : null] })
            : "" }));
};
