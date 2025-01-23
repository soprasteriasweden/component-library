import * as React from "react";
import "react-datepicker/dist/react-datepicker.css";
import '../../../../assets/styles/DatePicker.scss';
import { useFormContext, Controller } from 'react-hook-form';
import { sv } from 'date-fns/locale/sv';
import DatePicker, { registerLocale } from 'react-datepicker';
import { InputIconTooltip } from "../TooltipItem/InputIconTooltip";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { getNestedObjectValue } from "../../../../utils/utils";
registerLocale('sv-se', sv);
export const CustomDatePicker = ({ name, label, className = "", value, inlineLabel = false, disabled = false, required = false, requiredValidationMessage, max, min, onChange, tooltipDescription, labelCol = 4, inputCol = 8, }) => {
    var _a;
    const { control, formState: { errors } } = useFormContext();
    const errorType = (_a = getNestedObjectValue(errors, name)) === null || _a === void 0 ? void 0 : _a.type;
    return (React.createElement("div", { className: `${className} form-group ${inlineLabel ? "row" : ""}` },
        React.createElement("label", { className: inlineLabel ? `col-${labelCol} col-form-label` : "" },
            label,
            ":",
            required ? "*" : ""),
        React.createElement("div", { className: inlineLabel ? `col-${inputCol}` : "" },
            React.createElement("div", { className: "input-group-datepicker align-items-center" },
                React.createElement(Controller, { name: name, control: control, defaultValue: value || null, rules: {
                        required: required
                            ? requiredValidationMessage || `${label} m�ste anges`
                            : undefined,
                    }, render: ({ field }) => (React.createElement(DatePicker, Object.assign({}, field, { selected: field.value, onChange: (date) => {
                            field.onChange(date); // Update form state
                            if (onChange)
                                onChange(date); // Call external onChange if provided
                        }, dateFormat: "yyyy-MM-dd", className: `form-control form-control-sm ${disabled ? "disabled" : ""}`, disabled: disabled, minDate: min, maxDate: max, autoComplete: "off", locale: "sv-se", calendarStartDay: 1, showYearDropdown: true, showMonthDropdown: true, onChangeRaw: (e) => e.preventDefault(), isClearable: true, ref: (inputRef) => {
                            if (inputRef) {
                                field.ref({
                                    focus: () => {
                                        inputRef.setBlur();
                                    },
                                });
                            }
                        } }))) }),
                tooltipDescription && (React.createElement(InputIconTooltip, { description: tooltipDescription, icon: faQuestionCircle }))),
            React.createElement("span", { className: "text-danger" }, errorType === "required" && (requiredValidationMessage || `${label} m�ste anges`)))));
};
