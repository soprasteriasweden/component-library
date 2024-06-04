import React from 'react';
import { Meta, Story } from '@storybook/react';
import { useForm, FormContext } from 'react-hook-form';

import { Select } from './Select';
import { IListItem, ISelect } from '../../../../models/IFormInput';
import { CustomSubmitButton, Form } from '../../Form';

// Extend ITextInput to include formMethods for Storybook.
interface StorybookISelect extends ISelect {
    formMethods: any; // Replace 'any' with the actual type if you know it
}

export default {
    title: 'Form/Fields/Select',
    component: Select,
} as Meta;

const Template: Story<StorybookISelect> = (args) => {
    const methods = useForm();

    const onSubmit = (data: any) => {
        console.log('Form Submitted:', data);
    };

    return (
        <Form {...methods} onSubmit={onSubmit}>
            <Select {...args} />
            <CustomSubmitButton>Test</CustomSubmitButton>
        </Form>
    );
};

const mockListItems: IListItem[] = [
    {
        value: "item1",
        text: "Item 1",
        disabled: false,
        informationText: "This is Item 1"
    },
    {
        value: "item2",
        text: "Item 2",
        disabled: false,
        informationText: "This is Item 2"
    },
    {
        value: "item3",
        text: "Item 3",
        disabled: true,
        informationText: "This is Item 3"
    },
    {
        value: "item4",
        text: "Item 4",
        disabled: false,
        informationText: "This is Item 4"
    },
    {
        value: "item5",
        text: "Item 5",
        disabled: true,
        informationText: "This is Item 5"
    }
];


export const ToolTip = Template.bind({});
ToolTip.args = {
    label: 'Select with tooltip',
    name: "test",
    inlineLabel: true,
    options: mockListItems,
    tooltipDescription: "Testar",
    selectedValue: "item1",
    isClearable: true,
    required: true
};

export const ToolTipWithNestedName = Template.bind({});
ToolTipWithNestedName.args = {
    label: 'Select with tooltip with nested name',
    name: "test.select",
    inlineLabel: true,
    options: mockListItems,
    tooltipDescription: "Testar",
    isClearable: true,
    required: true
};
