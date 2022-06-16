import * as React from "react";
import { IFormInputBaseWithValidation } from '../../../../models/IFormInput';
import { useFormContext } from 'react-hook-form';

export const PersonalIdentityInput: React.FunctionComponent<IFormInputBaseWithValidation> = ({ name, label, required, className, inlineLabel, disabled, placeholder, defaultValue, requiredValidationMessage }) => {

    const { errors, register } = useFormContext();

    return (
        <div className={className + " form-group " + (inlineLabel ? "row" : "")}>
            <label className={inlineLabel ? "col-4 col-form-label" : ""}>{label}:{required ? "*" : ""}</label>
            <div className={inlineLabel ? "col-8" : ""}>
                <input type="text"
                    name={name}
                    id={name}
                    className="form-control form-control-sm "
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    ref={register({ required: required, pattern: /^(19|20)?[0-9]{6}[-]?[0-9]{4}$/ })} 
                    disabled={disabled}/>
                <span className="text-danger">{errors ? [name] && (errors[name] as any)?.type === "required" &&
                    (requiredValidationMessage ? requiredValidationMessage : label + " måste anges") : ""}</span>
                <span className="text-danger">{errors ? [name] && (errors[name] as any)?.type === "pattern" && label + " i fel format" : ""}</span>
            </div>
        </div>
    )
}