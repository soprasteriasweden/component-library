import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
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

const Template: StoryFn<StorybookIDatePickerRange> = (args) => {
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
    requiredFrom: true,
    requiredTo: true,
    value: new Date(),
    valueSecondary: new Date(),
    tooltipDescription: "Select a date range"
};
export const DateRangeWithMinValue = Template.bind({});
DateRangeWithMinValue.args = {
    name: 'startDate',
    nameSecondary: 'endDate',
    label: 'Date Range with min value',
    inlineLabel: true,
    disabledFrom: true,
    requiredFrom: true,
    requiredTo: true,
    value: new Date(),
    tooltipDescription: "Select a date range",
    min: new Date()
};
export const DateRangeWithoutTooltip = Template.bind({});
DateRangeWithoutTooltip.args = {
    name: 'startDate',
    nameSecondary: 'endDate',
    label: 'Date Range without tooltip',
    inlineLabel: true
};