var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from "react";
import "react-datepicker/dist/react-datepicker.css";
import '../../../../assets/styles/DatePicker.scss';
import { useFormContext } from 'react-hook-form';
import svSE from 'date-fns/locale/sv';
import DatePicker, { registerLocale } from 'react-datepicker';
import { InputIconTooltip } from "../TooltipItem/InputIconTooltip";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
registerLocale('sv-se', __assign(__assign({}, svSE), { options: __assign(__assign({}, svSE.options), { weekStartsOn: 1 }) }));
export var CustomDatePicker = function (_a) {
    var name = _a.name, label = _a.label, className = _a.className, value = _a.value, inlineLabel = _a.inlineLabel, disabled = _a.disabled, required = _a.required, requiredValidationMessage = _a.requiredValidationMessage, max = _a.max, min = _a.min, onChange = _a.onChange, tooltipDescription = _a.tooltipDescription, _b = _a.labelCol, labelCol = _b === void 0 ? 4 : _b, _c = _a.inputCol, inputCol = _c === void 0 ? 8 : _c;
    var _d = React.useState(value), selectedDate = _d[0], setSelectedDate = _d[1];
    var _e = useFormContext(), errors = _e.errors, register = _e.register, setValue = _e.setValue, clearError = _e.clearError, unregister = _e.unregister;
    React.useEffect(function () {
        var _a;
        register({ name: name }, { required: required });
        setValue(name, value === null || value === void 0 ? void 0 : value.toLocaleDateString("sv-se"));
        if (!disabled) {
            (_a = document.getElementById("clear-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", resetValue);
        }
        return function () {
            var _a;
            clearError(name);
            unregister(name);
            (_a = document.getElementById("clear-form")) === null || _a === void 0 ? void 0 : _a.removeEventListener("click", resetValue);
        };
    }, []);
    React.useEffect(function () {
        if (selectedDate !== undefined) {
            setSelectedDate(value);
            setValue(name, value === null || value === void 0 ? void 0 : value.toLocaleDateString("sv-se"));
        }
    }, [value]);
    var resetValue = function () {
        setValue(name, undefined);
        setSelectedDate(undefined);
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
            React.createElement("div", { className: "input-group-datepicker align-items-center" },
                React.createElement(DatePicker, { name: name, selected: selectedDate, onChange: function (date) {
                        setSelectedDate(date);
                        setValue(name, date === null || date === void 0 ? void 0 : date.toLocaleDateString("sv-se"));
                        if (onChange) {
                            onChange(date);
                        }
                    }, dateFormat: "yyyy-MM-dd", className: "form-control form-control-sm " + (disabled ? "disabled " : ""), disabled: disabled, minDate: min, maxDate: max, autoComplete: "off", locale: "sv-se", showYearDropdown: true, showMonthDropdown: true, onChangeRaw: function (e) { return e.preventDefault(); }, isClearable: true }),
                tooltipDescription &&
                    React.createElement(InputIconTooltip, { description: tooltipDescription, icon: faQuestionCircle })),
            React.createElement("span", { className: "text-danger" }, getErrorMessage()))));
};
