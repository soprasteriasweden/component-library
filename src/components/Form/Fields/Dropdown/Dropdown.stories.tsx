import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { useForm, FormProvider } from 'react-hook-form';

import { Dropdown } from './Dropdown';
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

    return (
        <FormProvider {...methods}>
            <Dropdown {...args} />
        </FormProvider>
    );
};

const mockListItems: IListItem[] = [
    {
        value: "item1",
        text: "Item 1",
        informationText: "This is Item 1"
    },
    {
        value: "item2",
        text: "Item 2",
        informationText: "This is Item 2"
    },
    {
        value: "item3",
        text: "Item 3",
        informationText: "This is Item 3"
    },
    {
        value: "item4",
        text: "Item 4",
        informationText: "This is Item 4"
    },
    {
        value: "item5",
        text: "Item 5",
        informationText: "This is Item 5"
    }
];

const getItemLabel = (item: IListItem) => {
    return item.text;
}


export const Example1 = Template.bind({});
Example1.args = {
    name: "example1",
    label: 'Dropdown',
    items: mockListItems,
    getItemLabel: getItemLabel,
    placeholder: "Choose an item",
    errorMessage: "Please choose an item",
    isClearable: true,
    useFixedListItemHeight: false
};
