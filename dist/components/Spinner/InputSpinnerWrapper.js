import React, { useEffect, useRef } from "react";
import * as bootstrap from "bootstrap";
import "../../assets/styles/Spinner.scss";
export const InputSpinnerWrapper = ({ isLoading, children }) => {
    const spinnerRef = useRef(null);
    const tooltipInstance = useRef(null);
    useEffect(() => {
        var _a;
        if (!spinnerRef.current)
            return;
        (_a = tooltipInstance.current) === null || _a === void 0 ? void 0 : _a.dispose();
        tooltipInstance.current = null;
        if (isLoading) {
            tooltipInstance.current = new bootstrap.Tooltip(spinnerRef.current, {
                title: "Laddar...",
                placement: "right",
            });
        }
        return () => {
            var _a;
            (_a = tooltipInstance.current) === null || _a === void 0 ? void 0 : _a.dispose();
        };
    }, [isLoading]);
    return (React.createElement("div", { ref: spinnerRef, className: `spinner-wrapper ${isLoading ? "loading" : ""}`, style: { cursor: isLoading ? "wait" : "auto" } },
        isLoading && (React.createElement("div", { className: "spinner-container d-flex justify-content-center" },
            React.createElement("div", { className: "spinner-border spinner-border-sm align-self-center", role: "status" },
                React.createElement("span", { className: "visually-hidden" }, "Laddar...")))),
        React.createElement("div", { className: "spinner-content" }, children)));
};
