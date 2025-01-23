import * as React from "react";
import "react-datepicker/dist/react-datepicker.css";
import '../../../../assets/styles/DatePicker.scss';
import { IDatePicker } from '../../../../models/IFormInput';
import { useFormContext, Controller } from 'react-hook-form';
import { sv } from 'date-fns/locale/sv';
import DatePicker, { registerLocale } from 'react-datepicker';
import { InputIconTooltip } from "../TooltipItem/InputIconTooltip";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { getNestedObjectValue } from "../../../../utils/utils";

registerLocale('sv-se', sv);

export const CustomDatePicker: React.FunctionComponent<IDatePicker> = ({ name, label, className, value, inlineLabel, disabled, required, requiredValidationMessage, max, min, onChange, tooltipDescription, labelCol = 4, inputCol = 8 }) => {
    const {  register, unregister, setValue, clearErrors, formState: { errors } } = useFormContext();
    const [selectedDate, setSelectedDate] = React.useState<Date | null | undefined>(value);
    
     React.useEffect(() => {
        register(name, { required });
        setValue(name, value?.toLocaleDateString("sv-se"));
        if (!disabled) {
            document.getElementById("clear-form")?.addEventListener("click", resetValue);
        }
        return () => {
            clearErrors(name);
            unregister(name);
            document.getElementById("clear-form")?.removeEventListener("click", resetValue);
        };
    }, []);

    React.useEffect(() => {
        if (selectedDate !== undefined) {
            setSelectedDate(value);
            setValue(name, value?.toLocaleDateString("sv-se"));
        }
    }, [value]);

    const resetValue = () => {
        setValue(name, undefined);
        setSelectedDate(undefined);
    };

    const errorType = getNestedObjectValue(errors, name)?.type;

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
                        onChange={date => {
                            setSelectedDate(date);
                            setValue(name, date?.toLocaleDateString("sv-se"));
                            if (onChange) {
                                onChange(date);
                            }
                        }}
                        dateFormat="yyyy-MM-dd"
                        className={`form-control form-control-sm ${disabled ? "disabled" : ""}`}
                        disabled={disabled}
                        minDate={min}
                        maxDate={max}
                        autoComplete="off"
                        locale="sv-se"
                        showYearDropdown
                        showMonthDropdown
                        onChangeRaw={(e: any) => e.preventDefault()}
                        isClearable
                    />
                    {tooltipDescription && (
                        <InputIconTooltip description={tooltipDescription} icon={faQuestionCircle} />
                    )}
                </div>
                <span className="text-danger">
                    {errorType === "required" && (requiredValidationMessage || `${label} måste anges`)}
                </span>
            </div>
        </div>
    );
};