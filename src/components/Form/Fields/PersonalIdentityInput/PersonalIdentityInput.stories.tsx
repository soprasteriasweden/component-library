import React from 'react';
import { Meta, Story } from '@storybook/react';
import { useForm } from 'react-hook-form';

import { PersonalIdentityInput } from './PersonalIdentityInput';
import { Form } from '../../../Form/Form';
import { IPersonalIdentityInput } from '../../../../models/IFormInput';
import { CustomSubmitButton } from '../../CustomSubmitButton'

export default {
    title: 'Form/Fields/PersonalIdentityInput',
    component: PersonalIdentityInput,
} as Meta;

const Template: Story<IPersonalIdentityInput> = (args) => {
    const methods = useForm();

    const onSubmit = (data: any) => {
        console.log('Form Submitted:', data);
    };

    return (
        <Form {...methods} onSubmit={onSubmit}>
            <PersonalIdentityInput {...args} />
            <CustomSubmitButton>Test</CustomSubmitButton>
        </Form>
    );
};

export const FirstExample = Template.bind({});
FirstExample.args = {
    label: 'Personnummer/Samordningsnummer',
    inlineLabel: true,
    tooltipDescription: "Testar lite",
    required: true,
    name: "test"
};

export const SecondExample = Template.bind({});
SecondExample.args = {
    label: 'Personnummer/Samordningsnummer',
    inlineLabel: true,
    required: true,
    name: "nested.test"
};