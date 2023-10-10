import React from 'react';
import { Meta, Story } from '@storybook/react';
import { useForm } from 'react-hook-form';

import { HsaIdInput } from './HsaIdInput';
import { Form } from '../../../Form/Form';
import { IHsaIdInput } from '../../../../models/IFormInput';
import { CustomSubmitButton } from '../../CustomSubmitButton'

export default {
    title: 'Form/Fields/HsaIdInput',
    component: HsaIdInput,
} as Meta;

const Template: Story<IHsaIdInput> = (args) => {
    const methods = useForm();

    const onSubmit = (data: any) => {
        console.log('Form Submitted:', data);
    };

    return (
        <Form {...methods} onSubmit={onSubmit}>
            <HsaIdInput {...args} />
            <CustomSubmitButton>Test</CustomSubmitButton>
        </Form>
    );
};

export const HsaWithTooltip = Template.bind({});
HsaWithTooltip.args = {
    label: 'HSA-ID med tooltip',
    inlineLabel: true,
    tooltipDescription: "Testar lite",
    required: true,
    name: "test"
};

export const HsaWithoutTooltip = Template.bind({});
HsaWithoutTooltip.args = {
    label: 'HSA-ID utan tooltip',
    inlineLabel: true,
    required: true,
    name: "newUser.userHsaId"
};