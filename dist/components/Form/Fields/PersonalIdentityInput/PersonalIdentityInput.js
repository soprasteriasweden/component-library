import * as React from "react";
import { useFormContext } from 'react-hook-form';
import { InputIconTooltip } from "../TooltipItem/InputIconTooltip";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
export var PersonalIdentityInput = function (_a) {
    var _b, _c;
    var name = _a.name, tooltipDescription = _a.tooltipDescription, label = _a.label, required = _a.required, className = _a.className, inlineLabel = _a.inlineLabel, disabled = _a.disabled, placeholder = _a.placeholder, defaultValue = _a.defaultValue, requiredValidationMessage = _a.requiredValidationMessage;
    var _d = useFormContext(), errors = _d.errors, register = _d.register;
    return (React.createElement("div", { className: className + " form-group " + (inlineLabel ? "row" : "") },
        React.createElement("label", { className: inlineLabel ? "col-4 col-form-label" : "" },
            label,
            ":",
            required ? "*" : ""),
        React.createElement("div", { className: inlineLabel ? "col-8" : "" },
            React.createElement("div", { className: "input-group" },
                React.createElement("input", { type: "text", name: name, id: name, className: "form-control form-control-sm ", placeholder: placeholder, defaultValue: defaultValue, ref: register({ required: required, pattern: /^(19|20)?\d{2}(0[1-9]|1[0-2])([0-2]\d|3[0-1]|6[0-9]|7[0-2])[-]?\d{4}$/ }), disabled: disabled }),
                tooltipDescription ?
                    React.createElement(InputIconTooltip, { description: tooltipDescription, icon: faQuestionCircle })
                    : null),
            React.createElement("span", { className: "text-danger" }, errors ? [name] && ((_b = errors[name]) === null || _b === void 0 ? void 0 : _b.type) === "required" &&
                (requiredValidationMessage ? requiredValidationMessage : label + " måste anges") : ""),
            React.createElement("span", { className: "text-danger" }, errors ? [name] && ((_c = errors[name]) === null || _c === void 0 ? void 0 : _c.type) === "pattern" && label + " i fel format" : ""))));
};
