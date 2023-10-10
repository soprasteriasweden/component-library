import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import * as React from "react";
import { useFormContext } from 'react-hook-form';
import { InputIconTooltip } from '../TooltipItem/InputIconTooltip';
import { getNestedObjectValue } from '../../../../utils/utils';
export var TextInput = function (_a) {
    var _b, _c;
    var label = _a.label, name = _a.name, className = _a.className, disabled = _a.disabled, inlineLabel = _a.inlineLabel, required = _a.required, placeholder = _a.placeholder, defaultValue = _a.defaultValue, requiredValidationMessage = _a.requiredValidationMessage, readonly = _a.readonly, minLength = _a.minLength, maxLength = _a.maxLength, pattern = _a.pattern, patternValidationMessage = _a.patternValidationMessage, tooltipDescription = _a.tooltipDescription, _d = _a.labelCol, labelCol = _d === void 0 ? 4 : _d, _e = _a.inputCol, inputCol = _e === void 0 ? 8 : _e;
    var readonlyValues = {
        errors: "",
        register: "",
        setValue: ""
    };
    var _f = (_b = useFormContext()) !== null && _b !== void 0 ? _b : readonlyValues, errors = _f.errors, register = _f.register, setValue = _f.setValue;
    React.useEffect(function () {
        var _a;
        if (typeof setValue !== "string") {
            (_a = document.getElementById("clear-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", resetValue);
            return function () {
                var _a;
                (_a = document.getElementById("clear-form")) === null || _a === void 0 ? void 0 : _a.removeEventListener("click", resetValue);
            };
        }
    }, []);
    var resetValue = function () {
        if (typeof setValue !== "string") {
            setValue(name, undefined);
        }
    };
    var errorType = (_c = getNestedObjectValue(errors, name)) === null || _c === void 0 ? void 0 : _c.type;
    return (React.createElement("div", { className: className + " form-group " + (inlineLabel ? "row" : "") },
        React.createElement("label", { htmlFor: name, className: inlineLabel ? "col-".concat(labelCol, " col-form-label") : "" },
            label,
            label && label !== "" ? ":" : "",
            required && (readonly === false || readonly === undefined) ? "*" : ""),
        React.createElement("div", { className: inlineLabel ? "col-".concat(inputCol) : "" },
            React.createElement("div", { className: "input-group" }, readonly
                ?
                    React.createElement("p", { id: name, className: "form-control-plaintext" }, defaultValue)
                :
                    React.createElement(React.Fragment, null,
                        React.createElement("input", { type: "text", name: name, id: name, className: "form-control form-control-sm", ref: typeof register !== "string" ? register({ required: required, pattern: pattern, validate: required ? function (value) { return !!value.trim(); } : undefined }) : "", placeholder: placeholder, defaultValue: defaultValue, disabled: disabled, minLength: minLength, maxLength: maxLength }),
                        tooltipDescription ?
                            React.createElement(InputIconTooltip, { description: tooltipDescription, icon: faQuestionCircle })
                            : null)),
            React.createElement("span", { className: "text-danger" }, (errorType === "required" || errorType === "validate") && (requiredValidationMessage ? requiredValidationMessage : label + " måste anges")),
            React.createElement("span", { className: "text-danger" }, errorType === "pattern" && (patternValidationMessage ? patternValidationMessage : label + " i fel format")))));
};
