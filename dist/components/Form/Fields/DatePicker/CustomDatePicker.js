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
registerLocale('sv-se', __assign(__assign({}, svSE), { options: __assign(__assign({}, svSE.options), { weekStartsOn: 1 }) }));
export var CustomDatePicker = function (_a) {
    var _b;
    var name = _a.name, label = _a.label, className = _a.className, value = _a.value, inlineLabel = _a.inlineLabel, disabled = _a.disabled, required = _a.required, requiredValidationMessage = _a.requiredValidationMessage, max = _a.max, min = _a.min, onChange = _a.onChange, _c = _a.labelCol, labelCol = _c === void 0 ? 4 : _c, _d = _a.inputCol, inputCol = _d === void 0 ? 8 : _d;
    var _e = React.useState(value), selectedDate = _e[0], setSelectedDate = _e[1];
    var _f = useFormContext(), errors = _f.errors, register = _f.register, setValue = _f.setValue, clearError = _f.clearError, unregister = _f.unregister;
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
    return (React.createElement("div", { className: className + " form-group " + (inlineLabel ? "row" : "") },
        React.createElement("label", { className: inlineLabel ? "col-".concat(labelCol, " col-form-label") : "" },
            label,
            ":",
            required ? "*" : ""),
        React.createElement("div", { className: inlineLabel ? "col-".concat(inputCol) : "" },
            React.createElement(DatePicker, { name: name, selected: selectedDate, onChange: function (date) {
                    setSelectedDate(date);
                    setValue(name, date === null || date === void 0 ? void 0 : date.toLocaleDateString("sv-se"));
                    if (onChange) {
                        onChange(date);
                    }
                }, dateFormat: "yyyy-MM-dd", className: "form-control form-control-sm " + (disabled ? "disabled " : ""), disabled: disabled, minDate: min, maxDate: max, autoComplete: "off", locale: "sv-se", showYearDropdown: true, showMonthDropdown: true, onChangeRaw: function (e) { return e.preventDefault(); }, isClearable: true }),
            React.createElement("span", { className: "text-danger" }, errors ? [name] && ((_b = errors[name]) === null || _b === void 0 ? void 0 : _b.type) === "required" &&
                (requiredValidationMessage ? requiredValidationMessage : label + " måste anges") : ""))));
};
