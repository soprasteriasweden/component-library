import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import "react-datepicker/dist/react-datepicker.css";
import '../../../../assets/styles/DatePicker.scss';
import { useFormContext } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import { InputIconTooltip } from "../TooltipItem/InputIconTooltip";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
// registerLocale('sv-se', { ...svSE, options: { weekStartsOn: 1 } });
const CustomDatePicker = ({ name, label, className, value, inlineLabel, disabled, required, requiredValidationMessage, max, min, onChange, tooltipDescription, labelCol = 4, inputCol = 8 }) => {
    const [selectedDate, setSelectedDate] = React.useState(value);
    const { register, setValue, clearErrors, unregister, formState: { errors } } = useFormContext();
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
    const getErrorMessage = () => {
        let error = errors;
        const keys = name.split('.');
        for (let key of keys) {
            if (error && error[key]) {
                error = error[key];
            }
            else {
                return null;
            }
        }
        if ((error === null || error === void 0 ? void 0 : error.type) === "required") {
            return requiredValidationMessage ? requiredValidationMessage : `${label} måste anges`;
        }
        return null;
    };
    return (_jsxs("div", { className: className + " form-group " + (inlineLabel ? "row" : ""), children: [_jsxs("label", { className: inlineLabel ? `col-${labelCol} col-form-label` : "", children: [label, ":", required ? "*" : ""] }), _jsxs("div", { className: inlineLabel ? `col-${inputCol}` : "", children: [_jsxs("div", { className: "input-group-datepicker align-items-center", children: [_jsx(DatePicker, { name: name, selected: selectedDate, onChange: date => {
                                    setSelectedDate(date);
                                    setValue(name, date === null || date === void 0 ? void 0 : date.toLocaleDateString("sv-se"));
                                    if (onChange) {
                                        onChange(date);
                                    }
                                }, disabled: disabled, minDate: min, maxDate: max, locale: "sv-se", className: "form-control" }), tooltipDescription && (_jsx(InputIconTooltip, { icon: faQuestionCircle, description: tooltipDescription }))] }), getErrorMessage() && _jsx("div", { className: "invalid-feedback d-block", children: getErrorMessage() })] })] }));
};
export default CustomDatePicker;
