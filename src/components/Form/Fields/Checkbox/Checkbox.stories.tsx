import React from 'react';
import { Meta, Story } from '@storybook/react';
import { useForm } from 'react-hook-form';

import { Checkbox } from './Checkbox';
import { Form } from '../../../Form/Form';
import { ICheckbox } from '../../../../models/IFormInput';
import { CustomSubmitButton } from '../../CustomSubmitButton'

export default {
    title: 'Form/Fields/Checkbox',
    component: Checkbox,
} as Meta;

const Template: Story<ICheckbox> = (args) => {
    const methods = useForm();

    const onSubmit = (data: any) => {
        console.log('Form Submitted:', data);
    };

    return (
        <Form {...methods} onSubmit={onSubmit}>
            <Checkbox {...args} />
            <CustomSubmitButton>Test</CustomSubmitButton>
        </Form>
    );
};

export const Default = Template.bind({});
Default.args = {
    label: 'Default Label',
    name: 'default'
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: 'Disabled Label',
    name: 'disabled',
    disabled: true,
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
    label: 'Checkbox',
    name: 'test2',
    id: 'test2',
    tooltipDescription: 'test'
};

export const Required = Template.bind({});
Required.args = {
    label: 'Checkbox',
    name: 'test3',
    tooltipDescription: 'test',
    required: true
};