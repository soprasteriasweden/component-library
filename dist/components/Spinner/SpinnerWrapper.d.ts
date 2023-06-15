import * as React from "react";
import "../../assets/styles/Spinner.scss";
export declare enum SpinnerSize {
    large = "lg",
    small = "sm"
}
interface ISpinnerWrapper {
    isLoading: boolean;
    spinnerSize?: SpinnerSize;
}
export declare const SpinnerWrapper: React.FunctionComponent<ISpinnerWrapper>;
export {};
