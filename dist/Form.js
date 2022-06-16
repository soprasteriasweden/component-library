import * as React from "react";

import { FormContext, useForm } from "react-hook-form";

import { Checkbox } from "./Fields/Checkbox/Checkbox";

import { CheckboxList } from "./Fields/CheckboxList/CheckboxList";

import { CustomDatePicker } from "./Fields/DatePicker/CustomDatePicker";

import { DatePickerRange } from "./Fields/DatePicker/DatePickerRange";

import { EmailInput } from "./Fields/EmailInput/EmailInput";

import { FileUpload } from "./Fields/FileUpload/FileUpload";

import { NumberInput } from "./Fields/NumberInput/NumberInput";

import { PersonalIdentityInput } from "./Fields/PersonalIdentityInput/PersonalIdentityInput";

import { Select } from "./Fields/Select/Select";

import { Textarea } from "./Fields/Textarea/Textarea";

import { TextInput } from "./Fields/TextInput/TextInput";

import { LinkArray } from "./Fields/LinkArray/LinkArray";

import { HiddenInput } from "./Fields/HiddenInput/HiddenInput";

import { RadioButton } from "./Fields/RadioButton/RadioButton";

import { CustomSubmitButton, CustomSubmitButtonType } from "./CustomSubmitButton";

import { ClearFormButton } from "./ClearFormButton";

import { FormLink } from "./Fields/FormLink/FormLink";

const Form = ({ onSubmit, children }) => {

    const methods = useForm({});

    return (React.createElement(FormContext, Object.assign({}, methods),

        React.createElement("form", { onSubmit: onSubmit ? methods.handleSubmit(onSubmit) : undefined }, children)));

};

export { Form, Checkbox, CheckboxList, CustomDatePicker, DatePickerRange, EmailInput, FileUpload, NumberInput, PersonalIdentityInput, Select, Textarea, TextInput, LinkArray, HiddenInput, CustomSubmitButton, ClearFormButton, CustomSubmitButtonType, RadioButton, FormLink };

