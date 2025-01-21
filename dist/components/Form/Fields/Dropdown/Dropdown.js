import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { useFormContext } from 'react-hook-form';
import Select, { createFilter } from 'react-select';
import "../../../../assets/styles/Dropdown.style.scss";
import { SelectStyles, MenuList } from "../../../MenuList/MenuList";
export const Dropdown = ({ items, defaultValue, labelCol, inputCol, name, isLoading, onValueChange, required, label, useFixedListItemHeight, disabled, isClearable, placeholder, resetValue, clearValueIfNoInitalValue, errorMessage, noOptionsMessage, getItemLabel }) => {
    var _a;
    const { register, setValue, formState: { errors }, unregister } = useFormContext();
    const [selectedValue, setSelectedValue] = React.useState();
    const [options, setOptions] = React.useState();
    var selectRef = React.useRef();
    React.useEffect(() => {
        var _a, _b;
        (_a = document.getElementById("clear-form")) === null || _a === void 0 ? void 0 : _a.removeEventListener("click", handleResetValue);
        if (!disabled && items && (isClearable || items.length > 1)) {
            (_b = document.getElementById("clear-form")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", handleResetValue);
        }
        return () => {
            var _a;
            (_a = document.getElementById("clear-form")) === null || _a === void 0 ? void 0 : _a.removeEventListener("click", handleResetValue);
        };
    }, [items]);
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
    React.useEffect(() => {
        register(name, { required: required });
        if (items) {
            const mappedOptions = items.map((item) => {
                var _a, _b;
                return {
                    value: (_a = item.id) === null || _a === void 0 ? void 0 : _a.toString(),
                    label: getItemLabel(item),
                    selected: defaultValue !== undefined && ((_b = item.id) === null || _b === void 0 ? void 0 : _b.toString()) === defaultValue
                };
            });
            const initalValue = mappedOptions.find((option) => { return option.selected === true; });
            if (initalValue) {
                setValue(name, initalValue.value);
                setSelectedValue(initalValue);
            }
            else {
                if (clearValueIfNoInitalValue) {
                    selectRef.current.select.clearValue();
                }
                setValue(name, undefined);
                setSelectedValue(undefined);
            }
            setOptions(mappedOptions);
        }
        return () => {
            unregister(name);
        };
    }, [items, defaultValue, required]);
    const onChange = (selectedOption) => {
        var _a;
        if (selectedOption) {
            setValue(name, selectedOption.value);
            setSelectedValue(selectedOption);
        }
        else {
            setValue(name, undefined);
            setSelectedValue(undefined);
        }
        if (onValueChange) {
            onValueChange((_a = selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.value) !== null && _a !== void 0 ? _a : "");
        }
    };
    const showErrorMessage = () => {
        if (errorMessage) {
            return errorMessage;
        }
        else {
            return "Please select an option";
        }
    };
    return (_jsxs("div", { className: "form-group row", children: [_jsxs("label", { className: `col-${labelCol !== null && labelCol !== void 0 ? labelCol : 4} col-form-label`, children: [label, ":", required ? "*" : ""] }), _jsxs("div", { className: `col-${inputCol !== null && inputCol !== void 0 ? inputCol : 8}`, children: [_jsx(Select, { ref: selectRef, isLoading: isLoading, loadingMessage: () => "Laddar...", noOptionsMessage: () => { return noOptionsMessage ? noOptionsMessage : "No options available"; }, placeholder: placeholder, filterOption: createFilter({
                            ignoreAccents: false,
                            matchFrom: 'any',
                            stringify: option => `${option.label}`
                        }), options: options, isOptionSelected: (option) => option.selected === true, value: selectedValue, onChange: (selectedOption) => onChange(selectedOption), components: useFixedListItemHeight ? { MenuList } : undefined, styles: useFixedListItemHeight ? SelectStyles : undefined, isDisabled: disabled === true || (disabled === undefined && defaultValue !== undefined && (options === null || options === void 0 ? void 0 : options.length) === 0), isClearable: isClearable !== undefined ? isClearable : true, classNamePrefix: "custom-dropdown-styling" }), _jsx("span", { className: "text-danger", children: ((_a = errors[name]) === null || _a === void 0 ? void 0 : _a.type) === "required" && showErrorMessage() })] })] }));
};
