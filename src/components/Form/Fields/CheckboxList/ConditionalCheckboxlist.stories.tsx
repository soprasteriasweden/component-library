import React from 'react';
import { Meta, Story } from '@storybook/react';
import { useForm, FormContext } from 'react-hook-form';

import { ConditionalCheckboxList } from './ConditionalCheckboxList';
import { ICheckboxListItem, IConditionalCheckboxList } from '../../../../models/IFormInput';

interface StorybookIConditionalCheckboxList extends IConditionalCheckboxList {
    formMethods: any;
}

export default {
    title: 'Form/Fields/ConditionalCheckboxList',
    component: ConditionalCheckboxList,
} as Meta;

const Template: Story<StorybookIConditionalCheckboxList> = (args) => {
    const methods = useForm();

    return (
        <FormContext {...methods}>
            <ConditionalCheckboxList {...args} />
        </FormContext>
    );
};

const mockListItems: ICheckboxListItem[] = [
  {
    id: 1,
    name: "Item 1",
    description: "Description for Item 1",
    invalidCombinationIds: ["2", "3"],
  },
  {
    id: 2,
    name: "Item 2",
    description: "Description for Item 2",
    invalidCombinationIds: ["1", "3"],
  },
  {
    id: 3,
    name: "Item 3",
    description: "Description for Item 3",
    invalidCombinationIds: ["1", "2"],
  },
  {
    id: 4,
    name: "Item 4",
    description: "Description for Item 4",
    invalidCombinationIds: [],
  },
  {
    id: 5,
    name: "Item 5",
    description: "Description for Item 5",
    invalidCombinationIds: ["4"],
  },
];

export const Example1 = Template.bind({});
Example1.args = {
    id: 'example1',
    label: 'Example 1',
    required: true,
    items: mockListItems,
    existingItemIds: undefined
};

export const Example2 = Template.bind({});
Example2.args = {
    id: 'example2',
    label: 'Example 2',
    required: false,
    items: mockListItems,
    existingItemIds: [1,2]
};
