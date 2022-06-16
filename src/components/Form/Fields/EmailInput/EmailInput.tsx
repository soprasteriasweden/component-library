import * as React from "react";
import { IFormInputBaseWithValidation } from '../../../../models/IFormInput';
import { useFormContext } from 'react-hook-form';

export const EmailInput: React.FunctionComponent<IFormInputBaseWithValidation> = ({ name, label, required, className, inlineLabel, disabled, placeholder, defaultValue, requiredValidationMessage }) => {

    const { errors, register } = useFormContext();

    return (
        <div className={className + " form-group " + (inlineLabel ? "row" : "")}>
            <label className={inlineLabel ? "col-4 col-form-label" : ""}>{label}:{required ? "*" : ""}</label>
            <div className={inlineLabel ? "col-8" : ""}>
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