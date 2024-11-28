import React from 'react';
import { Meta, Story } from '@storybook/react';
import { useForm } from 'react-hook-form';

import { NameInput } from './NameInput';
import { Form } from '../../../Form/Form';
import { INameInput } from '../../../../models/IFormInput';
import { CustomSubmitButton } from '../../CustomSubmitButton'

export default {
    title: 'Form/Fields/NameInput',
    component: NameInput,
} as Meta;

const Template: Story<INameInput> = (args) => {
    const methods = useForm();

    const onSubmit = (data: any) => {
        console.log('Form Submitted:', data);
    };

    return (
        <Form {...methods} onSubmit={onSubmit}>
            <NameInput {...args} />
            <CustomSubmitButton>Test</CustomSubmitButton>
        </Form>
    );
};

export const FirstExample = Template.bind({});
FirstExample.args = {
    label: 'Förnamn',
    inlineLabel: true,
    required: true,
    name: "Namn"
};

export const SecondExample = Template.bind({});
SecondExample.args = {
    label: 'Efternamn',
    inlineLabel: true,
    required: true,
    name: "Namnsson"
};

export const ThirdExample = Template.bind({});
ThirdExample.args = {
    label: 'Efternamn',
    inlineLabel: true,
    required: true,
    name: "Test"
};