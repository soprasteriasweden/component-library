import * as React from "react";
import { ISelect } from '../../../../models/IFormInput';
import { useFormContext, FieldErrors } from 'react-hook-form';
import { InputSpinnerWrapper } from "../../../Spinner/InputSpinnerWrapper";
import { ClearableInput } from "../../../ClearableInput/ClearableInput";
import { InputIconTooltip } from "../TooltipItem/InputIconTooltip";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

type FormValues = {
    [key: string]: any;
};

export const Select: React.FunctionComponent<ISelect> = ({
    name,
    label,
    required,
    className,
    inlineLabel,
    disabled,
    placeholder,
    options,
    requiredValidationMessage,
    selectedValue,
    onChange,
    isLoading,
    tooltipDescription,
    labelCol = 4,
    inputCol = 8,
    isClearable
}) => {
    const { errors, register, unregister, setValue, watch } = useFormContext<FormValues>();

    const currentSelectedValue = watch(name, selectedValue);

    React.useEffect(() => {
        register(name, { required });
        document.getElementById("clear-form")?.addEventListener("click", resetValue);

        return () => {
            unregister(name);
            document.getElementById("clear-form")?.removeEventListener("click", resetValue);
        };
    }, [register, unregister, name, required]);

    const resetValue = () => {
        setValue(name, undefined, true);
    };

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value as string;
        setValue(name, value, true);
        if (onChange) {
            onChange(value);
        }
    };

    const clearValue = () => {
        setValue(name, undefined, true);
        if (onChange) {
            onChange(undefined!);
        }
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

    const renderSelect = () => {
        return (
            <div className="input-group">
                <select
                    name={name}
                    id={name}
                    className="form-control form-control-sm"
                    disabled={disabled}
                    ref={register}
                    onChange={handleChange}
                    value={currentSelectedValue || ""}
                >
                    <option value="" disabled hidden>{placeholder}</option>
                    {options.map((option, index) => (
                        <option
                            value={option.value}
                            key={index}
                            disabled={option.disabled}
                        >
                            {option.text}
                        </option>
                    ))}
                </select>
                {tooltipDescription && <InputIconTooltip description={tooltipDescription} icon={faQuestionCircle} />}
            </div>
        );
    };

    return (
        <div className={className + " form-group " + (inlineLabel ? "row" : "")}>
            <label className={inlineLabel ? `col-${labelCol} col-form-label` : ""}>{label}:{required ? "*" : ""}</label>
            <div className={inlineLabel ? `col-${inputCol}` : ""}>
                <InputSpinnerWrapper isLoading={isLoading ?? false}>
                    {isClearable
                        ? <ClearableInput onClear={clearValue} input={renderSelect()} />
                        : renderSelect()}
                </InputSpinnerWrapper>
                <span className="text-danger">{getErrorMessage()}</span>
            </div>
        </div>
    );
};
