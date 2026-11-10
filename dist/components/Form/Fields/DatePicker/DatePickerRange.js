import * as React from "react";
import '../../../../assets/styles/DatePicker.scss';
import '../../../../assets/styles/DatePickerRange.style.scss';
import { useFormContext } from 'react-hook-form';
import { sv } from 'date-fns/locale/sv';
import DatePicker, { registerLocale } from 'react-datepicker';
import { InputIconTooltip } from "../TooltipItem/InputIconTooltip";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { getNestedObjectValue } from "../../../../utils/utils";
registerLocale('sv-se', sv);
// Anchor the calendar to the input's left edge and position it with "fixed",
// so it isn't clipped by an overflowing parent such as a scrollable modal body.
const popperSettings = {
    popperPlacement: "bottom-start",
    popperProps: { strategy: "fixed" }
};
const requiredMark = (required) => (required ? "*" : "");
export const DatePickerRange = ({ name, nameSecondary, label, labelSecondary, className = "", inlineLabel, disabledFrom, disabledTo, requiredFrom, requiredTo, value, valueSecondary, min, minSecondary, tooltipDescription, labelCol = 4, inputCol = 8 }) => {
    var _a, _b;
    const [fromDate, setFromDate] = React.useState(value);
    const [toDate, setToDate] = React.useState(valueSecondary);
    const { register, unregister, setValue, clearErrors, formState: { errors } } = useFormContext();
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
            clearErrors(name);
            clearErrors(nameSecondary);
            unregister(name);
            unregister(nameSecondary);
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
    const labelClassName = inlineLabel ? `col-${labelCol} col-form-label` : "";
    return (React.createElement("div", { className: `${className} form-group ${inlineLabel ? "row" : ""}` },
        labelSecondary ? (
        // Two labels: one per input, so each date field is individually labelled
        React.createElement("div", { className: labelClassName },
            React.createElement("label", { htmlFor: name },
                label,
                requiredMark(requiredFrom)),
            " - ",
            React.createElement("label", { htmlFor: nameSecondary },
                labelSecondary,
                requiredMark(requiredTo)),
            ":")) : (
        // One label describing the whole range
        React.createElement("label", { htmlFor: name, className: labelClassName },
            label,
            ":",
            requiredMark(requiredFrom || requiredTo))),
        React.createElement("div", { className: inlineLabel ? `col-${inputCol}` : "" },
            React.createElement("div", { className: "input-group" },
                React.createElement("div", { className: "date-picker-range__wrapper" },
                    React.createElement("div", { className: "date-picker-range__date" },
                        React.createElement(DatePicker, Object.assign({}, popperSettings, { name: name, id: name, selected: fromDate, onChange: date => {
                                setFromDate(date);
                                setValue(name, date === null || date === void 0 ? void 0 : date.toLocaleDateString("sv-se"), { shouldValidate: true });
                            }, dateFormat: "yyyy-MM-dd", className: "form-control form-control-sm " + (disabledFrom ? "disabled " : ""), disabled: disabledFrom, minDate: min, maxDate: toDate === null ? undefined : toDate, autoComplete: "off", locale: "sv-se", showYearDropdown: true, showMonthDropdown: true, onChangeRaw: (e) => e.preventDefault(), isClearable: !disabledFrom })),
                        errorType === "required" && (React.createElement("span", { className: "text-danger d-block" }, "V\u00E4lj ett datum"))),
                    React.createElement("span", { className: "date-connector form-control-plaintext form-control-sm", "aria-hidden": "true" }, " \u2013"),
                    React.createElement("div", { className: "date-picker-range__date" },
                        React.createElement(DatePicker, Object.assign({}, popperSettings, { name: nameSecondary, id: nameSecondary, selected: toDate, onChange: date => {
                                setToDate(date);
                                setValue(nameSecondary, date === null || date === void 0 ? void 0 : date.toLocaleDateString("sv-se"), { shouldValidate: true });
                            }, dateFormat: "yyyy-MM-dd", className: "form-control form-control-sm " + (disabledTo ? "disabled " : ""), disabled: disabledTo, minDate: minSecondary ? minSecondary : fromDate !== null && fromDate !== void 0 ? fromDate : new Date(), autoComplete: "off", locale: "sv-se", showYearDropdown: true, showMonthDropdown: true, onChangeRaw: (e) => e.preventDefault(), isClearable: !disabledTo })),
                        errorTypeSecondary === "required" && (React.createElement("span", { className: "text-danger d-block" }, "V\u00E4lj ett datum")))),
                tooltipDescription && (React.createElement(InputIconTooltip, { description: tooltipDescription, icon: faQuestionCircle }))))));
};
