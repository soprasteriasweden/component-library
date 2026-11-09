import * as React from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { ICheckboxList, ICheckbox } from "../../../../models/IFormInput";
import "../../../../assets/styles/CheckboxList.style.scss";

export const CheckboxList: React.FunctionComponent<ICheckboxList> = ({
    initialCheckboxes,
    toggleAll,
    toggleAllLabel = "Välj alla",
    name,
    inputCol = 8,
    labelCol = 4,
}) => {
    const { setValue } = useFormContext();

    const initiallyCheckedValues = initialCheckboxes.filter((cb: ICheckbox) => cb.checked).map((cb: ICheckbox) => cb.value);
    const initiallyCheckedValuesKey = initiallyCheckedValues.join(",");

    let selectedValues: string[] = useWatch({ name, defaultValue: initiallyCheckedValues }) || [];
    if (!Array.isArray(selectedValues)) {
        selectedValues = [];
    }

    React.useEffect(() => {
        if (initiallyCheckedValues.length > 0) {
            setValue(name, initiallyCheckedValues);
        }
    }, [name, initiallyCheckedValuesKey]);

    const toggleSingleCheckbox = (checkboxValue: string) => {
        const isAlreadyChecked = selectedValues.includes(checkboxValue);
        const updatedValues = isAlreadyChecked
            ? selectedValues.filter(val => val !== checkboxValue)
            : [...selectedValues, checkboxValue];

        setValue(name, updatedValues);
    };

    const toggleAllCheckboxes = () => {
        if (selectedValues.length === initialCheckboxes.length) {
            setValue(name, []);
        } else {
            const allValues = initialCheckboxes.map((cb: ICheckbox) => cb.value);
            setValue(name, allValues);
        }
    };

    return (
        <fieldset className="checkbox-list">
            {toggleAll && (
                <>
                    <legend className="visually-hidden">{toggleAllLabel}</legend>
                    <div className="form-group row align-items-center checkbox-item mb-1">
                        <label
                            className={`col-${labelCol} col-form-label fw-semibold`}
                            htmlFor={`${name}-toggleAll`}
                        >
                            {toggleAllLabel}
                        </label>
                        <div className={`col-${inputCol} d-flex align-items-center`}>
                            <input
                                type="checkbox"
                                className="form-check-input m-0"
                                id={`${name}-toggleAll`}
                                checked={selectedValues.length === initialCheckboxes.length}
                                onChange={toggleAllCheckboxes}
                            />
                        </div>
                    </div>
                </>
            )}

            {initialCheckboxes.map((checkbox: ICheckbox) => {
                const isChecked = selectedValues.includes(checkbox.value);

                return (
                    <div
                        className="form-group row align-items-center checkbox-item"
                        key={checkbox.id}
                    >
                        <label
                            className={`col-${labelCol} col-form-label ${toggleAll ? "ps-4" : ""}`}
                            htmlFor={`${name}-${checkbox.id}`}
                        >
                            {checkbox.label}
                        </label>
                        <div className={`col-${inputCol} d-flex align-items-center`}>
                            <input
                                type="checkbox"
                                className="form-check-input m-0"
                                id={`${name}-${checkbox.id}`}
                                checked={isChecked}
                                onChange={() => toggleSingleCheckbox(checkbox.value)}
                            />
                        </div>
                    </div>
                );
            })}
        </fieldset>
    );
};
