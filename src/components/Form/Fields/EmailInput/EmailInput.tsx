import * as React from "react";
import { IEmailInput } from '../../../../models/IFormInput';
import { useFormContext } from 'react-hook-form';

export const EmailInput: React.FunctionComponent<IEmailInput> = ({ name, label, required, className, inlineLabel, disabled, placeholder, defaultValue, requiredValidationMessage, labelCol = 4, inputCol = 8 }) => {

    const { errors, register } = useFormContext();

    return (
        <div className={className + " form-group " + (inlineLabel ? "row" : "")}>
            <label className={inlineLabel ? `col-${labelCol} col-form-label` : ""}>{label}:{required ? "*" : ""}</label>
            <div className={inlineLabel ? `col-${inputCol}` : ""}>
                <input type="email"
                    name={name}
                    id={name}
                    className="form-control form-control-sm"
                    ref={register({ required: required })}
                    placeholder={placeholder} 
                    defaultValue={defaultValue} 
                    disabled={disabled}/>
                <span className="text-danger">{errors ? [name] && (errors[name] as any)?.type === "required" &&
                 (requiredValidationMessage ? requiredValidationMessage : label + " måste anges") : ""}</span>
            </div >
        </div>
    )
}