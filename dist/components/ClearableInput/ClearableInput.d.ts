import * as React from "react";
import "./ClearableInput.style.scss";
interface IClearableInput {
    input: React.ReactChild;
    onClear: () => void;
}
export declare const ClearableInput: React.FunctionComponent<IClearableInput>;
export {};
