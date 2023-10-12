import React from 'react';
import { Meta, Story } from '@storybook/react';
import { useForm, FormContext } from 'react-hook-form';

import { MultiSelect } from './MultiSelect';
import { IMultiSelect, IListItem } from '../../../../models/IFormInput';
import { CustomSubmitButton, Form } from '../../Form';

// Extend ITextInput to include formMethods for Storybook.
interface StorybookIMultiSelect extends IMultiSelect {
  formMethods: any; // Replace 'any' with the actual type if you know it
}

export default {
  title: 'Form/Fields/MultiSelect',
  component: MultiSelect,
} as Meta;

const Template: Story<StorybookIMultiSelect> = (args) => {
  const methods = useForm();

  const onSubmit = (data: any) => {
        console.log('Form Submitted:', data);
    };

    return (
        <Form {...methods} onSubmit={onSubmit}>
            <MultiSelect {...args} />
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

export const MultiSelectExample = Template.bind({});
MultiSelectExample.args = {
  label: 'Välj minst en',
  name: "multiSelectExample",
  isMultiple: true,
  values: mockListItems,
  isClearable: true,
  required: true
};
