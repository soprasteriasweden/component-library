import * as React from "react";
import "../../assets/styles/Spinner.scss";
export var SpinnerSize;
(function (SpinnerSize) {
    SpinnerSize["large"] = "lg";
    SpinnerSize["small"] = "sm";
})(SpinnerSize || (SpinnerSize = {}));
export var SpinnerWrapper = function (_a) {
    var isLoading = _a.isLoading, _b = _a.spinnerSize, spinnerSize = _b === void 0 ? SpinnerSize.large : _b, children = _a.children;
    return (React.createElement("div", { className: "spinner-wrapper spinner-wrapper-lg ".concat(isLoading ? "loading" : "") },
        isLoading ?
            React.createElement("div", { className: "spinner-container d-flex justify-content-center" },
                React.createElement("div", { className: "spinner-border spinner-border-".concat(spinnerSize, " align-self-center"), role: "status" },
                    React.createElement("span", { className: "sr-only" }, "Laddar...")))
            : null,
        React.createElement("div", { className: "spinner-content" }, children)));
};
