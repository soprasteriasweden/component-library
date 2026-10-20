import * as React from "react";
import "react-datepicker/dist/react-datepicker.css";
import '../../../../assets/styles/DatePicker.scss';
import { useFormContext } from 'react-hook-form';
import { sv } from 'date-fns/locale/sv';
import DatePicker, { registerLocale } from 'react-datepicker';
import { InputIconTooltip } from "../TooltipItem/InputIconTooltip";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { getNestedObjectValue } from "../../../../utils/utils";
registerLocale('sv-se', sv);
export const CustomDatePicker = ({ name, label, className, value, inlineLabel, disabled, required, requiredValidationMessage, max, min, onChange, tooltipDescription, labelCol = 4, inputCol = 8 }) => {
    var _a;
    const { register, unregister, setValue, clearErrors, formState: { errors } } = useFormContext();
    const [selectedDate, setSelectedDate] = React.useState(value);
    React.useEffect(() => {
        var _a;
        register(name, { required });
        setValue(name, value === null || value === void 0 ? void 0 : value.toLocaleDateString("sv-se"));
        if (!disabled) {
            (_a = document.getElementById("clear-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", resetValue);
        }
        return () => {
            var _a;
            clearErrors(name);
            unregister(name);
            (_a = document.getElementById("clear-form")) === null || _a === void 0 ? void 0 : _a.removeEventListener("click", resetValue);
        };
    }, []);
    React.useEffect(() => {
        if (selectedDate !== undefined) {
            setSelectedDate(value);
            setValue(name, value === null || value === void 0 ? void 0 : value.toLocaleDateString("sv-se"));
        }
    }, [value]);
    const resetValue = () => {
        setValue(name, undefined);
        setSelectedDate(undefined);
    };
    const errorType = (_a = getNestedObjectValue(errors, name)) === null || _a === void 0 ? void 0 : _a.type;
    return (React.createElement("div", { className: `${className} form-group ${inlineLabel ? "row" : ""}` },
        React.createElement("label", { className: inlineLabel ? `col-${labelCol} col-form-label` : "" },
            label,
            ":",
            required ? "*" : ""),
        React.createElement("div", { className: inlineLabel ? `col-${inputCol}` : "" },
            React.createElement("div", { className: "input-group-datepicker align-items-center" },
                React.createElement(DatePicker, { name: name, selected: selectedDate, onChange: date => {
                        setSelectedDate(date);
                        setValue(name, date === null || date === void 0 ? void 0 : date.toLocaleDateString("sv-se"));
                        if (onChange) {
                            onChange(date);
                        }
                    }, dateFormat: "yyyy-MM-dd", className: `form-control form-control-sm ${disabled ? "disabled" : ""}`, disabled: disabled, minDate: min, maxDate: max, autoComplete: "off", locale: "sv-se", showYearDropdown: true, showMonthDropdown: true, onChangeRaw: (e) => e.preventDefault(), isClearable: true }),
                tooltipDescription && (React.createElement(InputIconTooltip, { description: tooltipDescription, icon: faQuestionCircle }))),
            React.createElement("span", { className: "text-danger" }, errorType === "required" && (requiredValidationMessage || `${label} måste anges`)))));
};
