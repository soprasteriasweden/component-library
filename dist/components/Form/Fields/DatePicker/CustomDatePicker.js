import * as React from "react";
import "react-datepicker/dist/react-datepicker.css";
import '../../../../assets/styles/DatePicker.scss';
import { useFormContext } from 'react-hook-form';
import { sv } from 'date-fns/locale/sv';
import DatePicker, { registerLocale } from 'react-datepicker';
import { InputIconTooltip } from "../TooltipItem/InputIconTooltip";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
registerLocale('sv-se', sv);
export const CustomDatePicker = ({ name, label, className = "", value, inlineLabel = false, disabled = false, required = false, requiredValidationMessage, max, min, onChange, tooltipDescription, labelCol = 4, inputCol = 8, }) => {
    const [selectedDate, setSelectedDate] = React.useState(value || null);
    const { setValue, unregister, formState: { errors } } = useFormContext();
    React.useEffect(() => {
        setValue(name, (value === null || value === void 0 ? void 0 : value.toLocaleDateString("sv-se")) || null);
        return () => {
            unregister(name);
        };
    }, [name, setValue, unregister, value]);
    React.useEffect(() => {
        setSelectedDate(value || null);
        setValue(name, (value === null || value === void 0 ? void 0 : value.toLocaleDateString("sv-se")) || null);
    }, [value, name, setValue]);
    const resetValue = React.useCallback(() => {
        setValue(name, null);
        setSelectedDate(null);
    }, [name, setValue]);
    const getErrorMessage = () => {
        const fieldError = errors[name];
        if ((fieldError === null || fieldError === void 0 ? void 0 : fieldError.type) === "required") {
            return requiredValidationMessage || `${label} m�ste anges`;
        }
        return null;
    };
    return (React.createElement("div", { className: `${className} form-group ${inlineLabel ? "row" : ""}` },
        React.createElement("label", { className: inlineLabel ? `col-${labelCol} col-form-label` : "" },
            label,
            ":",
            required ? "*" : ""),
        React.createElement("div", { className: inlineLabel ? `col-${inputCol}` : "" },
            React.createElement("div", { className: "input-group-datepicker align-items-center" },
                React.createElement(DatePicker, { name: name, selected: selectedDate, onChange: (date) => {
                        setSelectedDate(date);
                        setValue(name, (date === null || date === void 0 ? void 0 : date.toLocaleDateString("sv-se")) || null);
                        if (onChange)
                            onChange(date);
                    }, dateFormat: "yyyy-MM-dd", className: `form-control form-control-sm ${disabled ? "disabled" : ""}`, disabled: disabled, minDate: min, maxDate: max, autoComplete: "off", locale: "sv-se", calendarStartDay: 1, showYearDropdown: true, showMonthDropdown: true, onChangeRaw: (e) => e.preventDefault(), isClearable: true }),
                tooltipDescription && (React.createElement(InputIconTooltip, { description: tooltipDescription, icon: faQuestionCircle }))),
            React.createElement("span", { className: "text-danger" }, getErrorMessage()))));
};
