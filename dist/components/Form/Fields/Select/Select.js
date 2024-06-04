import * as React from "react";
import { useFormContext } from 'react-hook-form';
import { InputSpinnerWrapper } from "../../../Spinner/InputSpinnerWrapper";
import { ClearableInput } from "../../../ClearableInput/ClearableInput";
import { InputIconTooltip } from "../TooltipItem/InputIconTooltip";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
export var Select = function (_a) {
    var _b;
    var name = _a.name, label = _a.label, required = _a.required, className = _a.className, inlineLabel = _a.inlineLabel, disabled = _a.disabled, placeholder = _a.placeholder, options = _a.options, requiredValidationMessage = _a.requiredValidationMessage, selectedValue = _a.selectedValue, onChange = _a.onChange, isLoading = _a.isLoading, tooltipDescription = _a.tooltipDescription, _c = _a.labelCol, labelCol = _c === void 0 ? 4 : _c, _d = _a.inputCol, inputCol = _d === void 0 ? 8 : _d, isClearable = _a.isClearable;
    var _e = React.useState(selectedValue), currentSelectedValue = _e[0], setCurrentSelectedValue = _e[1];
    var readonlyValues = {
        errors: "",
        register: "",
        unregister: "",
        setValue: ""
    };
    var _f = (_b = useFormContext()) !== null && _b !== void 0 ? _b : readonlyValues, errors = _f.errors, register = _f.register, unregister = _f.unregister, setValue = _f.setValue;
    React.useEffect(function () {
        var _a;
        if (typeof unregister !== "string") {
            (_a = document.getElementById("clear-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", resetValue);
            return function () {
                var _a;
                unregister(name);
                (_a = document.getElementById("clear-form")) === null || _a === void 0 ? void 0 : _a.removeEventListener("click", resetValue);
            };
        }
    }, []);
    var resetValue = function () {
        if (typeof setValue !== "string") {
            setValue(name, undefined);
        }
    };
    React.useEffect(function () {
        setCurrentSelectedValue(selectedValue);
    }, [selectedValue]);
    var handleChange = function (event) {
        setCurrentSelectedValue(event.target.value);
        if (onChange !== undefined) {
            onChange(event.target.value);
        }
    };
    var clearValue = function () {
        setCurrentSelectedValue(undefined);
        if (onChange !== undefined) {
            onChange(undefined);
        }
    };
    var renderSelect = function () {
        return (React.createElement("div", { className: "input-group" },
            React.createElement("select", { name: name, id: name, className: "form-control form-control-sm", disabled: disabled, ref: typeof register !== "string" ? register({ required: required }) : "", onChange: handleChange },
                React.createElement("option", { value: "", selected: currentSelectedValue ? false : true, disabled: true, hidden: true }, placeholder),
                options.map(function (option, index) {
                    return React.createElement("option", { value: option.value, key: index, selected: currentSelectedValue == option.value, disabled: option.disabled }, option.text);
                })),
            tooltipDescription ?
                React.createElement(InputIconTooltip, { description: tooltipDescription, icon: faQuestionCircle })
                : null));
    };
    var getErrorMessage = function () {
        var error = errors;
        var keys = name.split('.');
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (error && error[key]) {
                error = error[key];
            }
            else {
                return null;
            }
        }
        if ((error === null || error === void 0 ? void 0 : error.type) === "required") {
            return requiredValidationMessage ? requiredValidationMessage : "".concat(label, " m\u00E5ste anges");
        }
        return null;
    };
    return (React.createElement("div", { className: className + " form-group " + (inlineLabel ? "row" : "") },
        React.createElement("label", { className: inlineLabel ? "col-".concat(labelCol, " col-form-label") : "" },
            label,
            ":",
            required ? "*" : ""),
        React.createElement("div", { className: inlineLabel ? "col-".concat(inputCol) : "" },
            React.createElement(InputSpinnerWrapper, { isLoading: isLoading !== null && isLoading !== void 0 ? isLoading : false }, isClearable
                ?
                    React.createElement(ClearableInput, { onClear: clearValue, input: renderSelect() })
                : renderSelect()),
            React.createElement("span", { className: "text-danger" }, getErrorMessage()))));
};
