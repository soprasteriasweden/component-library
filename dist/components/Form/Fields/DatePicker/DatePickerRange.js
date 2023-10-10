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
import '../../../../assets/styles/DatePicker.scss';
import '../../../../assets/styles/DatePickerRange.style.scss';
import { useFormContext } from 'react-hook-form';
import svSE from 'date-fns/locale/sv';
import DatePicker, { registerLocale } from 'react-datepicker';
import { InputIconTooltip } from "../TooltipItem/InputIconTooltip";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { getNestedObjectValue } from "../../../../utils/utils";
registerLocale('sv-se', __assign(__assign({}, svSE), { options: __assign(__assign({}, svSE.options), { weekStartsOn: 1 }) }));
export var DatePickerRange = function (_a) {
    var _b, _c;
    var name = _a.name, nameSecondary = _a.nameSecondary, label = _a.label, className = _a.className, inlineLabel = _a.inlineLabel, disabled = _a.disabled, requiredFrom = _a.requiredFrom, requiredTo = _a.requiredTo, value = _a.value, valueSecondary = _a.valueSecondary, tooltipDescription = _a.tooltipDescription, _d = _a.labelCol, labelCol = _d === void 0 ? 4 : _d, _e = _a.inputCol, inputCol = _e === void 0 ? 8 : _e;
    var _f = React.useState(value), fromDate = _f[0], setFromDate = _f[1];
    var _g = React.useState(valueSecondary), toDate = _g[0], setToDate = _g[1];
    var _h = useFormContext(), errors = _h.errors, register = _h.register, setValue = _h.setValue;
    React.useEffect(function () {
        var _a;
        register({ name: name }, { required: requiredFrom });
        register({ name: nameSecondary }, { required: requiredTo });
        setValue(name, value === null || value === void 0 ? void 0 : value.toLocaleDateString("sv-se"));
        setValue(nameSecondary, valueSecondary === null || valueSecondary === void 0 ? void 0 : valueSecondary.toLocaleDateString("sv-se"));
        if (!disabled) {
            (_a = document.getElementById("clear-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", resetValue);
        }
        return function () {
            var _a;
            (_a = document.getElementById("clear-form")) === null || _a === void 0 ? void 0 : _a.removeEventListener("click", resetValue);
        };
    }, []);
    React.useEffect(function () {
        if (fromDate !== undefined) {
            setFromDate(value);
            setValue(name, value === null || value === void 0 ? void 0 : value.toLocaleDateString("sv-se"));
        }
    }, [value]);
    React.useEffect(function () {
        if (toDate !== undefined) {
            setToDate(valueSecondary);
            setValue(nameSecondary, valueSecondary === null || valueSecondary === void 0 ? void 0 : valueSecondary.toLocaleDateString("sv-se"));
        }
    }, [valueSecondary]);
    var resetValue = function () {
        setValue(name, undefined);
        setFromDate(undefined);
        setValue(nameSecondary, undefined);
        setToDate(undefined);
    };
    var errorType = (_b = getNestedObjectValue(errors, name)) === null || _b === void 0 ? void 0 : _b.type;
    var errorTypeSecondary = (_c = getNestedObjectValue(errors, nameSecondary)) === null || _c === void 0 ? void 0 : _c.type;
    return (React.createElement("div", { className: className + " form-group " + (inlineLabel ? "row" : "") },
        React.createElement("label", { className: inlineLabel ? "col-".concat(labelCol, " col-form-label") : "" },
            label,
            ":",
            requiredFrom || requiredTo ? "*" : ""),
        React.createElement("div", { className: inlineLabel ? "col-".concat(inputCol) : "" },
            React.createElement("div", { className: "input-group" },
                React.createElement("div", { className: "row date-picker-range__wrapper" },
                    React.createElement("div", { className: "col" },
                        React.createElement(DatePicker, { name: name, id: name, selected: fromDate, onChange: function (date) {
                                setFromDate(date);
                                setValue(name, date === null || date === void 0 ? void 0 : date.toLocaleDateString("sv-se"));
                            }, dateFormat: "yyyy-MM-dd", className: "form-control form-control-sm " + (disabled ? "disabled " : ""), maxDate: toDate, autoComplete: "off", locale: "sv-se", showYearDropdown: true, showMonthDropdown: true, onChangeRaw: function (e) { return e.preventDefault(); }, isClearable: true }),
                        React.createElement("span", { className: "text-danger" }, errorType === "required" && "Välj ett datum")),
                    React.createElement("span", { className: "date-connector" }, "-"),
                    React.createElement("div", { className: "col" },
                        React.createElement(DatePicker, { name: nameSecondary, id: nameSecondary, selected: toDate, onChange: function (date) {
                                setToDate(date);
                                setValue(nameSecondary, date === null || date === void 0 ? void 0 : date.toLocaleDateString("sv-se"));
                            }, dateFormat: "yyyy-MM-dd", className: "form-control form-control-sm " + (disabled ? "disabled " : ""), minDate: fromDate, autoComplete: "off", locale: "sv-se", showYearDropdown: true, showMonthDropdown: true, onChangeRaw: function (e) { return e.preventDefault(); }, isClearable: true }),
                        React.createElement("span", { className: "text-danger" }, errorTypeSecondary === "required" && "Välj ett datum"))),
                tooltipDescription ?
                    React.createElement(InputIconTooltip, { description: tooltipDescription, icon: faQuestionCircle })
                    : null))));
};
