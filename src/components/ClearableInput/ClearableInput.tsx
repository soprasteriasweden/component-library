import * as React from "react";
import "./ClearableInput.style.scss";

interface IClearableInput {
    input: React.ReactChild;
    onClear: () => void;
}

export const ClearableInput: React.FunctionComponent<IClearableInput> = ({ input, onClear }) => {

    return (
        <div className="clearable-input">
            {input}
            <button type="button" className="clear-btn" onClick={onClear}></button>
        </div>
    )
}