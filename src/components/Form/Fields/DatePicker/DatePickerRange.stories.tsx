import React from 'react';
import { Meta, Story } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { DatePickerRange } from './DatePickerRange';
import { IDatePickerRange } from '../../../../models/IFormInput';
import 'react-datepicker/dist/react-datepicker.css';
import { CustomSubmitButton, Form } from '../../Form';

interface StorybookIDatePickerRange extends IDatePickerRange {
    formMethods: any;
}

export default {
    title: 'Form/Fields/DatePickerRange',
    component: DatePickerRange,
} as Meta;

const Template: Story<StorybookIDatePickerRange> = (args) => {

    const methods = useForm();

    const onSubmit = (data: any) => {
        console.log('Form Submitted:', data);
    };

    return (
        <Form {...methods} onSubmit={onSubmit}>
            <DatePickerRange {...args} />
            <CustomSubmitButton>Test</CustomSubmitButton>
        </Form>
    );
};

export const DateRangeWithTooltip = Template.bind({});
DateRangeWithTooltip.args = {
    name: 'startDate',
    nameSecondary: 'endDate',
    label: 'Date Range with tooltip',
    inlineLabel: true,
    disabled: false,
    requiredFrom: true,
    requiredTo: true,
    value: new Date(),
    valueSecondary: new Date(),
    tooltipDescription: "Select a date range"
};
