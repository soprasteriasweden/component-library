import React, { useEffect, useRef } from "react";
import * as bootstrap from "bootstrap";
import "../../assets/styles/Spinner.scss";

interface IInputSpinnerWrapper {
    isLoading: boolean;
    children?: React.ReactNode;
}

export const InputSpinnerWrapper: React.FunctionComponent<IInputSpinnerWrapper> = ({ isLoading, children }) => {
    const spinnerRef = useRef<HTMLDivElement>(null);
    const tooltipInstance = useRef<bootstrap.Tooltip | null>(null);

    useEffect(() => {
        if (!spinnerRef.current) return;

        tooltipInstance.current?.dispose();
        tooltipInstance.current = null;

        if (isLoading) {
            tooltipInstance.current = new bootstrap.Tooltip(spinnerRef.current, {
                title: "Laddar...",
                placement: "right",
            });
        }

        return () => {
            tooltipInstance.current?.dispose();
        };
    }, [isLoading]);

    return (
        <div ref={spinnerRef} className={`spinner-wrapper ${isLoading ? "loading" : ""}`} style={{ cursor: isLoading ? "wait" : "auto" }}>
            {isLoading && (
                <div className="spinner-container d-flex justify-content-center">
                    <div className="spinner-border spinner-border-sm align-self-center" role="status">
                        <span className="visually-hidden">Laddar...</span>
                    </div>
                </div>
            )}
            <div className="spinner-content">{children}</div>
        </div>
    );
};