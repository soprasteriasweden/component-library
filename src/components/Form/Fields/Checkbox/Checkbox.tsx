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
    onChange,
    withColumn
}) => {
    const readonlyValues = {
        formState: { errors: {} },
        register: "",
        watch: "",
        setValue: ""
    };

    const {
        formState: { errors },
        register,
        watch,
        setValue
    } = useFormContext() ?? readonlyValues;

    // Fall back to the field name so the label's htmlFor always points at the input
    const inputId = id ?? name;

    const isChecked = (typeof watch !== "string" ? watch(name) : undefined) ?? checked ?? false;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.checked;
        if (typeof setValue !== "string") {
            setValue(name, newValue);
        }
        if (onChange) {
            onChange(newValue);
        }
    };

    const errorType = getNestedObjectValue(errors, name)?.type;

    return (
        <div className={`form-group ${className}`}>
            <div className="form-check d-flex align-items-center gap-2 mb-0 ps-0">
                <label className="col-form-label p-0" htmlFor={inputId}>
                    {tooltipDescription ? (
                        <TooltipItem key={inputId} title={label} description={tooltipDescription} />
                    ) : (
                        <>
                            {label}{withColumn ? ":" : ""}
                        </>
                    )}
                </label>
                <input
                    type="checkbox"
                    className="form-check-input m-0 float-none"
                    id={inputId}
                    disabled={disabled}
                    value={value}
                    checked={isChecked}
                    {...(typeof register !== "string"
                        ? register(name, { required, onChange: handleChange })
                        : { name, onChange: handleChange })}
                />
                <span className="text-danger">
                    {errorType === "required" && (requiredValidationMessage || "Måste kryssas i")}
                </span>
            </div>
        </div>
    );
};
