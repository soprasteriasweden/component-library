import * as React from "react";
import '../../../../assets/styles/DatePicker.scss';
import '../../../../assets/styles/DatePickerRange.style.scss';
import { useFormContext, Controller } from 'react-hook-form'; // Updated hook usage
import { sv } from 'date-fns/locale/sv';
import DatePicker, { registerLocale } from 'react-datepicker';
import { InputIconTooltip } from "../TooltipItem/InputIconTooltip";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { getNestedObjectValue } from "../../../../utils/utils";
registerLocale('sv-se', sv);
export const DatePickerRange = ({ name, nameSecondary, label, className, inlineLabel, disabledFrom, disabledTo, requiredFrom, requiredTo, value, valueSecondary, min, minSecondary, tooltipDescription, labelCol = 4, inputCol = 8 }) => {
    var _a, _b;
    const { control, setValue, trigger, formState: { errors } } = useFormContext();
    const resetValue = () => {
        setValue(name, undefined, { shouldValidate: true });
        setValue(nameSecondary, undefined, { shouldValidate: true });
    };
    React.useEffect(() => {
        const clearButton = document.getElementById("clear-form");
        if (clearButton) {
            clearButton.addEventListener("click", resetValue);
        }
        return () => {
            if (clearButton) {
                clearButton.removeEventListener("click", resetValue);
            }
        };
    }, []);
    const errorType = (_a = getNestedObjectValue(errors, name)) === null || _a === void 0 ? void 0 : _a.type;
    const errorTypeSecondary = (_b = getNestedObjectValue(errors, nameSecondary)) === null || _b === void 0 ? void 0 : _b.type;
    return (React.createElement("div", { className: `${className} form-group ${inlineLabel ? "row" : ""}` },
        React.createElement("label", { className: inlineLabel ? `col-${labelCol} col-form-label` : "" },
            label,
            ":",
            requiredFrom || requiredTo ? "*" : ""),
        React.createElement("div", { className: inlineLabel ? `col-${inputCol}` : "" },
            React.createElement("div", { className: "input-group" },
                React.createElement("div", { className: "row date-picker-range__wrapper" },
                    React.createElement("div", { className: "col" },
                        React.createElement(Controller, { name: name, control: control, defaultValue: value || null, rules: { required: requiredFrom }, render: ({ field }) => (React.createElement(DatePicker, Object.assign({}, field, { selected: field.value, onChange: (date) => {
                                    field.onChange(date);
                                    setValue(name, date === null || date === void 0 ? void 0 : date.toLocaleDateString("sv-se"), { shouldValidate: true });
                                    trigger(name);
                                }, dateFormat: "yyyy-MM-dd", className: `form-control form-control-sm ${disabledFrom ? "disabled" : ""}`, disabled: disabledFrom, minDate: min, maxDate: valueSecondary, autoComplete: "off", locale: "sv-se", showYearDropdown: true, showMonthDropdown: true, onChangeRaw: (e) => e.preventDefault(), isClearable: !disabledFrom }))) }),
                        React.createElement("span", { className: "text-danger" }, errorType === "required" && "Välj ett datum")),
                    React.createElement("span", { className: "date-connector" }, "-"),
                    React.createElement("div", { className: "col" },
                        React.createElement(Controller, { name: nameSecondary, control: control, defaultValue: valueSecondary || null, rules: { required: requiredTo }, render: ({ field }) => (React.createElement(DatePicker, Object.assign({}, field, { selected: field.value, onChange: (date) => {
                                    field.onChange(date);
                                    setValue(nameSecondary, date === null || date === void 0 ? void 0 : date.toLocaleDateString("sv-se"), { shouldValidate: true });
                                    trigger(nameSecondary);
                                }, dateFormat: "yyyy-MM-dd", className: `form-control form-control-sm ${disabledTo ? "disabled" : ""}`, disabled: disabledTo, minDate: minSecondary || value, autoComplete: "off", locale: "sv-se", showYearDropdown: true, showMonthDropdown: true, onChangeRaw: (e) => e.preventDefault(), isClearable: !disabledTo }))) }),
                        React.createElement("span", { className: "text-danger" }, errorTypeSecondary === "required" && "Välj ett datum"))),
                tooltipDescription && (React.createElement(InputIconTooltip, { description: tooltipDescription, icon: faQuestionCircle }))))));
};
