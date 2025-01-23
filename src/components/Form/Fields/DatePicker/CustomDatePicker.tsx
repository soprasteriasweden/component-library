import * as React from "react";
import "react-datepicker/dist/react-datepicker.css";
import '../../../../assets/styles/DatePicker.scss';
import { IDatePicker } from '../../../../models/IFormInput';
import { useFormContext, FieldErrors } from 'react-hook-form';
import { sv } from 'date-fns/locale/sv';
import DatePicker, { registerLocale } from 'react-datepicker';
import { InputIconTooltip } from "../TooltipItem/InputIconTooltip";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

registerLocale('sv-se', sv);

export const CustomDatePicker: React.FunctionComponent<IDatePicker> = ({
    name,
    label,
    className = "",
    value,
    inlineLabel = false,
    disabled = false,
    required = false,
    requiredValidationMessage,
    max,
    min,
    onChange,
    tooltipDescription,
    labelCol = 4,
    inputCol = 8,
}) => {
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(value || null);
    const { setValue, unregister, formState: { errors } } = useFormContext();

    React.useEffect(() => {
        setValue(name, value?.toLocaleDateString("sv-se") || null);
        return () => {
            unregister(name);
        };
    }, [name, setValue, unregister, value]);

    React.useEffect(() => {
        setSelectedDate(value || null);
        setValue(name, value?.toLocaleDateString("sv-se") || null);
    }, [value, name, setValue]);

    const resetValue = React.useCallback(() => {
        setValue(name, null);
        setSelectedDate(null);
    }, [name, setValue]);

    const getErrorMessage = (): string | null => {
        const fieldError = errors[name as keyof typeof errors];
        if (fieldError?.type === "required") {
            return requiredValidationMessage || `${label} måste anges`;
        }
        return null;
    };

    return (
        <div className={`${className} form-group ${inlineLabel ? "row" : ""}`}>
            <label className={inlineLabel ? `col-${labelCol} col-form-label` : ""}>
                {label}:{required ? "*" : ""}
            </label>
            <div className={inlineLabel ? `col-${inputCol}` : ""}>
                <div className="input-group-datepicker align-items-center">
                    <DatePicker
                        name={name}
                        selected={selectedDate}
                        onChange={(date) => {
                            setSelectedDate(date);
                            setValue(name, date?.toLocaleDateString("sv-se") || null);
                            if (onChange) onChange(date);
                        }}
                        dateFormat="yyyy-MM-dd"
                        className={`form-control form-control-sm ${disabled ? "disabled" : ""}`}
                        disabled={disabled}
                        minDate={min}
                        maxDate={max}
                        autoComplete="off"
                        locale="sv-se"
                        calendarStartDay={1}
                        showYearDropdown
                        showMonthDropdown
                        onChangeRaw={(e: any) => e.preventDefault()}
                        isClearable
                    />
                    {tooltipDescription && (
                        <InputIconTooltip description={tooltipDescription} icon={faQuestionCircle} />
                    )}
                </div>
                <span className="text-danger">{getErrorMessage()}</span>
            </div>
        </div>
    );
};
