import * as React from "react";
import { useFormContext } from 'react-hook-form';
import Select, { createFilter } from 'react-select';
import { SelectStyles } from "../../../MenuList/MenuList";
import { getNestedObjectValue } from "../../../../utils/utils";
export var MultiSelect = function (_a) {
    var _b;
    var values = _a.values, defaultValue = _a.defaultValue, labelCol = _a.labelCol, inputCol = _a.inputCol, name = _a.name, onValueChange = _a.onValueChange, isLoading = _a.isLoading, isMultiple = _a.isMultiple, label = _a.label, required = _a.required, placeholder = _a.placeholder, disabled = _a.disabled, isClearable = _a.isClearable, resetValue = _a.resetValue;
    var _c = useFormContext(), register = _c.register, unregister = _c.unregister, setValue = _c.setValue, errors = _c.errors;
    var _d = React.useState(), selectedValue = _d[0], setSelectedValue = _d[1];
    var _e = React.useState([]), options = _e[0], setOptions = _e[1];
    var selectRef = React.useRef();
    React.useEffect(function () {
        register({ name: name }, { required: required });
        return function () {
            unregister(name);
        };
    }, []);
    React.useEffect(function () {
        var _a, _b;
        var options = values.map(function (listItem) {
            return {
                value: listItem.value,
                label: listItem.text,
                selected: typeof defaultValue === "string" || typeof defaultValue === "undefined"
                    ? listItem.value == defaultValue
                    : defaultValue.indexOf(listItem.value) != -1
            };
        });
        setOptions(options);
        var initalValue = options.filter(function (option) { return option.selected; });
        setSelectedValue(initalValue);
        if (!isMultiple && initalValue.length === 1) {
            setValue(name, initalValue[0].value);
        }
        else if (isMultiple) {
            setValue(name, initalValue.map(function (val) { return val.value; }));
        }
        (_a = document.getElementById("clear-form")) === null || _a === void 0 ? void 0 : _a.removeEventListener("click", handleResetValue);
        if (!disabled && values && (isClearable || values.length > 1)) {
            (_b = document.getElementById("clear-form")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", handleResetValue);
        }
        return function () {
            var _a;
            (_a = document.getElementById("clear-form")) === null || _a === void 0 ? void 0 : _a.removeEventListener("click", handleResetValue);
        };
    }, [values, defaultValue]);
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
    var onChange = function (selectedOption) {
        if (selectedOption) {
            if (isMultiple) {
                var values = selectedOption.map(function (option) { return option.value; });
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
    var errorType = (_b = getNestedObjectValue(errors, name)) === null || _b === void 0 ? void 0 : _b.type;
    return (React.createElement("div", { className: "form-group row" },
        React.createElement("label", { className: "col-".concat(labelCol !== null && labelCol !== void 0 ? labelCol : 4, " col-form-label") },
            label,
            ":",
            required ? "*" : ""),
        React.createElement("div", { className: "col-".concat(inputCol !== null && inputCol !== void 0 ? inputCol : 8) },
            React.createElement(Select, { ref: selectRef, placeholder: placeholder, filterOption: createFilter({
                    ignoreAccents: false,
                    matchFrom: 'any',
                    stringify: function (option) { return "".concat(option.label); }
                }), styles: SelectStyles, options: options, value: selectedValue, onChange: function (selectedOption) { return onChange(selectedOption); }, isLoading: isLoading, loadingMessage: function () { return "Laddar"; }, isMulti: isMultiple, isDisabled: disabled === true }),
            React.createElement("span", { className: "text-danger" }, errorType === "required" && "Välj minst ett värde"))));
};
