import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { useForm } from 'react-hook-form';

import { ITextarea } from '../../../../models/IFormInput';
import { Textarea } from './Textarea';
import { CustomSubmitButton, Form } from '../../Form';

export default {
    title: 'Form/Fields/Textarea',
    component: Textarea,
} as Meta;

const Template: StoryFn<ITextarea> = (args) => {
    const methods = useForm();

    const onSubmit = (data: any) => {
        console.log('Form Submitted:', data);
    };

    return (
        <Form {...methods} onSubmit={onSubmit}>
            <Textarea {...args} />
            <CustomSubmitButton>Submit</CustomSubmitButton>
        </Form>
    );
};

const StandaloneTemplate: StoryFn<ITextarea> = (args) => (
    <Textarea {...args} />
);

export const Default = Template.bind({});
Default.args = {
    name: 'default',
    label: 'Default Label',
    inlineLabel: true,
    rows: 4
};

export const Readonly = Template.bind({});
Readonly.args = {
    name: 'readonly',
    label: 'Readonly Label',
    inlineLabel: true,
    defaultValue: 'Readonly',
    readonly: true,
    rows: 4
};

export const ReadonlyWithoutForm = StandaloneTemplate.bind({});
ReadonlyWithoutForm.args = {
    name: 'readonlyWithoutForm',
    label: 'Readonly Without Form',
    inlineLabel: true,
    defaultValue: 'Readonly',
    readonly: true
};