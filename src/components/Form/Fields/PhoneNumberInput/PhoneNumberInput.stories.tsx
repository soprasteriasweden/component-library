import React from 'react';
import { Meta, Story } from '@storybook/react';
import { useForm } from 'react-hook-form';

import { PhoneNumberInput } from './PhoneNumberInput';
import { Form } from '../../../Form/Form';
import { IPhoneNumberInput } from '../../../../models/IFormInput';
import { CustomSubmitButton } from '../../CustomSubmitButton'

export default {
    title: 'Form/Fields/PhoneNumberInput',
    component: PhoneNumberInput,
} as Meta;

const Template: Story<IPhoneNumberInput> = (args) => {
    const methods = useForm();

    const onSubmit = (data: any) => {
        console.log('Form Submitted:', data);
    };

    return (
        <Form {...methods} onSubmit={onSubmit}>
            <PhoneNumberInput {...args} />
            <CustomSubmitButton>Test</CustomSubmitButton>
        </Form>
    );
};

export const FirstExample = Template.bind({});
FirstExample.args = {
    label: 'Telefonnummer',
    inlineLabel: true,
    tooltipDescription: "Testar lite",
    required: true,
    name: "test"
};

export const SecondExample = Template.bind({});
SecondExample.args = {
    label: 'Alternativt telefonnummer',
    inlineLabel: true,
    required: false,
    name: "test"
};