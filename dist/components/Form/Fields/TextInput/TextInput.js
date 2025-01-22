import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import * as React from "react";
import { useFormContext } from 'react-hook-form';
import { InputIconTooltip } from '../TooltipItem/InputIconTooltip';
import { getNestedObjectValue } from '../../../../utils/utils';
export const TextInput = ({ label, name, className, disabled, inlineLabel, required, placeholder, defaultValue, requiredValidationMessage, readonly, minLength, maxLength, pattern, patternValidationMessage, tooltipDescription, labelCol = 4, inputCol = 8 }) => {
    var _a, _b;
    const readonlyValues = {
        errors: "",
        register: "",
        setValue: ""
    };
    const { formState: { errors }, register, setValue } = (_a = useFormContext()) !== null && _a !== void 0 ? _a : readonlyValues;
    React.useEffect(() => {
        var _a;
        if (typeof setValue !== "string") {
            (_a = document.getElementById("clear-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", resetValue);
            return () => {
                var _a;
                (_a = document.getElementById("clear-form")) === null || _a === void 0 ? void 0 : _a.removeEventListener("click", resetValue);
            };
        }
    }, []);
    const resetValue = () => {
        if (typeof setValue !== "string") {
            setValue(name, undefined);
        }
    };
    const errorType = (_b = getNestedObjectValue(errors, name)) === null || _b === void 0 ? void 0 : _b.type;
    return (React.createElement("div", { className: className + " form-group " + (inlineLabel ? "row" : "") },
        React.createElement("label", { htmlFor: name, className: inlineLabel ? `col-${labelCol} col-form-label` : "" },
            label,
            label && label !== "" ? ":" : "",
            required && (readonly === false || readonly === undefined) ? "*" : ""),
        React.createElement("div", { className: inlineLabel ? `col-${inputCol}` : "" },
            React.createElement("div", { className: "input-group" }, readonly
                ?
                    React.createElement("p", { id: name, className: "form-control-plaintext" }, defaultValue)
                :
                    React.createElement(React.Fragment, null,
                        React.createElement("input", Object.assign({ type: "text", id: name, className: "form-control form-control-sm" }, register(name, { required: required, pattern: pattern, validate: required ? (value) => { return !!value.trim(); } : undefined }), { placeholder: placeholder, defaultValue: defaultValue, disabled: disabled, minLength: minLength, maxLength: maxLength })),
                        tooltipDescription ?
                            React.createElement(InputIconTooltip, { description: tooltipDescription, icon: faQuestionCircle })
                            : null)),
            React.createElement("span", { className: "text-danger" }, (errorType === "required" || errorType === "validate") && (requiredValidationMessage ? requiredValidationMessage : label + " måste anges")),
            React.createElement("span", { className: "text-danger" }, errorType === "pattern" && (patternValidationMessage ? patternValidationMessage : label + " i fel format")))));
};
