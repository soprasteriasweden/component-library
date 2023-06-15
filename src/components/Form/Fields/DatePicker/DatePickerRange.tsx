import * as React from "react";
import '../../../../assets/styles/DatePicker.scss';
import '../../../../assets/styles/DatePickerRange.style.scss'
import { IDatePickerRange } from '../../../../models/IFormInput';
import { useFormContext } from 'react-hook-form';
import svSE from 'date-fns/locale/sv';
import DatePicker, { registerLocale } from 'react-datepicker';
registerLocale('sv-se', { ...svSE, options: { ...svSE.options, weekStartsOn: 1 } });

export const DatePickerRange: React.FunctionComponent<IDatePickerRange> = ({ name, nameSecondary, label, className, inlineLabel, disabled, requiredFrom, requiredTo, value, valueSecondary }) => {

    const [fromDate, setFromDate] = React.useState<Date | undefined | null>(value);
    const [toDate, setToDate] = React.useState<Date | undefined | null>(valueSecondary);
    const { errors, register, setValue } = useFormContext();

    React.useEffect(() => {
        register({ name: name }, { required: requiredFrom });
        register({ name: nameSecondary }, { required: requiredTo });
        setValue(name, value?.toLocaleDateString("sv-se"));
        setValue(nameSecondary, valueSecondary?.toLocaleDateString("sv-se"));
        if (!disabled) {
            document.getElementById("clear-form")?.addEventListener("click", resetValue);
        }

        return () => {
            document.getElementById("clear-form")?.removeEventListener("click", resetValue);
        }
    }, []);


    React.useEffect(() => {
        if (fromDate !== undefined) {
            setFromDate(value);
            setValue(name, value?.toLocaleDateString("sv-se"));
        }
    }, [value])

    React.useEffect(() => {
        if (toDate !== undefined) {
            setToDate(valueSecondary);
            setValue(nameSecondary, valueSecondary?.toLocaleDateString("sv-se"));
        }
    }, [valueSecondary])

    const resetValue = () => {
        setValue(name, undefined);
        setFromDate(undefined);
        setValue(nameSecondary, undefined);
        setToDate(undefined);
    }

    return (
        <div className={className + " form-group " + (inlineLabel ? "row" : "")}>
            <label className={inlineLabel ? "col-4 col-form-label" : ""}>{label}:{requiredFrom || requiredTo ? "*" : ""}</label>

            <div className={(inlineLabel ? "col-8" : "")}>
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
                            className={"form-control form-control-sm " + (disabled ? "disabled " : "")}
                            maxDate={toDate}
                            autoComplete="off"
                            locale="sv-se"
                            showYearDropdown
                            showMonthDropdown
                            onChangeRaw={e => e.preventDefault()}
                            isClearable
                        />
                        <span className="text-danger">{errors ? [name] && (errors[name] as any)?.type === "required" && "Välj ett datum" : ""}</span>
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
                            className={"form-control form-control-sm " + (disabled ? "disabled " : "")}
                            minDate={fromDate}
                            autoComplete="off"
                            locale="sv-se"
                            showYearDropdown
                            showMonthDropdown
                            onChangeRaw={e => e.preventDefault()}
                            isClearable
                        />
                        <span className="text-danger">{errors ? [nameSecondary] && (errors[nameSecondary] as any)?.type === "required" && "Välj ett datum" : ""}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
