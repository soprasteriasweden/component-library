import * as React from "react";
import { useFormContext } from 'react-hook-form';
export const EmailInput = ({ name, label, required, className, inlineLabel, disabled, placeholder, defaultValue, requiredValidationMessage, labelCol = 4, inputCol = 8 }) => {
    var _a;
    const { register, formState: { errors } } = useFormContext();
    return (React.createElement("div", { className: className + " form-group " + (inlineLabel ? "row" : "") },
        React.createElement("label", { className: inlineLabel ? `col-${labelCol} col-form-label` : "" },
            label,
            ":",
            required ? "*" : ""),
        React.createElement("div", { className: inlineLabel ? `col-${inputCol}` : "" },
            React.createElement("input", Object.assign({ type: "email", id: name, className: "form-control form-control-sm" }, register(name, { required: required }), { placeholder: placeholder, defaultValue: defaultValue, disabled: disabled })),
            React.createElement("span", { className: "text-danger" }, errors[name] && ((_a = errors[name]) === null || _a === void 0 ? void 0 : _a.type) === "required" &&
                (requiredValidationMessage ? requiredValidationMessage : label + " måste anges")))));
};
