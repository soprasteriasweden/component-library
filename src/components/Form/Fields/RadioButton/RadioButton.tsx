import * as React from "react";
import { ICheckbox } from '../../../../models/IFormInput';
import { useFormContext } from 'react-hook-form';
import "../../../../assets/styles/RadioButton.style.scss";

export const RadioButton: React.FunctionComponent<ICheckbox> = ({ required, inlineLabel, name, value, label, id }) => {

    const { register } = useFormContext();

    return (
        <div className={`custom-radio-button form-check ${inlineLabel ? "form-check-inline" : ""}`}>
            <input className="form-check-input" type="radio" name={name} ref={register({ required: required })} id={id} value={value} required={required} />
            <label className="form-check-label" htmlFor={id}>
                {label}
            </label>
        </div>
    )
}