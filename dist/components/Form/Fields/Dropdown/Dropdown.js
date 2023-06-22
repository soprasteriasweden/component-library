import * as React from "react";
import { useFormContext } from 'react-hook-form';
import Select, { createFilter } from 'react-select';
import "../../../../assets/styles/Dropdown.style.scss";
import { SelectStyles, MenuList } from "../../../MenuList/MenuList";
export var Dropdown = function (_a) {
    var _b;
    var items = _a.items, defaultValue = _a.defaultValue, labelCol = _a.labelCol, inputCol = _a.inputCol, name = _a.name, isLoading = _a.isLoading, onValueChange = _a.onValueChange, required = _a.required, label = _a.label, useFixedListItemHeight = _a.useFixedListItemHeight, disabled = _a.disabled, isClearable = _a.isClearable, placeholder = _a.placeholder, resetValue = _a.resetValue, clearValueIfNoInitalValue = _a.clearValueIfNoInitalValue, errorMessage = _a.errorMessage, noOptionsMessage = _a.noOptionsMessage, getItemLabel = _a.getItemLabel;
    var _c = useFormContext(), register = _c.register, setValue = _c.setValue, errors = _c.errors, unregister = _c.unregister;
    var _d = React.useState(), selectedValue = _d[0], setSelectedValue = _d[1];
    var _e = React.useState(), options = _e[0], setOptions = _e[1];
    var selectRef = React.useRef();
    React.useEffect(function () {
        var _a, _b;
        (_a = document.getElementById("clear-form")) === null || _a === void 0 ? void 0 : _a.removeEventListener("click", handleResetValue);
        if (!disabled && items && (isClearable || items.length > 1)) {
            (_b = document.getElementById("clear-form")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", handleResetValue);
        }
        return function () {
            var _a;
            (_a = document.getElementById("clear-form")) === null || _a === void 0 ? void 0 : _a.removeEventListener("click", handleResetValue);
        };
    }, [items]);
    React.useEffect(function () {
        handleResetValue();
    }, [resetValue]);
    var handleResetValue = function () {
        if (selectRef === null || selectRef === void 0 ? void 0 : selectRef.current) {
            selectRef.current.select.clearValue();
            setValue(name, undefined);
            setSelectedValue(undefined);
        }
    };
    React.useEffect(function () {
        register({ name: name }, { required: required });
        if (items) {
            var mappedOptions = items.map(function (item) {
                var _a, _b;
                return {
                    value: (_a = item.id) === null || _a === void 0 ? void 0 : _a.toString(),
                    label: getItemLabel(item),
                    selected: defaultValue !== undefined && ((_b = item.id) === null || _b === void 0 ? void 0 : _b.toString()) === defaultValue
                };
            });
            var initalValue = mappedOptions.find(function (option) { return option.selected === true; });
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
        return function () {
            unregister(name);
        };
    }, [items, defaultValue, required]);
    var onChange = function (selectedOption) {
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
    var showErrorMessage = function () {
        if (errorMessage) {
            return errorMessage;
        }
        else {
            return "Please select an option";
        }
    };
    return (React.createElement("div", { className: "form-group row" },
        React.createElement("label", { className: "col-".concat(labelCol !== null && labelCol !== void 0 ? labelCol : 4, " col-form-label") },
            label,
            ":",
            required ? "*" : ""),
        React.createElement("div", { className: "col-".concat(inputCol !== null && inputCol !== void 0 ? inputCol : 8) },
            React.createElement(Select, { ref: selectRef, isLoading: isLoading, loadingMessage: function () { return "Laddar..."; }, noOptionsMessage: function () { return noOptionsMessage ? noOptionsMessage : "No options available"; }, placeholder: placeholder, filterOption: createFilter({
                    ignoreAccents: false,
                    matchFrom: 'any',
                    stringify: function (option) { return "".concat(option.label); }
                }), options: options, isOptionSelected: function (option) { return option.selected === true; }, value: selectedValue, onChange: function (selectedOption) { return onChange(selectedOption); }, components: useFixedListItemHeight ? { MenuList: MenuList } : undefined, styles: useFixedListItemHeight ? SelectStyles : undefined, isDisabled: disabled === true || (disabled === undefined && defaultValue !== undefined && (options === null || options === void 0 ? void 0 : options.length) === 0), isClearable: isClearable !== undefined ? isClearable : true, classNamePrefix: "custom-dropdown-styling" }),
            React.createElement("span", { className: "text-danger" }, errors ? [name] && ((_b = errors[name]) === null || _b === void 0 ? void 0 : _b.type) === "required" && showErrorMessage() : ""))));
};
