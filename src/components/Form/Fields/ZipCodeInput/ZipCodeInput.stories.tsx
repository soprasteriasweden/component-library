import React from 'react';
import { Meta, Story } from '@storybook/react';
import { useForm } from 'react-hook-form';

import { ZipCodeInput } from './ZipCodeInput';
import { Form } from '../../../Form/Form';
import { IZipCodeInput } from '../../../../models/IFormInput';
import { CustomSubmitButton } from '../../CustomSubmitButton'

export default {
    title: 'Form/Fields/ZipCodeInput',
    component: ZipCodeInput,
} as Meta;

const Template: Story<IZipCodeInput> = (args) => {
    const methods = useForm();

    const onSubmit = (data: any) => {
        console.log('Form Submitted:', data);
    };

    return (
        <Form {...methods} onSubmit={onSubmit}>
            <ZipCodeInput {...args} />
            <CustomSubmitButton>Test</CustomSubmitButton>
        </Form>
    );
};

export const FirstExample = Template.bind({});
FirstExample.args = {
    label: 'Postnummer',
    inlineLabel: true,
    tooltipDescription: "Testar lite",
    required: true,
    name: "test"
};

export const SecondExample = Template.bind({});
SecondExample.args = {
    label: 'Postnummer',
    inlineLabel: true,
    required: true,
    name: "test"
};

export const ThirdExample = Template.bind({});
ThirdExample.args = {
    label: 'Postnummer',
    inlineLabel: true,
    required: true,
    labelCol: 5,
    inputCol: 7,
    name: "test"
};