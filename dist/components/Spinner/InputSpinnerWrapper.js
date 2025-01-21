import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import "../../assets/styles/Spinner.scss";
export const InputSpinnerWrapper = ({ isLoading, children }) => {
    React.useEffect(() => {
        var myWindow = window;
        if (isLoading) {
            myWindow.$('[data-toggle="tooltip"]').tooltip();
        }
        else {
            myWindow.$('[data-toggle="tooltip"]').tooltip("disable");
        }
    }, [isLoading]);
    return (_jsxs("div", { className: `spinner-wrapper ${isLoading ? "loading" : ""}`, "data-toggle": "tooltip", "data-placement": "right", title: isLoading ? "Laddar..." : "", children: [isLoading ?
                _jsx("div", { className: `spinner-container d-flex justify-content-center`, children: _jsx("div", { className: "spinner-border spinner-border-sm align-self-center", role: "status", children: _jsx("span", { className: "sr-only", children: "Laddar..." }) }) })
                : null, _jsx("div", { className: "spinner-content", children: children })] }));
};
