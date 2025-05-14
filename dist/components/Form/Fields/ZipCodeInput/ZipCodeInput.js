import * as React from "react";
import { useFormContext } from 'react-hook-form';
import { InputIconTooltip } from "../TooltipItem/InputIconTooltip";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { getNestedObjectValue } from '../../../../utils/utils';
export var ZipCodeInput = function (_a) {
    var _b;
    var name = _a.name, tooltipDescription = _a.tooltipDescription, label = _a.label, required = _a.required, className = _a.className, inlineLabel = _a.inlineLabel, disabled = _a.disabled, placeholder = _a.placeholder, defaultValue = _a.defaultValue, requiredValidationMessage = _a.requiredValidationMessage, pattern = _a.pattern, patternValidationMessage = _a.patternValidationMessage, _c = _a.labelCol, labelCol = _c === void 0 ? 4 : _c, _d = _a.inputCol, inputCol = _d === void 0 ? 8 : _d, readonly = _a.readonly;
    var readonlyValues = {
        errors: "",
        register: "",
        setValue: ""
    };
    var _e = (_b = useFormContext()) !== null && _b !== void 0 ? _b : readonlyValues, errors = _e.errors, register = _e.register;
    var error = getNestedObjectValue(errors, name);
    return (React.createElement("div", { className: "".concat(className, " form-group ").concat(inlineLabel ? "row" : "") },
        React.createElement("label", { className: inlineLabel ? "col-".concat(labelCol, " col-form-label") : "" },
            label,
            label ? ":" : "",
            required && (readonly === false || readonly === undefined) ? "*" : ""),
        React.createElement("div", { className: inlineLabel ? "col-".concat(inputCol) : "" },
            React.createElement("div", { className: "input-group" },
                readonly ? (React.createElement("p", { id: name, className: "form-control-plaintext" }, defaultValue)) : (React.createElement("input", { type: "text", name: name, id: name, className: "form-control form-control-sm", placeholder: placeholder, defaultValue: defaultValue, ref: typeof register !== "string" ? register({
                        required: {
                            value: required || false,
                            message: requiredValidationMessage || "".concat(label, " m\u00E5ste anges")
                        },
                        pattern: {
                            value: pattern !== null && pattern !== void 0 ? pattern : /^[0-9]{5}$/,
                            message: patternValidationMessage || "".concat(label, " i fel format")
                        },
                        validate: function (value) {
                            if (/\s/.test(value)) {
                                return "".concat(label, " f\u00E5r inte inneh\u00E5lla mellanslag");
                            }
                            return true;
                        }
                    }) : undefined, disabled: disabled })),
                tooltipDescription && (React.createElement(InputIconTooltip, { description: tooltipDescription, icon: faQuestionCircle }))),
            !readonly && (error === null || error === void 0 ? void 0 : error.message) && (React.createElement("span", { className: "text-danger" }, error.message)))));
};
