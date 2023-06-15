import * as React from "react";
import { useFormContext } from 'react-hook-form';
export var NumberInput = function (_a) {
    var _b;
    var name = _a.name, label = _a.label, required = _a.required, className = _a.className, inlineLabel = _a.inlineLabel, disabled = _a.disabled, placeholder = _a.placeholder, maxValue = _a.maxValue, minValue = _a.minValue, defaultValue = _a.defaultValue, requiredValidationMessage = _a.requiredValidationMessage, maxLength = _a.maxLength, minLength = _a.minLength, readonly = _a.readonly, _c = _a.labelCol, labelCol = _c === void 0 ? 4 : _c, _d = _a.inputCol, inputCol = _d === void 0 ? 8 : _d;
    var _e = useFormContext(), errors = _e.errors, register = _e.register;
    return (React.createElement("div", { className: className + " form-group " + (inlineLabel ? "row" : "") },
        React.createElement("label", { className: inlineLabel ? "col-" + labelCol + " col-form-label" : "" },
            label,
            ":",
            required && (readonly === false || readonly === undefined) ? "*" : ""),
        React.createElement("div", { className: inlineLabel ? "col-" + inputCol : "" },
            readonly
                ?
                    React.createElement("input", { type: "number", readOnly: true, name: name, id: name, className: "form-control-plaintext ", ref: register(), value: defaultValue })
                :
                    React.createElement("input", { type: "number", min: minValue, max: maxValue, name: name, id: name, className: "form-control form-control-sm ", placeholder: placeholder, ref: register({ required: required }), defaultValue: defaultValue, disabled: disabled, minLength: minLength, maxLength: maxLength }),
            React.createElement("span", { className: "text-danger" }, errors ? [name] && ((_b = errors[name]) === null || _b === void 0 ? void 0 : _b.type) === "required" &&
                (requiredValidationMessage ? requiredValidationMessage : label + " måste anges") : ""))));
};
