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
    return (React.createElement("div", null, showAlert ?
        React.createElement("div", { className: `alert ${renderOnTopOfPage ? "alert-top-of-page" : ""} alert-${alertType}`, role: "alert" },
            children,
            renderOnTopOfPage ?
                React.createElement("button", { type: "button", className: "remove-alert", onClick: () => setShowAlert(false) })
                : null)
        : ""));
};
