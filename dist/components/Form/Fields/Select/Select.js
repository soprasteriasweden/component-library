import * as React from "react";
import { useFormContext } from 'react-hook-form';
import { InputSpinnerWrapper } from "../../../Spinner/InputSpinnerWrapper";
import { ClearableInput } from "../../../ClearableInput/ClearableInput";
import { InputIconTooltip } from "../TooltipItem/InputIconTooltip";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
export var Select = function (_a) {
    var name = _a.name, label = _a.label, required = _a.required, className = _a.className, inlineLabel = _a.inlineLabel, disabled = _a.disabled, placeholder = _a.placeholder, options = _a.options, requiredValidationMessage = _a.requiredValidationMessage, selectedValue = _a.selectedValue, onChange = _a.onChange, isLoading = _a.isLoading, tooltipDescription = _a.tooltipDescription, _b = _a.labelCol, labelCol = _b === void 0 ? 4 : _b, _c = _a.inputCol, inputCol = _c === void 0 ? 8 : _c, isClearable = _a.isClearable;
    var _d = useFormContext(), errors = _d.errors, register = _d.register, unregister = _d.unregister, setValue = _d.setValue, watch = _d.watch;
    var currentSelectedValue = watch(name, selectedValue);
    React.useEffect(function () {
        var _a;
        register(name, { required: required });
        (_a = document.getElementById("clear-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", resetValue);
        return function () {
            var _a;
            unregister(name);
            (_a = document.getElementById("clear-form")) === null || _a === void 0 ? void 0 : _a.removeEventListener("click", resetValue);
        };
    }, [register, unregister, name, required]);
    var resetValue = function () {
        setValue(name, undefined, true);
    };
    var handleChange = function (event) {
        var value = event.target.value;
        setValue(name, value, true);
        if (onChange) {
            onChange(value);
        }
    };
    var clearValue = function () {
        setValue(name, undefined, true);
        if (onChange) {
            onChange(undefined);
        }
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
    var renderSelect = function () {
        return (React.createElement("div", { className: "input-group" },
            React.createElement("select", { name: name, id: name, className: "form-control form-control-sm", disabled: disabled, ref: register, onChange: handleChange, value: currentSelectedValue || "" },
                React.createElement("option", { value: "", disabled: true, hidden: true }, placeholder),
                options.map(function (option, index) { return (React.createElement("option", { value: option.value, key: index, disabled: option.disabled }, option.text)); })),
            tooltipDescription && React.createElement(InputIconTooltip, { description: tooltipDescription, icon: faQuestionCircle })));
    };
    return (React.createElement("div", { className: className + " form-group " + (inlineLabel ? "row" : "") },
        React.createElement("label", { className: inlineLabel ? "col-".concat(labelCol, " col-form-label") : "" },
            label,
            ":",
            required ? "*" : ""),
        React.createElement("div", { className: inlineLabel ? "col-".concat(inputCol) : "" },
            React.createElement(InputSpinnerWrapper, { isLoading: isLoading !== null && isLoading !== void 0 ? isLoading : false }, isClearable
                ? React.createElement(ClearableInput, { onClear: clearValue, input: renderSelect() })
                : renderSelect()),
            React.createElement("span", { className: "text-danger" }, getErrorMessage()))));
};
