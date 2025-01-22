import * as React from "react";
import { useFormContext } from 'react-hook-form';
import { InputIconTooltip } from "../TooltipItem/InputIconTooltip";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
export const NameInput = ({ name, tooltipDescription, label, required, className, inlineLabel, disabled, placeholder, defaultValue, requiredValidationMessage, labelCol = 4, inputCol = 8 }) => {
    var _a, _b;
    const { formState: { errors }, register } = useFormContext();
    return (React.createElement("div", { className: className + " form-group " + (inlineLabel ? "row" : "") },
        React.createElement("label", { className: inlineLabel ? `col-${labelCol} col-form-label` : "" },
            label,
            ":",
            required ? "*" : ""),
        React.createElement("div", { className: inlineLabel ? `col-${inputCol}` : "" },
            React.createElement("div", { className: "input-group" },
                React.createElement("input", Object.assign({ type: "text", id: name, className: "form-control form-control-sm ", placeholder: placeholder, defaultValue: defaultValue }, register(name, { required: required, pattern: /^[\p{L}]+$/u }), { disabled: disabled })),
                tooltipDescription ?
                    React.createElement(InputIconTooltip, { description: tooltipDescription, icon: faQuestionCircle })
                    : null),
            React.createElement("span", { className: "text-danger" }, ((_a = errors[name]) === null || _a === void 0 ? void 0 : _a.type) === "required" &&
                (requiredValidationMessage ? requiredValidationMessage : label + " måste anges")),
            React.createElement("span", { className: "text-danger" }, ((_b = errors[name]) === null || _b === void 0 ? void 0 : _b.type) === "pattern" && label + " i fel format"))));
};
