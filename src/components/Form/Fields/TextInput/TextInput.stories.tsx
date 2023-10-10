import React from 'react';
import { Meta, Story } from '@storybook/react';
import { useForm, FormContext } from 'react-hook-form';

import { TextInput } from './TextInput';
import { ITextInput } from '../../../../models/IFormInput';
import { CustomSubmitButton, Form } from '../../Form';

// Extend ITextInput to include formMethods for Storybook.
interface StorybookITextInput extends ITextInput {
    formMethods: any; // Replace 'any' with the actual type if you know it
}

export default {
    title: 'Form/Fields/TextInput',
    component: TextInput,
} as Meta;

const Template: Story<StorybookITextInput> = (args) => {
    const methods = useForm();

    const onSubmit = (data: any) => {
        console.log('Form Submitted:', data);
    };

    return (
        <Form {...methods} onSubmit={onSubmit}>
            <TextInput {...args} />
            <CustomSubmitButton>Test</CustomSubmitButton>
        </Form>
    );
};

export const Default = Template.bind({});
Default.args = {
    name: "default",
    label: 'Default Label',
    inlineLabel: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
    name: 'disabled',
    label: 'Disabled Label',
    inlineLabel: true,
    disabled: true,
};

export const Readonly = Template.bind({});
Readonly.args = {
    label: 'Readonly Label',
    name: 'readonly',
    inlineLabel: true,
    defaultValue: "Readonly",
    readonly: true,
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
    label: 'With Placeholder',
    name: 'withPlaceholder',
    inlineLabel: true,
    placeholder: 'Type here...',
};

export const RequiredField = Template.bind({});
RequiredField.args = {
    label: 'Required Field',
    name: 'required',
    inlineLabel: true,
    required: true
};
