import * as React from "react";
import { useFormContext } from 'react-hook-form';
import "../../../../assets/styles/Checkbox.style.scss";
import { TooltipItem } from "../TooltipItem/TooltipItem";
export var Checkbox = function (_a) {
    var _b;
    var label = _a.label, name = _a.name, tooltipDescription = _a.tooltipDescription, className = _a.className, disabled = _a.disabled, required = _a.required, checked = _a.checked, value = _a.value, requiredValidationMessage = _a.requiredValidationMessage, id = _a.id, _c = _a.labelCol, labelCol = _c === void 0 ? 4 : _c, _d = _a.inputCol, inputCol = _d === void 0 ? 8 : _d, onChange = _a.onChange, withColumn = _a.withColumn;
    var _e = useFormContext(), errors = _e.errors, register = _e.register;
    var _f = React.useState(false), isChecked = _f[0], setIsChecked = _f[1];
    React.useEffect(function () {
        if (checked !== undefined) {
            setIsChecked(checked);
        }
        else {
            setIsChecked(false);
        }
    }, [checked]);
    React.useEffect(function () {
        var _a;
        if (!disabled) {
            (_a = document.getElementById("clear-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", resetValue);
        }
        return function () {
            var _a;
            (_a = document.getElementById("clear-form")) === null || _a === void 0 ? void 0 : _a.removeEventListener("click", resetValue);
        };
    }, []);
    var resetValue = function () {
        setIsChecked(false);
        if (onChange) {
            onChange(false);
        }
    };
    var toggleIsChecked = function () {
        if (isChecked) {
            setIsChecked(false);
            if (onChange) {
                onChange(false);
            }
        }
        else {
            setIsChecked(true);
            if (onChange) {
                onChange(true);
            }
        }
    };
    return (React.createElement("div", { className: className + " custom-checkbox form-group row" },
        React.createElement("label", { className: "col-".concat(labelCol), htmlFor: id }, tooltipDescription ?
            React.createElement(TooltipItem, { key: id, title: label, description: tooltipDescription })
            : React.createElement(React.Fragment, null,
                label,
                withColumn ? ":" : "")),
        React.createElement("div", { className: "col-".concat(inputCol) },
            React.createElement("input", { type: "checkbox", name: name, id: id, disabled: disabled, checked: isChecked, onChange: function () { return toggleIsChecked(); }, value: value, ref: register({ required: required }) }),
            React.createElement("span", { className: "text-danger" }, errors ? [name] && ((_b = errors[name]) === null || _b === void 0 ? void 0 : _b.type) === "required" &&
                (requiredValidationMessage ? requiredValidationMessage : "Måste kryssas i") : ""))));
};
