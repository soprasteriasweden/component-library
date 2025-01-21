import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import '../../../../assets/styles/DatePicker.scss';
import '../../../../assets/styles/DatePickerRange.style.scss';
import { useFormContext } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import { InputIconTooltip } from "../TooltipItem/InputIconTooltip";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { getNestedObjectValue } from "../../../../utils/utils";
// registerLocale('sv-se', { ...svSE, options: { ...svSE.options, weekStartsOn: 1 }, match: svSE.match, formatLong: svSE.formatLong, localize: svSE.localize });
export const DatePickerRange = ({ name, nameSecondary, label, className, inlineLabel, disabledFrom, disabledTo, requiredFrom, requiredTo, value, valueSecondary, min, minSecondary, tooltipDescription, labelCol = 4, inputCol = 8 }) => {
    var _a, _b, _c;
    const [fromDate, setFromDate] = React.useState(value);
    const [toDate, setToDate] = React.useState(valueSecondary);
    const { formState: { errors }, register, setValue } = useFormContext();
    React.useEffect(() => {
        var _a;
        register(name, { required: requiredFrom });
        register(nameSecondary, { required: requiredTo });
        setValue(name, value === null || value === void 0 ? void 0 : value.toLocaleDateString("sv-se"));
        setValue(nameSecondary, valueSecondary === null || valueSecondary === void 0 ? void 0 : valueSecondary.toLocaleDateString("sv-se"));
        if (!disabledFrom) {
            (_a = document.getElementById("clear-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", resetValue);
        }
        return () => {
            var _a;
            (_a = document.getElementById("clear-form")) === null || _a === void 0 ? void 0 : _a.removeEventListener("click", resetValue);
        };
    }, []);
    React.useEffect(() => {
        if (fromDate !== undefined) {
            setFromDate(value);
            setValue(name, value === null || value === void 0 ? void 0 : value.toLocaleDateString("sv-se"));
        }
    }, [value]);
    React.useEffect(() => {
        if (toDate !== undefined) {
            setToDate(valueSecondary);
            setValue(nameSecondary, valueSecondary === null || valueSecondary === void 0 ? void 0 : valueSecondary.toLocaleDateString("sv-se"));
        }
    }, [valueSecondary]);
    const resetValue = () => {
        setValue(name, undefined);
        setFromDate(undefined);
        setValue(nameSecondary, undefined);
        setToDate(undefined);
    };
    const errorType = (_a = getNestedObjectValue(errors, name)) === null || _a === void 0 ? void 0 : _a.type;
    const errorTypeSecondary = (_b = getNestedObjectValue(errors, nameSecondary)) === null || _b === void 0 ? void 0 : _b.type;
    return (_jsxs("div", { className: className + " form-group " + (inlineLabel ? "row" : ""), children: [_jsxs("label", { className: inlineLabel ? `col-${labelCol} col-form-label` : "", children: [label, ":", requiredFrom || requiredTo ? "*" : ""] }), _jsx("div", { className: inlineLabel ? `col-${inputCol}` : "", children: _jsxs("div", { className: "input-group", children: [_jsxs("div", { className: "row date-picker-range__wrapper", children: [_jsxs("div", { className: "col", children: [_jsx(DatePicker, { name: name, id: name, selected: fromDate, onChange: date => {
                                                setFromDate(date);
                                                setValue(name, date === null || date === void 0 ? void 0 : date.toLocaleDateString("sv-se"));
                                            }, dateFormat: "yyyy-MM-dd", className: "form-control form-control-sm " + (disabledFrom ? "disabled " : ""), disabled: disabledFrom, minDate: min, maxDate: toDate !== null && toDate !== void 0 ? toDate : undefined, autoComplete: "off", locale: "sv-se", showYearDropdown: true, showMonthDropdown: true, onChangeRaw: e => e === null || e === void 0 ? void 0 : e.preventDefault(), isClearable: !disabledFrom }), _jsx("span", { className: "text-danger", children: errorType === "required" && "Välj ett datum" })] }), _jsx("span", { className: "date-connector", children: "-" }), _jsxs("div", { className: "col", children: [_jsx(DatePicker, { name: nameSecondary, id: nameSecondary, selected: toDate, onChange: date => {
                                                setToDate(date);
                                                setValue(nameSecondary, date === null || date === void 0 ? void 0 : date.toLocaleDateString("sv-se"));
                                            }, dateFormat: "yyyy-MM-dd", className: "form-control form-control-sm " + (disabledTo ? "disabled " : ""), disabled: disabledTo, minDate: (_c = minSecondary !== null && minSecondary !== void 0 ? minSecondary : fromDate) !== null && _c !== void 0 ? _c : undefined, autoComplete: "off", locale: "sv-se", showYearDropdown: true, showMonthDropdown: true, onChangeRaw: e => e === null || e === void 0 ? void 0 : e.preventDefault(), isClearable: !disabledTo }), _jsx("span", { className: "text-danger", children: errorTypeSecondary === "required" && "Välj ett datum" })] })] }), tooltipDescription ?
                            _jsx(InputIconTooltip, { description: tooltipDescription, icon: faQuestionCircle })
                            : null] }) })] }));
};
