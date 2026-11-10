import * as React from "react";
import { useFormContext, useWatch } from "react-hook-form";
import "../../../../assets/styles/CheckboxList.style.scss";
export const CheckboxList = ({ initialCheckboxes, toggleAll, toggleAllLabel = "Välj alla", name, }) => {
    const { setValue } = useFormContext();
    const initiallyCheckedValues = initialCheckboxes.filter((cb) => cb.checked).map((cb) => cb.value);
    const initiallyCheckedValuesKey = initiallyCheckedValues.join(",");
    let selectedValues = useWatch({ name, defaultValue: initiallyCheckedValues }) || [];
    if (!Array.isArray(selectedValues)) {
        selectedValues = [];
    }
    React.useEffect(() => {
        if (initiallyCheckedValues.length > 0) {
            setValue(name, initiallyCheckedValues);
        }
    }, [name, initiallyCheckedValuesKey]);
    const toggleSingleCheckbox = (checkboxValue) => {
        const isAlreadyChecked = selectedValues.includes(checkboxValue);
        const updatedValues = isAlreadyChecked
            ? selectedValues.filter(val => val !== checkboxValue)
            : [...selectedValues, checkboxValue];
        setValue(name, updatedValues);
    };
    const toggleAllCheckboxes = () => {
        if (selectedValues.length === initialCheckboxes.length) {
            setValue(name, []);
        }
        else {
            const allValues = initialCheckboxes.map((cb) => cb.value);
            setValue(name, allValues);
        }
    };
    return (React.createElement("fieldset", { className: "checkbox-list" },
        toggleAll && (React.createElement(React.Fragment, null,
            React.createElement("legend", { className: "visually-hidden" }, toggleAllLabel),
            React.createElement("div", { className: "d-flex align-items-center gap-2 checkbox-item mb-1" },
                React.createElement("input", { type: "checkbox", className: "form-check-input m-0", id: `${name}-toggleAll`, checked: selectedValues.length === initialCheckboxes.length, onChange: toggleAllCheckboxes }),
                React.createElement("label", { className: "mb-0 fw-semibold", htmlFor: `${name}-toggleAll` }, toggleAllLabel)))),
        initialCheckboxes.map((checkbox) => {
            const isChecked = selectedValues.includes(checkbox.value);
            return (React.createElement("div", { className: `d-flex align-items-center gap-2 checkbox-item mb-1 ${toggleAll ? "ps-4" : ""}`, key: checkbox.id },
                React.createElement("input", { type: "checkbox", className: "form-check-input m-0", id: `${name}-${checkbox.id}`, checked: isChecked, onChange: () => toggleSingleCheckbox(checkbox.value) }),
                React.createElement("label", { className: "mb-0", htmlFor: `${name}-${checkbox.id}` }, checkbox.label)));
        })));
};
