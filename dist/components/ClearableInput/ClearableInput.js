import * as React from "react";
import "../../assets/styles/ClearableInput.style.scss";
export var ClearableInput = function (_a) {
    var input = _a.input, onClear = _a.onClear;
    return (React.createElement("div", { className: "clearable-input" },
        input,
        React.createElement("button", { type: "button", className: "clear-btn", onClick: onClear })));
};
