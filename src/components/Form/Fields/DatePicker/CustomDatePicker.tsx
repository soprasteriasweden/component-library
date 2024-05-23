import * as React from "react";
import "react-datepicker/dist/react-datepicker.css";
import '../../../../assets/styles/DatePicker.scss';
import { IDatePicker } from '../../../../models/IFormInput';
import { useFormContext, FieldErrors } from 'react-hook-form';
import svSE from 'date-fns/locale/sv';
import DatePicker, { registerLocale } from 'react-datepicker';
import { InputIconTooltip } from "../TooltipItem/InputIconTooltip";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

registerLocale('sv-se', { ...svSE, options: { ...svSE.options, weekStartsOn: 1 } });

export const CustomDatePicker: React.FunctionComponent<IDatePicker> = ({ name, label, className, value, inlineLabel, disabled, required, requiredValidationMessage, max, min, onChange, tooltipDescription, labelCol = 4, inputCol = 8 }) => {

    const [selectedDate, setSelectedDate] = React.useState<Date | null | undefined>(value);
    const { errors, register, setValue, clearError, unregister } = useFormContext();

    React.useEffect(() => {
        register({ name }, { required });
        setValue(name, value?.toLocaleDateString("sv-se"));
        if (!disabled) {
            document.getElementById("clear-form")?.addEventListener("click", resetValue);
        }
        return () => {
            clearError(name);
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

    const getErrorMessage = (): string | null => {
        let error: any = errors;
        const keys = name.split('.');
        for (let key of keys) {
            if (error && error[key]) {
                error = error[key];
            } else {
                return null;
            }
        }
        if (error?.type === "required") {
            return requiredValidationMessage ? requiredValidationMessage : `${label} måste anges`;
        }
        return null;
    };

    return (
        <div className={className + " form-group " + (inlineLabel ? "row" : "")}>
            <label className={inlineLabel ? `col-${labelCol} col-form-label` : ""}>{label}:{required ? "*" : ""}</label>
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
                        className={"form-control form-control-sm " + (disabled ? "disabled " : "")}
                        disabled={disabled}
                        minDate={min}
                        maxDate={max}
                        autoComplete="off"
                        locale="sv-se"
                        showYearDropdown
                        showMonthDropdown
                        onChangeRaw={e => e.preventDefault()}
                        isClearable
                    />
                    {
                        tooltipDescription &&
                        <InputIconTooltip description={tooltipDescription} icon={faQuestionCircle} />
                    }
                </div>
                <span className="text-danger">{getErrorMessage()}</span>
            </div>
        </div>
    );
};
