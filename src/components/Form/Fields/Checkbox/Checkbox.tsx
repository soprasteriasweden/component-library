import * as React from "react";
import { ICheckbox } from "../../../../models/IFormInput";
import { useFormContext } from "react-hook-form";
import "../../../../assets/styles/Checkbox.style.scss";
import { TooltipItem } from "../TooltipItem/TooltipItem";
import { getNestedObjectValue } from "../../../../utils/utils";

export const Checkbox: React.FunctionComponent<ICheckbox> = ({ 
    label, 
    name, 
    tooltipDescription, 
    className = "", 
    disabled, 
    required, 
    checked, 
    value, 
    requiredValidationMessage, 
    id, 
    labelCol = 4, 
    inputCol = 8, 
    onChange, 
    withColumn 
}) => {
    const readonlyValues = {
        formState: { errors: {} },
        register: "",
        watch: "",
        setValue: ""
    }

    const {
        formState: { errors },
        register,
        watch,
        setValue
    } = useFormContext() ?? readonlyValues;

    // ✅ Get the current checkbox state from react-hook-form
    const isChecked = (typeof watch !== "string" ? watch(name) : undefined) ?? checked ?? false;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.checked;
        if (typeof setValue !== "string") {
            setValue(name, newValue); // ✅ Update react-hook-form state
        }
        if (onChange) {
            onChange(newValue); // ✅ Call external `onChange` if provided
        }
    };

    const errorType = getNestedObjectValue(errors, name)?.type;

    return (
        <div className={`form-group ${className}`}>
            <div className="row">
                <label className={`col-md-${labelCol} col-form-label`} htmlFor={id}>
                    {tooltipDescription ? (
                        <TooltipItem key={id} title={label} description={tooltipDescription} />
                    ) : (
                        <>
                            {label} {withColumn ? ":" : ""}
                        </>
                    )}
                </label>
                <div className={`col-md-${inputCol}`}>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id={id}
                            disabled={disabled}
                            value={value}
                            checked={isChecked}  // ✅ Now syncs properly with react-hook-form
                            {...(typeof register !== "string"
                                ? register(name, { required, onChange: handleChange }) // ✅ Let react-hook-form handle `onChange`
                                : { name, onChange: handleChange })}
                        />
                        <span className="text-danger">
                            {errorType === "required" && (requiredValidationMessage || "Måste kryssas i")}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
