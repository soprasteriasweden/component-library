import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { useForm, FormProvider } from 'react-hook-form';

import { Dropdown } from './Dropdown';
import { CustomSubmitButton, Form } from '../../Form';
import { ClearFormButton } from '../../ClearFormButton';
import { IDropdown, IListItem } from '../../../../models/IFormInput';

// Extend ITextInput to include formMethods for Storybook.
interface StorybookIDropdown extends IDropdown {
    formMethods: any; // Replace 'any' with the actual type if you know it
}

export default {
    title: 'Form/Fields/Dropdown',
    component: Dropdown,
} as Meta;

const Template: StoryFn<StorybookIDropdown> = (args) => {
    const methods = useForm();

    const onSubmit = (data: any) => {
        console.log('Form Submitted:', data);
    };

    return (
        <Form {...methods} onSubmit={onSubmit}>
            <Dropdown {...args} />
            <CustomSubmitButton>Submit</CustomSubmitButton>
            <ClearFormButton buttonText="Rensa" />
        </Form>
    );
};

interface IItem {
    id: string;
    text: string;
}

const mockListItems: IItem[] = [
    {
        id: "item1",
        text: "Item 1"
    },
    {
        id: "item2",
        text: "Item 2"
    },
    {
        id: "item3",
        text: "Item 3"
    },
    {
        id: "item4",
        text: "Item 4"
    },
    {
        id: "item5",
        text: "Item 5"
    }
];

const getItemLabel = (item: IListItem) => {
    return item.text;
}


export const Example1 = Template.bind({});
Example1.args = {
    name: "test.example1",
    label: 'Dropdown',
    items: mockListItems,
    getItemLabel: getItemLabel,
    placeholder: "Välj från listan",
    isClearable: true,
    useFixedListItemHeight: false,
    required: true,
};
