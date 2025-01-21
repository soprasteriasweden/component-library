import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { useFormContext } from 'react-hook-form';
import Select, { createFilter } from 'react-select';
import { SelectStyles } from "../../../MenuList/MenuList";
import { getNestedObjectValue } from "../../../../utils/utils";
export const MultiSelect = ({ values, defaultValue, labelCol, inputCol, name, onValueChange, isLoading, isMultiple, label, required, placeholder, disabled, isClearable, resetValue }) => {
    var _a;
    const { register, unregister, setValue, formState: { errors } } = useFormContext();
    const [selectedValue, setSelectedValue] = React.useState();
    const [options, setOptions] = React.useState([]);
    var selectRef = React.useRef();
    React.useEffect(() => {
        register(name, { required: required });
        return () => {
            unregister(name);
        };
    }, []);
    React.useEffect(() => {
        var _a, _b;
        const options = values.map((listItem) => {
            return {
                value: listItem.value,
                label: listItem.text,
                selected: typeof defaultValue === "string" || typeof defaultValue === "undefined"
                    ? listItem.value == defaultValue
                    : defaultValue.indexOf(listItem.value) != -1
            };
        });
        setOptions(options);
        const initalValue = options.filter((option) => option.selected);
        setSelectedValue(initalValue);
        if (!isMultiple && initalValue.length === 1) {
            setValue(name, initalValue[0].value);
        }
        else if (isMultiple) {
            setValue(name, initalValue.map((val) => val.value));
        }
        (_a = document.getElementById("clear-form")) === null || _a === void 0 ? void 0 : _a.removeEventListener("click", handleResetValue);
        if (!disabled && values && (isClearable || values.length > 1)) {
            (_b = document.getElementById("clear-form")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", handleResetValue);
        }
        return () => {
            var _a;
            (_a = document.getElementById("clear-form")) === null || _a === void 0 ? void 0 : _a.removeEventListener("click", handleResetValue);
        };
    }, [values, defaultValue]);
    React.useEffect(() => {
        handleResetValue();
    }, [resetValue]);
    const handleResetValue = () => {
        if (selectRef === null || selectRef === void 0 ? void 0 : selectRef.current) {
            selectRef.current.select.clearValue();
            setValue(name, undefined);
            setSelectedValue(undefined);
        }
    };
    const onChange = (selectedOption) => {
        if (selectedOption) {
            if (isMultiple) {
                var values = selectedOption.map((option) => { return option.value; });
                setValue(name, values);
                setSelectedValue(selectedOption);
                if (onValueChange) {
                    onValueChange(values);
                }
            }
            else {
                setValue(name, selectedOption.value);
                setSelectedValue(selectedOption);
                if (onValueChange) {
                    onValueChange(selectedOption.value);
                }
            }
        }
        else {
            setValue(name, isMultiple ? undefined : undefined);
            setSelectedValue(isMultiple ? undefined : undefined);
            if (onValueChange) {
                onValueChange(isMultiple ? undefined : undefined);
            }
        }
    };
    const errorType = (_a = getNestedObjectValue(errors, name)) === null || _a === void 0 ? void 0 : _a.type;
    return (_jsxs("div", { className: "form-group row", children: [_jsxs("label", { className: `col-${labelCol !== null && labelCol !== void 0 ? labelCol : 4} col-form-label`, children: [label, ":", required ? "*" : ""] }), _jsxs("div", { className: `col-${inputCol !== null && inputCol !== void 0 ? inputCol : 8}`, children: [_jsx(Select, { ref: selectRef, placeholder: placeholder, filterOption: createFilter({
                            ignoreAccents: false,
                            matchFrom: 'any',
                            stringify: (option) => `${option.label}`
                        }), styles: SelectStyles, options: options, value: selectedValue, onChange: (selectedOption) => onChange(selectedOption), isLoading: isLoading, loadingMessage: () => "Laddar", isMulti: isMultiple, isDisabled: disabled === true }), _jsx("span", { className: "text-danger", children: errorType === "required" && "Välj minst ett värde" })] })] }));
};
