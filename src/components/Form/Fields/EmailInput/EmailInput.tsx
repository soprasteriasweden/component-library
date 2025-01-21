import * as React from "react";
import { IEmailInput } from '../../../../models/IFormInput';
import { useFormContext } from 'react-hook-form';

export const EmailInput: React.FunctionComponent<IEmailInput> = ({ name, label, required, className, inlineLabel, disabled, placeholder, defaultValue, requiredValidationMessage, labelCol = 4, inputCol = 8 }) => {

    const { register, formState: { errors } } = useFormContext();

    return (
        <div className={className + " form-group " + (inlineLabel ? "row" : "")}>
            <label className={inlineLabel ? `col-${labelCol} col-form-label` : ""}>{label}:{required ? "*" : ""}</label>
            <div className={inlineLabel ? `col-${inputCol}` : ""}>
                <input type="email"
                    id={name}
                    className="form-control form-control-sm"
                    {...register(name, { required: required })}
                    placeholder={placeholder} 
                    defaultValue={defaultValue} 
                    disabled={disabled}/>
                <span className="text-danger">{errors[name] && (errors[name] as any)?.type === "required" &&
                 (requiredValidationMessage ? requiredValidationMessage : label + " måste anges")}</span>
            </div >
        </div>
    )
}