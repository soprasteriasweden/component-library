import React, { useEffect, useRef } from "react";
import * as bootstrap from "bootstrap";
import "../../assets/styles/Spinner.scss";
export const InputSpinnerWrapper = ({ isLoading, children }) => {
    const spinnerRef = useRef(null);
    const tooltipInstance = useRef(null);
    useEffect(() => {
        const currentRef = spinnerRef.current;
        if (tooltipInstance.current) {
            try {
                tooltipInstance.current.dispose();
            }
            catch (e) {
            }
            tooltipInstance.current = null;
        }
        if (isLoading && currentRef) {
            tooltipInstance.current = new bootstrap.Tooltip(currentRef, {
                title: "Laddar...",
                placement: "right",
            });
        }
        return () => {
            if (tooltipInstance.current) {
                try {
                    tooltipInstance.current.dispose();
                }
                catch (e) {
                }
                tooltipInstance.current = null;
            }
        };
    }, [isLoading]);
    return (React.createElement("div", { ref: spinnerRef, className: `spinner-wrapper ${isLoading ? "loading" : ""}`, style: { cursor: isLoading ? "wait" : "auto" } },
        isLoading && (React.createElement("div", { className: "spinner-container d-flex justify-content-center" },
            React.createElement("div", { className: "spinner-border spinner-border-sm align-self-center", role: "status" },
                React.createElement("span", { className: "visually-hidden" }, "Laddar...")))),
        React.createElement("div", { className: "spinner-content" }, children)));
};
