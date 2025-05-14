import * as React from "react";
import { useFormContext } from 'react-hook-form';
import { InputIconTooltip } from "../TooltipItem/InputIconTooltip";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
export var PhoneNumberInput = function (_a) {
    var _b, _c;
    var name = _a.name, tooltipDescription = _a.tooltipDescription, label = _a.label, required = _a.required, className = _a.className, inlineLabel = _a.inlineLabel, disabled = _a.disabled, placeholder = _a.placeholder, defaultValue = _a.defaultValue, requiredValidationMessage = _a.requiredValidationMessage, _d = _a.labelCol, labelCol = _d === void 0 ? 4 : _d, _e = _a.inputCol, inputCol = _e === void 0 ? 8 : _e, readonly = _a.readonly;
    var readonlyValues = { errors: "", register: "" };
    var _f = (_b = useFormContext()) !== null && _b !== void 0 ? _b : readonlyValues, errors = _f.errors, register = _f.register;
    var errorType = (_c = errors === null || errors === void 0 ? void 0 : errors[name]) === null || _c === void 0 ? void 0 : _c.type;
    return (React.createElement("div", { className: className + " form-group " + (inlineLabel ? "row" : "") },
        React.createElement("label", { className: inlineLabel ? "col-".concat(labelCol, " col-form-label") : "" },
            label,
            label ? ":" : "",
            required && (readonly === false || readonly === undefined) ? "*" : ""),
        React.createElement("div", { className: inlineLabel ? "col-".concat(inputCol) : "" },
            React.createElement("div", { className: "input-group" }, readonly ? (React.createElement("p", { id: name, className: "form-control-plaintext" }, defaultValue)) : (React.createElement(React.Fragment, null,
                React.createElement("input", { type: "text", name: name, id: name, className: "form-control form-control-sm", placeholder: placeholder, defaultValue: defaultValue, ref: register({
                        required: required,
                        pattern: /^(\+46|0)[\s\-]?(\d{1,4})[\s\-]?(\d{2,4})[\s\-]?(\d{2,4})$/
                    }), disabled: disabled }),
                tooltipDescription && (React.createElement(InputIconTooltip, { description: tooltipDescription, icon: faQuestionCircle }))))),
            readonly ? null : (React.createElement(React.Fragment, null,
                React.createElement("span", { className: "text-danger" }, (errorType === "required") &&
                    (requiredValidationMessage || "".concat(label, " m\u00E5ste anges"))),
                React.createElement("span", { className: "text-danger" }, (errorType === "pattern") && "".concat(label, " i fel format")))))));
};
