import * as React from "react";
import { ITextInput } from '../../../../models/IFormInput';
import { useFormContext } from 'react-hook-form';

export const TextInput: React.FunctionComponent<ITextInput> = ({ label, name, className, disabled, inlineLabel, required, placeholder, defaultValue, requiredValidationMessage, readonly, minLength, maxLength, pattern, patternValidationMessage, labelCol = 4, inputCol = 8 }) => {

    const readonlyValues = {
        errors: "",
        register: "",
        setValue: ""
    }

    const { errors, register, setValue } = useFormContext() ?? readonlyValues;

    React.useEffect(() => {
        if (typeof setValue !== "string") {
            document.getElementById("clear-form")?.addEventListener("click", resetValue);

            return () => {
                document.getElementById("clear-form")?.removeEventListener("click", resetValue);
            }
        }
    }, [])

    const resetValue = () => {
        if (typeof setValue !== "string") {
            setValue(name, undefined);
        }
    }

    return (
        <div className={className + " form-group " + (inlineLabel ? "row" : "")}>
            <label htmlFor={name} className={inlineLabel ? `col-${labelCol} col-form-label` : ""}>{label}:{required && (readonly === false || readonly === undefined) ? "*" : ""}</label>
            <div className={inlineLabel ? `col-${inputCol}` : ""}>
                {
                    readonly
                        ?
                        <p id={name} className="form-control-plaintext">{defaultValue}</p>
                        :
                        <input type="text"
                            name={name}
                            id={name}
                            className="form-control form-control-sm"
                            ref={typeof register !== "string" ? register({ required: required, pattern: pattern, validate: required ? (value) => { return !!value.trim() } : undefined }) : ""}
                            placeholder={placeholder}
                            defaultValue={defaultValue}
                            disabled={disabled}
                            minLength={minLength}
                            maxLength={maxLength}
                        />
                }
                <span className="text-danger">{errors ? [name] && ((errors[name] as any)?.type === "required" || (errors[name] as any)?.type === "validate") &&
                    (requiredValidationMessage ? requiredValidationMessage : label + " måste anges") : ""}</span>
                <span className="text-danger">{errors ? [name] && (errors[name] as any)?.type === "pattern" &&
                    (patternValidationMessage ? patternValidationMessage : label + " i fel format") : ""}</span>
            </div>
        </div>
    )
}