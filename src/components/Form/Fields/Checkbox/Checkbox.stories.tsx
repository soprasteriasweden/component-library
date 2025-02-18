import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { useForm } from "react-hook-form";

import { Checkbox } from "./Checkbox";
import { Form } from "../../../Form/Form";
import { ICheckbox } from "../../../../models/IFormInput";
import { CustomSubmitButton } from "../../CustomSubmitButton";

export default {
    title: "Form/Fields/Checkbox",
    component: Checkbox,
    argTypes: {
        label: { control: "text" },
        disabled: { control: "boolean" },
        checked: { control: "boolean" },
        required: { control: "boolean" },
        tooltipDescription: { control: "text" }
    }
} as Meta;

const Template: StoryFn<ICheckbox> = (args) => {
    const methods = useForm();

    const onSubmit = (data: any) => {
        console.log("Form Submitted:", data);
    };

    return (
        <Form {...methods} onSubmit={onSubmit}>
            <Checkbox {...args} />
            <CustomSubmitButton>Submit</CustomSubmitButton>
        </Form>
    );
};

// 🟢 Default Checkbox
export const Default = Template.bind({});
Default.args = {
    label: "Default Label",
    name: "default"
};

// 🟡 Disabled Checkbox
export const Disabled = Template.bind({});
Disabled.args = {
    label: "Disabled Checkbox",
    name: "disabled",
    disabled: true
};

// 🔵 Checkbox with Tooltip
export const WithTooltip = Template.bind({});
WithTooltip.args = {
    label: "Checkbox with Tooltip",
    name: "withTooltip",
    tooltipDescription: "This is a tooltip description."
};

// 🔴 Required Checkbox
export const Required = Template.bind({});
Required.args = {
    label: "Required Checkbox",
    name: "requiredCheckbox",
    required: true,
    requiredValidationMessage: "This field is required."
};

// 🟢 Checkbox Checked by Default
export const Checked = Template.bind({});
Checked.args = {
    label: "Checked by Default",
    name: "checked",
    checked: true
};

// 🔄 Checkbox with Custom Validation Message
export const CustomErrorMessage = Template.bind({});
CustomErrorMessage.args = {
    label: "Checkbox with Custom Error",
    name: "customError",
    required: true,
    requiredValidationMessage: "You must agree to continue."
};

// 🔄 Checkbox with Different Label Positions
export const LabelRight = Template.bind({});
LabelRight.args = {
    label: "Label on Right",
    name: "labelRight",
    className: "d-flex flex-row-reverse align-items-center" // ✅ Moves label to the right
};
