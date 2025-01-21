import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "../../assets/styles/ClearableInput.style.scss";
export const ClearableInput = ({ input, onClear }) => {
    return (_jsxs("div", { className: "clearable-input", children: [input, _jsx("button", { type: "button", className: "clear-btn", onClick: onClear })] }));
};
