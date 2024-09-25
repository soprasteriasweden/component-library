import * as React from "react";
import { useFormContext } from 'react-hook-form';
export var ZipCodeInput = function (_a) {
    var _b;
    var name = _a.name, label = _a.label, required = _a.required, className = _a.className, inlineLabel = _a.inlineLabel, disabled = _a.disabled, placeholder = _a.placeholder, defaultValue = _a.defaultValue, requiredValidationMessage = _a.requiredValidationMessage;
    var _c = useFormContext(), errors = _c.errors, register = _c.register;
    return (React.createElement("div", { className: className + " form-group " + (inlineLabel ? "row" : "") },
        React.createElement("label", { className: inlineLabel ? "col-4 col-form-label" : "" },
            label,
            ":",
            required ? "*" : ""),
        React.createElement("div", { className: inlineLabel ? "col-8" : "" },
            React.createElement("input", { type: "number", name: name, id: name, className: "form-control form-control-sm", ref: register({ required: required, pattern: /^[0-9]{5}$/ }), placeholder: placeholder, defaultValue: defaultValue, disabled: disabled }),
            React.createElement("span", { className: "text-danger" }, errors ? [name] && ((_b = errors[name]) === null || _b === void 0 ? void 0 : _b.type) === "required" &&
                (requiredValidationMessage ? requiredValidationMessage : label + " måste anges") : ""),
            React.createElement("span", { className: "text-danger" }, errors ? [name] && ((_c = errors[name]) === null || _c === void 0 ? void 0 : _c.type) === "pattern" && label + " i fel format." : ""))));
};
