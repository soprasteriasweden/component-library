import * as React from "react";
import { useFormContext } from "react-hook-form";
import { ITextarea } from '../../../../models/IFormInput';

export const Textarea: React.FunctionComponent<ITextarea> = ({ name, label, required, className, inlineLabel, disabled, placeholder, rows, defaultValue, requiredValidationMessage, maxLength, minLength, labelCol = 4, inputCol = 8, readonly, onChange }) => {

    const readonlyValues = {
        errors: "",
        register: "",
        setValue: ""
    }

    const { errors, register, setValue } = useFormContext() ?? readonlyValues;
    const [displayValue, setDisplayValue] = React.useState<string>();

    React.useEffect(() => {
        if (defaultValue) {
            if (typeof setValue !== "string") {
                setValue(name, defaultValue);
            }
            setDisplayValue(defaultValue);
        }
    }, [defaultValue])

    const handleChange = (event: React.ChangeEvent<any>) => {
        if (typeof setValue !== "string") {
            setValue(name, event.target.value);
        }
        setDisplayValue(event.target.value);
        if (onChange) {
            onChange(event.target.value);
        }
    }

    return (
        <div className={className + " form-group " + (inlineLabel ? "row" : "")}>
            <label className={inlineLabel ? `col-${labelCol} col-form-label` : ""}>{label}:{required && (readonly === false || readonly === undefined) ? "*" : ""}</label>
            <div className={inlineLabel ? `col-${inputCol}` : ""}>
                {
                    readonly
                        ?
                        <div id={name} className="form-control-plaintext" style={{ whiteSpace: "pre-line" }} >
                            {defaultValue}
                        </div>
                        :
                        <textarea name={name}
                            id={name}
                            rows={rows}
                            className="form-control form-control-sm "
                            placeholder={placeholder}
                            onChange={handleChange}
                            ref={typeof register !== "string" ? register({ required: required, validate: required ? (value) => { return !!value.trim() } : undefined }) : ""}
                            disabled={disabled}
                            maxLength={maxLength}
                            minLength={minLength}
                        >
                            {displayValue}
                        </textarea>
                }
                <span className="text-danger">{errors ? [name] && ((errors[name] as any)?.type === "required" || (errors[name] as any)?.type === "validate") && (requiredValidationMessage ? requiredValidationMessage : label + " måste anges") : ""}</span>
            </div>
        </div>
    )
}