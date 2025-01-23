import * as React from "react";
import '../../../../assets/styles/DatePicker.scss';
import '../../../../assets/styles/DatePickerRange.style.scss';
import { IDatePickerRange } from '../../../../models/IFormInput';
import { useFormContext } from 'react-hook-form'; // Updated hook usage
import { sv } from 'date-fns/locale/sv';
import DatePicker, { registerLocale } from 'react-datepicker';
import { InputIconTooltip } from "../TooltipItem/InputIconTooltip";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { getNestedObjectValue } from "../../../../utils/utils";

registerLocale('sv-se', sv);

export const DatePickerRange: React.FunctionComponent<IDatePickerRange> = ({ name, nameSecondary, label, className, inlineLabel, disabledFrom, disabledTo, requiredFrom, requiredTo, value, valueSecondary, min, minSecondary, tooltipDescription, labelCol = 4, inputCol = 8 }) => {

    const [fromDate, setFromDate] = React.useState<Date | undefined | null>(value);
    const [toDate, setToDate] = React.useState<Date | undefined | null>(valueSecondary);
    const { register, unregister, setValue, clearErrors, formState: { errors } } = useFormContext();

    React.useEffect(() => {
        register(name, { required: requiredFrom });
        register(nameSecondary, { required: requiredTo });
        setValue(name, value?.toLocaleDateString("sv-se"));
        setValue(nameSecondary, valueSecondary?.toLocaleDateString("sv-se"));
        if (!disabledFrom) {
            document.getElementById("clear-form")?.addEventListener("click", resetValue);
        }

        return () => {
            clearErrors(name);
            unregister(name);
            document.getElementById("clear-form")?.removeEventListener("click", resetValue);
        }
    }, []);

    React.useEffect(() => {
        if (fromDate !== undefined) {
            setFromDate(value);
            setValue(name, value?.toLocaleDateString("sv-se"));
        }
    }, [value]);

    React.useEffect(() => {
        if (toDate !== undefined) {
            setToDate(valueSecondary);
            setValue(nameSecondary, valueSecondary?.toLocaleDateString("sv-se"));
        }
    }, [valueSecondary]);

    const resetValue = () => {
        setValue(name, undefined);
        setFromDate(undefined);
        setValue(nameSecondary, undefined);
        setToDate(undefined);
    }

    const errorType = getNestedObjectValue(errors, name)?.type;
    const errorTypeSecondary = getNestedObjectValue(errors, nameSecondary)?.type;

    return (
        <div className={`${className} form-group ${inlineLabel ? "row" : ""}`}>
            <label className={inlineLabel ? `col-${labelCol} col-form-label` : ""}>
                {label}:{requiredFrom || requiredTo ? "*" : ""}
            </label>
            <div className={inlineLabel ? `col-${inputCol}` : ""}>
                <div className="input-group">
                    <div className="row date-picker-range__wrapper">
                        <div className="col">
                            <DatePicker
                                name={name}
                                id={name}
                                selected={fromDate}
                                onChange={date => {
                                    setFromDate(date);
                                    setValue(name, date?.toLocaleDateString("sv-se"));
                                }
                                }
                                dateFormat="yyyy-MM-dd"
                                className={"form-control form-control-sm " + (disabledFrom ? "disabled " : "")}
                                disabled={disabledFrom}
                                minDate={min}
                                maxDate={toDate === null ? undefined : toDate}
                                autoComplete="off"
                                locale="sv-se"
                                showYearDropdown
                                showMonthDropdown
                                onChangeRaw={(e: any) => e.preventDefault()}
                                isClearable={!disabledFrom}
                            />
                            <span className="text-danger">{errorType === "required" && "Välj ett datum"}</span>
                        </div>
                        <span className="date-connector">-</span>
                        <div className="col">
                            <DatePicker
                                name={nameSecondary}
                                id={nameSecondary}
                                selected={toDate}
                                onChange={date => {
                                    setToDate(date);
                                    setValue(nameSecondary, date?.toLocaleDateString("sv-se"));
                                }
                                }
                                dateFormat="yyyy-MM-dd"
                                className={"form-control form-control-sm " + (disabledTo ? "disabled " : "")}
                                disabled={disabledTo}
                                minDate={minSecondary ? minSecondary : fromDate ?? new Date()}
                                autoComplete="off"
                                locale="sv-se"
                                showYearDropdown
                                showMonthDropdown
                                onChangeRaw={(e: any) => e.preventDefault()}
                                isClearable={!disabledTo}
                            />
                            <span className="text-danger">{errorTypeSecondary === "required" && "Välj ett datum"}</span>
                        </div>
                    </div>
                    {tooltipDescription && (
                        <InputIconTooltip description={tooltipDescription} icon={faQuestionCircle} />
                    )}
                </div>
            </div>
        </div>
    );
}