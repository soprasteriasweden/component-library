import * as React from "react";

import "./ClearableInput.style.scss";

export const ClearableInput = ({ input, onClear }) => {

    return (React.createElement("div", { className: "clearable-input" },

        input,

        React.createElement("button", { type: "button", className: "clear-btn", onClick: onClear })));

};

