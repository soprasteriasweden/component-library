import * as React from "react";
import './AlertMessage.style.scss';
export var AlertType;
(function (AlertType) {
    AlertType["success"] = "success";
    AlertType["danger"] = "danger";
    AlertType["primary"] = "primary";
    AlertType["warning"] = "warning";
})(AlertType || (AlertType = {}));
export var AlertMessage = function (_a) {
    var duration = _a.duration, alertType = _a.alertType, alwaysShow = _a.alwaysShow, children = _a.children, _b = _a.renderOnTopOfPage, renderOnTopOfPage = _b === void 0 ? true : _b;
    var _c = React.useState(false), showAlert = _c[0], setShowAlert = _c[1];
    React.useEffect(function () {
        var timeout;
        if (children) {
            setShowAlert(true);
            if (!alwaysShow) {
                timeout = setTimeout(function () {
                    setShowAlert(false);
                }, duration);
            }
        }
        else {
            setShowAlert(false);
        }
        return function () {
            if (timeout) {
                clearTimeout(timeout);
            }
        };
    }, [children]);
    return (React.createElement("div", null, showAlert ?
        React.createElement("div", { className: "alert ".concat(renderOnTopOfPage ? "alert-top-of-page" : "", " alert-").concat(alertType), role: "alert" },
            children,
            renderOnTopOfPage ?
                React.createElement("button", { type: "button", className: "remove-alert", onClick: function () { return setShowAlert(false); } })
                : null)
        : ""));
};
