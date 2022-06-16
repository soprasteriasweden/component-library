import * as React from "react";
import "./Spinner.scss";

export enum SpinnerSize {
    large = "lg",
    small = "sm"
}

interface ISpinnerWrapper {
    isLoading: boolean;
    spinnerSize?: SpinnerSize;
}

export const SpinnerWrapper: React.FunctionComponent<ISpinnerWrapper> = ({ isLoading, spinnerSize = SpinnerSize.large, children }) => {

    return (
        <div className={`spinner-wrapper spinner-wrapper-lg ${isLoading ? "loading" : ""}`}>
            {
                isLoading ?
                    <div className={`spinner-container d-flex justify-content-center`}>
                        <div className={`spinner-border spinner-border-${spinnerSize} align-self-center`} role="status">
                            <span className="sr-only">Laddar...</span>
                        </div>
                    </div>
                    : null
            }
            <div className="spinner-content">
                {children}
            </div>
        </div>
    )
}