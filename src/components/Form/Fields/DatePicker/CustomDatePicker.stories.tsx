import React from 'react';
import { Meta, Story } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { DatePickerRange } from './DatePickerRange';
import { IDatePicker, IDatePickerRange } from '../../../../models/IFormInput';
import 'react-datepicker/dist/react-datepicker.css';
import { CustomDatePicker, CustomSubmitButton, Form } from '../../Form';

interface StorybookICustomDatePicker extends IDatePicker {
    formMethods: any;
}

export default {
    title: 'Form/Fields/CustomDatePicker',
    component: CustomDatePicker,
} as Meta;

const Template: Story<StorybookICustomDatePicker> = (args) => {

    const methods = useForm();

    const onSubmit = (data: any) => {
        console.log('Form Submitted:', data);
    };

    return (
        <Form {...methods} onSubmit={onSubmit}>
            <CustomDatePicker {...args} />
            <CustomSubmitButton>Test</CustomSubmitButton>
        </Form>
    );
};

export const CustomDatePickerWithTooltip = Template.bind({});
CustomDatePickerWithTooltip.args = {
    name: 'startDate',
    label: 'CustomDatePicker with tooltip',
    inlineLabel: true,
    required: true,
    value: new Date(),
    valueSecondary: new Date(),
    tooltipDescription: "Select a date"
};
