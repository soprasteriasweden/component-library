import * as React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { CustomSubmitButton, Form } from '../../Form';
import { CheckboxList } from './CheckboxList';
import { ICheckbox, ICheckboxList } from '../../../../models/IFormInput';

interface StorybookICheckboxList extends ICheckboxList {
    formMethods: any;
}

export default {
    title: 'Form/Fields/CheckboxList',
    component: CheckboxList,
} as Meta;

const Template: StoryFn<StorybookICheckboxList> = (args) => {
    const methods = useForm({
        defaultValues: {
            [args.name]: []
        }
    });

    const onSubmit = (data: any) => {
        console.log('Form Submitted:', data);
    };

    return (
        <Form {...methods} onSubmit={onSubmit}>
            <CheckboxList {...args} />
            <CustomSubmitButton>Submit</CustomSubmitButton>
        </Form>
    );
};

const mockListItems: ICheckbox[] = [
    {
        id: "1",
        name: "mockItems1",
        value: "1",
        label: "Item 1",
        checked: false
    },
    {
        id: "2",
        name: "mockItems2",
        value: "2",
        label: "Item 2",
        checked: false
    },
    {
        id: "3",
        name: "mockItems3",
        value: "3",
        label: "Item 3",
        checked: false
    }
];

export const Example1 = Template.bind({});
Example1.args = {
    name: 'example1',
    initialCheckboxes: mockListItems,
    toggleAll: false
};

export const ExampleWithToggle = Template.bind({});
ExampleWithToggle.args = {
    name: 'example1WithToggle',
    initialCheckboxes: mockListItems,
    toggleAll: true
};