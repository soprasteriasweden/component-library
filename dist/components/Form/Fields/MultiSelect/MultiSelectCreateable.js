var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import * as React from "react";
import { useFormContext } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import { createFilter } from "react-select";
import { SelectStyles } from "../../../MenuList/MenuList";
import { getNestedObjectValue } from "../../../../utils/utils";
export var MultiSelectCreatable = function (_a) {
    var _b;
    var values = _a.values, defaultValue = _a.defaultValue, labelCol = _a.labelCol, inputCol = _a.inputCol, name = _a.name, onValueChange = _a.onValueChange, onBeforeCreateItem = _a.onBeforeCreateItem, isLoading = _a.isLoading, isMultiple = _a.isMultiple, label = _a.label, required = _a.required, placeholder = _a.placeholder, disabled = _a.disabled, isClearable = _a.isClearable, resetValue = _a.resetValue, _c = _a.requiredMessage, requiredMessage = _c === void 0 ? "Välj/lägg till ett värde" : _c;
    var _d = useFormContext(), register = _d.register, unregister = _d.unregister, setValue = _d.setValue, errors = _d.errors;
    var _e = React.useState(), selectedValue = _e[0], setSelectedValue = _e[1];
    var _f = React.useState([]), options = _f[0], setOptions = _f[1];
    var _g = React.useState(null), errorMessage = _g[0], setErrorMessage = _g[1];
    var _h = React.useState(false), tryingToCreate = _h[0], setTryingToCreate = _h[1];
    var selectRef = React.useRef();
    React.useEffect(function () {
        setErrorMessage(null);
        register({ name: name }, { required: required });
        return function () {
            unregister(name);
            setTryingToCreate(false);
        };
    }, []);
    React.useEffect(function () {
        var _a, _b;
        var initialOptions = values.map(function (listItem) { return ({
            value: listItem.value,
            label: listItem.text,
        }); });
        setOptions(initialOptions);
        var initialValue = initialOptions.filter(function (option) {
            return Array.isArray(defaultValue) ? defaultValue.includes(option.value) : option.value === defaultValue;
        });
        setSelectedValue(isMultiple ? initialValue : initialValue[0] || null);
        if (!isMultiple && initialValue.length === 1) {
            setValue(name, initialValue[0].value);
        }
        else if (isMultiple) {
            setValue(name, initialValue.map(function (val) { return val.value; }));
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
            setValue(name, undefined);
            setSelectedValue(undefined);
        }
        setErrorMessage(null);
    };
    var onChange = function (selectedOption) {
        setErrorMessage(null);
        if (selectedOption) {
            if (isMultiple) {
                var values_1 = selectedOption.map(function (option) { return option.value; });
                setValue(name, values_1);
                setSelectedValue(selectedOption);
                onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(values_1);
            }
            else {
                setValue(name, selectedOption.value);
                setSelectedValue(selectedOption);
                onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(selectedOption.value);
            }
        }
        else {
            if (required) {
                setErrorMessage(requiredMessage);
            }
            setValue(name, isMultiple ? [] : undefined);
            setSelectedValue(undefined);
            onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(isMultiple ? [] : undefined);
        }
    };
    var handleCreate = function (inputValue) { return __awaiter(void 0, void 0, void 0, function () {
        var validationResult, newOption, newSelected;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setTryingToCreate(false);
                    if (!inputValue.trim())
                        return [2 /*return*/];
                    setTryingToCreate(true);
                    if (!onBeforeCreateItem) return [3 /*break*/, 2];
                    return [4 /*yield*/, onBeforeCreateItem(inputValue)];
                case 1:
                    validationResult = _a.sent();
                    if (validationResult) {
                        setErrorMessage(validationResult);
                        return [2 /*return*/];
                    }
                    _a.label = 2;
                case 2:
                    setErrorMessage(null);
                    newOption = { value: inputValue, label: inputValue };
                    setOptions(function (prev) { return __spreadArray(__spreadArray([], prev, true), [newOption], false); });
                    if (isMultiple) {
                        newSelected = Array.isArray(selectedValue) ? __spreadArray(__spreadArray([], selectedValue, true), [newOption], false) : [newOption];
                        setSelectedValue(newSelected);
                        setValue(name, newSelected.map(function (opt) { return opt.value; }));
                        onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(newSelected.map(function (opt) { return opt.value; }));
                    }
                    else {
                        setSelectedValue(newOption);
                        setValue(name, newOption.value);
                        onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(newOption.value);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var errorType = (_b = getNestedObjectValue(errors, name)) === null || _b === void 0 ? void 0 : _b.type;
    return (React.createElement("div", { className: "form-group row" },
        React.createElement("label", { className: "col-".concat(labelCol !== null && labelCol !== void 0 ? labelCol : 4, " col-form-label") },
            label,
            ":",
            required ? "*" : ""),
        React.createElement("div", { className: "col-".concat(inputCol !== null && inputCol !== void 0 ? inputCol : 8) },
            React.createElement(CreatableSelect, { ref: selectRef, placeholder: placeholder, filterOption: createFilter({
                    ignoreAccents: false,
                    matchFrom: "any",
                    stringify: function (option) { return "".concat(option.label); },
                }), styles: SelectStyles, options: options, value: selectedValue, onChange: onChange, onCreateOption: handleCreate, isLoading: isLoading, loadingMessage: function () { return "Laddar"; }, isMulti: isMultiple, isDisabled: disabled, formatCreateLabel: function (inputValue) { return "L\u00E4gg till \"".concat(inputValue, "\""); } }),
            !tryingToCreate && errorType === "required" && React.createElement("span", { className: "text-danger" }, requiredMessage),
            errorMessage && React.createElement("span", { className: "text-danger" }, errorMessage))));
};
