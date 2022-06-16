import * as React from "react";

import { useFormContext } from 'react-hook-form';

import { InputSpinnerWrapper } from "../../../Spinner/InputSpinnerWrapper";

import { ClearableInput } from "../../../ClearableInput/ClearableInput";

export const Select = ({ name, label, required, className, inlineLabel, disabled, placeholder, options, requiredValidationMessage, selectedValue, onChange, isLoading, labelCol = 4, inputCol = 8, isClearable }) => {

    var _a, _b;

    const [currentSelectedValue, setCurrentSelectedValue] = React.useState(selectedValue);

    const readonlyValues = {

        errors: "",

        register: "",

        unregister: "",

        setValue: ""

    };

    const { errors, register, unregister, setValue } = (_a = useFormContext()) !== null && _a !== void 0 ? _a : readonlyValues;

    React.useEffect(() => {

        var _a;

        if (typeof unregister !== "string") {

            (_a = document.getElementById("clear-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", resetValue);

            return () => {

                var _a;

                unregister(name);

                (_a = document.getElementById("clear-form")) === null || _a === void 0 ? void 0 : _a.removeEventListener("click", resetValue);

            };

        }

    }, []);

    const resetValue = () => {

        if (typeof setValue !== "string") {

            setValue(name, undefined);

        }

    };

    React.useEffect(() => {

        setCurrentSelectedValue(selectedValue);

    }, [selectedValue]);

    const handleChange = (event) => {

        setCurrentSelectedValue(event.target.value);

        if (onChange !== undefined) {

            onChange(event.target.value);

        }

    };

    const clearValue = () => {

        setCurrentSelectedValue(undefined);

        if (onChange !== undefined) {

            onChange(undefined);

        }

    };

    const renderSelect = () => {

        return (React.createElement("select", { name: name, id: name, className: "form-control form-control-sm", disabled: disabled, ref: typeof register !== "string" ? register({ required: required }) : "", onChange: handleChange },

            React.createElement("option", { value: "", selected: currentSelectedValue ? false : true, disabled: true, hidden: true }, placeholder),

            options.map((option, index) => {

                return React.createElement("option", { value: option.value, key: index, selected: currentSelectedValue == option.value, disabled: option.disabled }, option.text);

            })));

    };

    return (React.createElement("div", { className: className + " form-group " + (inlineLabel ? "row" : "") },

        React.createElement("label", { className: inlineLabel ? `col-${labelCol} col-form-label` : "" },

            label,

            ":",

            required ? "*" : ""),

        React.createElement("div", { className: inlineLabel ? `col-${inputCol}` : "" },

            React.createElement(InputSpinnerWrapper, { isLoading: isLoading !== null && isLoading !== void 0 ? isLoading : false }, isClearable

                ?

                    React.createElement(ClearableInput, { onClear: clearValue, input: renderSelect() })

                : renderSelect()),

            React.createElement("span", { className: "text-danger" }, errors ? [name] && ((_b = errors[name]) === null || _b === void 0 ? void 0 : _b.type) === "required" &&

                (requiredValidationMessage ? requiredValidationMessage : label + " måste anges") : ""))));

};

