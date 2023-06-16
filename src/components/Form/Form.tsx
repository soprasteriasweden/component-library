import * as React from "react";
import { FormContext, useForm } from "react-hook-form"
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
import { TooltipItem } from "./Fields/TooltipItem/TooltipItem";
import { MultiSelect } from "./Fields/MultiSelect/MultiSelect";
import { UnorderedList } from "./Fields/UnorderedList/UnorderedList";

interface IForm {
    onSubmit?: (data: any, e?: React.BaseSyntheticEvent<object, any, any>) => any;
    children: React.ReactNodeArray | React.ReactNode;
}

const Form: React.FunctionComponent<IForm> = ({ onSubmit, children }) => {

    const methods = useForm({});

    return (
        <FormContext {...methods}>
            <form onSubmit={onSubmit ? methods.handleSubmit(onSubmit) : undefined}>
                {children}
            </form>
        </FormContext>
    )
}


export {
    Form,
    Checkbox,
    CheckboxList,
    CustomDatePicker,
    DatePickerRange,
    EmailInput,
    FileUpload,
    NumberInput,
    PersonalIdentityInput,
    Select,
    Textarea,
    TextInput,
    LinkArray,
    HiddenInput,
    CustomSubmitButton,
    ClearFormButton,
    CustomSubmitButtonType,
    RadioButton,
    FormLink,
    TooltipItem,
    MultiSelect,
    UnorderedList
}