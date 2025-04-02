import * as React from "react";
import { ISelect } from '../../../../models/IFormInput';
import { useFormContext } from 'react-hook-form';
import { InputSpinnerWrapper } from "../../../Spinner/InputSpinnerWrapper";
import { ClearableInput } from "../../../ClearableInput/ClearableInput";
import { InputIconTooltip } from "../TooltipItem/InputIconTooltip";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { getNestedObjectValue } from "../../../../utils/utils";

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
    const { formState: { errors }, register, unregister, setValue } = useFormContext() ?? readonlyValues;

    React.useEffect(() => {
        if (typeof unregister !== "string") {
            document.getElementById("clear-form")?.addEventListener("click", resetValue);
            if (!disabled && options && (isClearable || options.length > 1)) {
                document.getElementById("clear-form")?.addEventListener("click", resetValue);
            }

            return () => {
                unregister(name);
                document.getElementById("clear-form")?.removeEventListener("click", resetValue);
            }
        }
    }, [options]);

    React.useEffect(() => {
        setCurrentSelectedValue(selectedValue ?? "");
    }, [selectedValue]);

    const resetValue = () => {
        if (typeof setValue !== "string") {
            setValue(name, ""); 
            setCurrentSelectedValue(""); 
        }
    };

    const clearValue = () => {
        if (typeof setValue !== "string") {
            setValue(name, ""); 
            setCurrentSelectedValue(""); 
        }
        if (onChange) {
            onChange(undefined!);
        }
    };

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setCurrentSelectedValue(event.target.value as string);
        if (onChange !== undefined) {
            onChange(event.target.value as string);
        }
    };

    const renderSelect = () => {
        return (
            <div className="input-group">
                <select
                    id={name}
                    className="form-control form-control-sm"
                    value={currentSelectedValue ? currentSelectedValue : ""}
                    disabled={disabled}
                    {...(typeof register !== "string" ? register(name, { required }) : {})}
                    onChange={handleChange}
                >
                    <option value={""} disabled hidden>{placeholder}</option>
                    {options.map((option, index) => (
                        <option value={option.value} key={index} disabled={option.disabled}>{option.text}</option>
                    ))}
                </select>
                {tooltipDescription ? (
                    <InputIconTooltip
                        description={tooltipDescription}
                        icon={faQuestionCircle}
                    />
                ) : null}
            </div>
        );
    };

    const errorType = getNestedObjectValue(errors, name)?.type;

    return (
        <div className={className + " form-group " + (inlineLabel ? "row" : "")}>
            <label className={inlineLabel ? `col-${labelCol} col-form-label` : ""}>{label}:{required ? "*" : ""}</label>
            <div className={inlineLabel ? `col-${inputCol}` : ""}>
                <InputSpinnerWrapper isLoading={isLoading ?? false}>
                    {
                        isClearable
                            ? <ClearableInput onClear={clearValue} input={renderSelect()} />
                            : renderSelect()
                    }
                </InputSpinnerWrapper>

                <span className="text-danger">{errorType === "required" && (requiredValidationMessage ? requiredValidationMessage : label + " måste anges")}</span>
            </div>
        </div>
    )
};
