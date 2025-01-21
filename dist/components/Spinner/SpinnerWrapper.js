import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "../../assets/styles/Spinner.scss";
export var SpinnerSize;
(function (SpinnerSize) {
    SpinnerSize["large"] = "lg";
    SpinnerSize["small"] = "sm";
})(SpinnerSize || (SpinnerSize = {}));
export const SpinnerWrapper = ({ isLoading, spinnerSize = SpinnerSize.large, children }) => {
    return (_jsxs("div", { className: `spinner-wrapper spinner-wrapper-lg ${isLoading ? "loading" : ""}`, children: [isLoading ?
                _jsx("div", { className: `spinner-container d-flex justify-content-center`, children: _jsx("div", { className: `spinner-border spinner-border-${spinnerSize} align-self-center`, role: "status", children: _jsx("span", { className: "sr-only", children: "Laddar..." }) }) })
                : null, _jsx("div", { className: "spinner-content", children: children })] }));
};
