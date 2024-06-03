import * as React from "react";
import { ISelect } from '../../../../models/IFormInput';
import { useFormContext, FieldErrors } from 'react-hook-form';
import { InputSpinnerWrapper } from "../../../Spinner/InputSpinnerWrapper";
import { ClearableInput } from "../../../ClearableInput/ClearableInput";
import { InputIconTooltip } from "../TooltipItem/InputIconTooltip";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

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
    const [currentSelectedValue, setCurrentSelectedValue] = React.useState<string | undefined>(selectedValue);
    const readonlyValues = {
        errors: "",
        register: "",
        unregister: "",
        setValue: ""
    }
    const { errors, register, unregister, setValue } = useFormContext() ?? readonlyValues;

    React.useEffect(() => {
        if (typeof unregister !== "string") {
            document.getElementById("clear-form")?.addEventListener("click", resetValue);

            return () => {
                unregister(name);
                document.getElementById("clear-form")?.removeEventListener("click", resetValue);
            }
        }
    }, [unregister, name])

    const resetValue = () => {
        if (typeof setValue !== "string") {
            setValue(name, undefined);
            setCurrentSelectedValue(undefined);
        }
    }

    React.useEffect(() => {
        setCurrentSelectedValue(selectedValue);
    }, [selectedValue]);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCurrentSelectedValue(event.target.value as string);
        if (onChange !== undefined) {
            onChange(event.target.value as string);
        }
    };

    const clearValue = () => {
        setCurrentSelectedValue(undefined);
        if (onChange !== undefined) {
            onChange(undefined!);
        }
    }

    const renderSelect = () => {
        return (
            <div className="input-group">
                <select
                    name={name}
                    id={name}
                    className="form-control form-control-sm"
                    disabled={disabled}
                    ref={typeof register !== "string" ? register({ required }) : ""}
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
        )
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
