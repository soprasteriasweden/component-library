import * as React from "react";

import './DatePicker.scss';

import './DatePickerRange.style.scss';

import { useFormContext } from 'react-hook-form';

import svSE from 'date-fns/locale/sv';

import DatePicker, { registerLocale } from 'react-datepicker';

registerLocale('sv-se', Object.assign(Object.assign({}, svSE), { options: Object.assign(Object.assign({}, svSE.options), { weekStartsOn: 1 }) }));

export const DatePickerRange = ({ name, nameSecondary, label, className, inlineLabel, disabled, requiredFrom, requiredTo, value, valueSecondary }) => {

    var _a, _b;

    const [fromDate, setFromDate] = React.useState(value);

    const [toDate, setToDate] = React.useState(valueSecondary);

    const { errors, register, setValue } = useFormContext();

    React.useEffect(() => {

        var _a;

        register({ name: name }, { required: requiredFrom });

        register({ name: nameSecondary }, { required: requiredTo });

        setValue(name, value === null || value === void 0 ? void 0 : value.toLocaleDateString("sv-se"));

        setValue(nameSecondary, valueSecondary === null || valueSecondary === void 0 ? void 0 : valueSecondary.toLocaleDateString("sv-se"));

        if (!disabled) {

            (_a = document.getElementById("clear-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", resetValue);

        }

        return () => {

            var _a;

            (_a = document.getElementById("clear-form")) === null || _a === void 0 ? void 0 : _a.removeEventListener("click", resetValue);

        };

    }, []);

    React.useEffect(() => {

        if (fromDate !== undefined) {

            setFromDate(value);

            setValue(name, value === null || value === void 0 ? void 0 : value.toLocaleDateString("sv-se"));

        }

    }, [value]);

    React.useEffect(() => {

        if (toDate !== undefined) {

            setToDate(valueSecondary);

            setValue(nameSecondary, valueSecondary === null || valueSecondary === void 0 ? void 0 : valueSecondary.toLocaleDateString("sv-se"));

        }

    }, [valueSecondary]);

    const resetValue = () => {

        setValue(name, undefined);

        setFromDate(undefined);

        setValue(nameSecondary, undefined);

        setToDate(undefined);

    };

    return (React.createElement("div", { className: className + " form-group " + (inlineLabel ? "row" : "") },

        React.createElement("label", { className: inlineLabel ? "col-4 col-form-label" : "" },

            label,

            ":",

            requiredFrom || requiredTo ? "*" : ""),

        React.createElement("div", { className: (inlineLabel ? "col-8" : "") },

            React.createElement("div", { className: "row date-picker-range__wrapper" },

                React.createElement("div", { className: "col" },

                    React.createElement(DatePicker, { name: name, id: name, selected: fromDate, onChange: date => {

                            setFromDate(date);

                            setValue(name, date === null || date === void 0 ? void 0 : date.toLocaleDateString("sv-se"));

                        }, dateFormat: "yyyy-MM-dd", className: "form-control form-control-sm " + (disabled ? "disabled " : ""), maxDate: toDate, autoComplete: "off", locale: "sv-se", showYearDropdown: true, showMonthDropdown: true, onChangeRaw: e => e.preventDefault(), isClearable: true }),

                    React.createElement("span", { className: "text-danger" }, errors ? [name] && ((_a = errors[name]) === null || _a === void 0 ? void 0 : _a.type) === "required" && "Välj ett datum" : "")),

                React.createElement("span", { className: "date-connector" }, "-"),

                React.createElement("div", { className: "col" },

                    React.createElement(DatePicker, { name: nameSecondary, id: nameSecondary, selected: toDate, onChange: date => {

                            setToDate(date);

                            setValue(nameSecondary, date === null || date === void 0 ? void 0 : date.toLocaleDateString("sv-se"));

                        }, dateFormat: "yyyy-MM-dd", className: "form-control form-control-sm " + (disabled ? "disabled " : ""), minDate: fromDate, autoComplete: "off", locale: "sv-se", showYearDropdown: true, showMonthDropdown: true, onChangeRaw: e => e.preventDefault(), isClearable: true }),

                    React.createElement("span", { className: "text-danger" }, errors ? [nameSecondary] && ((_b = errors[nameSecondary]) === null || _b === void 0 ? void 0 : _b.type) === "required" && "Välj ett datum" : ""))))));

};

