import * as React from "react";
import { useFormContext } from 'react-hook-form';
import { InputIconTooltip } from "../TooltipItem/InputIconTooltip";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { getNestedObjectValue } from "../../../../utils/utils";
export var HsaIdInput = function (_a) {
    var _b;
    var name = _a.name, tooltipDescription = _a.tooltipDescription, label = _a.label, required = _a.required, className = _a.className, inlineLabel = _a.inlineLabel, disabled = _a.disabled, placeholder = _a.placeholder, defaultValue = _a.defaultValue, requiredValidationMessage = _a.requiredValidationMessage, _c = _a.labelCol, labelCol = _c === void 0 ? 4 : _c, _d = _a.inputCol, inputCol = _d === void 0 ? 8 : _d;
    var _e = useFormContext(), errors = _e.errors, register = _e.register;
    var errorType = (_b = getNestedObjectValue(errors, name)) === null || _b === void 0 ? void 0 : _b.type;
    return (React.createElement("div", { className: className + " form-group " + (inlineLabel ? "row" : "") },
        React.createElement("label", { className: inlineLabel ? "col-".concat(labelCol, " col-form-label") : "" },
            label,
            ":",
            required ? "*" : ""),
        React.createElement("div", { className: inlineLabel ? "col-".concat(inputCol) : "" },
            React.createElement("div", { className: "input-group" },
                React.createElement("input", { type: "text", name: name, id: name, className: "form-control form-control-sm ", style: "text-transform: uppercase", placeholder: placeholder, defaultValue: defaultValue, ref: register({ required: required, pattern: /^(?=.{1,31}$)SE\d{10,12}-[A-Z0-9]+$/ }), disabled: disabled }),
                tooltipDescription ?
                    React.createElement(InputIconTooltip, { description: tooltipDescription, icon: faQuestionCircle })
                    : null),
            React.createElement("span", { className: "text-danger" }, errorType === "required" && (requiredValidationMessage ? requiredValidationMessage : label + " måste anges")),
            React.createElement("span", { className: "text-danger" }, errorType === "pattern" && label + " i fel format"))));
};
