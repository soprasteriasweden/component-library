import * as React from "react";
import { ISelect } from '../../../../models/IFormInput';
import { useFormContext } from 'react-hook-form';
import { InputSpinnerWrapper } from "../../../Spinner/InputSpinnerWrapper";
import { ClearableInput } from "../../../ClearableInput/ClearableInput";

export const Select: React.FunctionComponent<ISelect> = ({ name, label, required, className, inlineLabel, disabled, placeholder, options, requiredValidationMessage, selectedValue, onChange, isLoading, labelCol = 4, inputCol = 8, isClearable }) => {

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
    }, [])

    const resetValue = () => {
        if (typeof setValue !== "string") {
            setValue(name, undefined);
        }
    }

    React.useEffect(() => {
        setCurrentSelectedValue(selectedValue);
    }, [selectedValue]);

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setCurrentSelectedValue(event.target.value as string);
        if (onChange !== undefined) {
            onChange(event.target.value as string);
        }
    };

    const clearValue = () => {
        setCurrentSelectedValue(undefined);
        if (onChange !== undefined) {
            onChange(undefined);
        }
    }

    const renderSelect = () => {
        return (
            <select name={name}
                id={name}
                className="form-control form-control-sm"
                disabled={disabled}
                ref={typeof register !== "string" ? register({ required: required }) : ""}
                onChange={handleChange}
            >
                <option value="" selected={currentSelectedValue ? false : true} disabled hidden>{placeholder}</option>
                {
                    options.map((option, index) => {
                        return <option value={option.value}
                            key={index}
                            selected={currentSelectedValue == option.value}
                            disabled={option.disabled}
                        >{option.text}</option>
                    })
                }
            </select>
        )
    }

    return (
        <div className={className + " form-group " + (inlineLabel ? "row" : "")}>
            <label className={inlineLabel ? `col-${labelCol} col-form-label` : ""}>{label}:{required ? "*" : ""}</label>
            <div className={inlineLabel ? `col-${inputCol}` : ""}>
                <InputSpinnerWrapper isLoading={isLoading ?? false} >
                    {
                        isClearable
                            ?
                            <ClearableInput onClear={clearValue} input={renderSelect()} />
                            : renderSelect()
                    }
                </InputSpinnerWrapper>
                <span className="text-danger">{errors ? [name] && (errors[name] as any)?.type === "required" &&
                    (requiredValidationMessage ? requiredValidationMessage : label + " måste anges") : ""}</span>
            </div>
        </div>
    )
}