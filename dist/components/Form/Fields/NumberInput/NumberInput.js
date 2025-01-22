import * as React from "react";
import { useFormContext } from 'react-hook-form';
export const NumberInput = ({ name, label, required, className, inlineLabel, disabled, placeholder, maxValue, minValue, defaultValue, requiredValidationMessage, maxLength, minLength, readonly, labelCol = 4, inputCol = 8 }) => {
    var _a;
    const { formState: { errors }, register } = useFormContext();
    return (React.createElement("div", { className: className + " form-group " + (inlineLabel ? "row" : "") },
        React.createElement("label", { className: inlineLabel ? `col-${labelCol} col-form-label` : "" },
            label,
            ":",
            required && (readonly === false || readonly === undefined) ? "*" : ""),
        React.createElement("div", { className: inlineLabel ? `col-${inputCol}` : "" },
            readonly
                ?
                    React.createElement("input", Object.assign({ type: "number", readOnly: true, id: name, className: "form-control-plaintext " }, register(name), { value: defaultValue }))
                :
                    React.createElement("input", Object.assign({ type: "number", min: minValue, max: maxValue, id: name, className: "form-control form-control-sm ", placeholder: placeholder }, register(name, { required }), { defaultValue: defaultValue, disabled: disabled, minLength: minLength, maxLength: maxLength })),
            React.createElement("span", { className: "text-danger" }, ((_a = errors[name]) === null || _a === void 0 ? void 0 : _a.type) === "required" ?
                (requiredValidationMessage ? requiredValidationMessage : label + " måste anges") : ""))));
};
