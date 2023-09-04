import React from 'react';
import { Meta, Story } from '@storybook/react';
import { useForm, FormContext } from 'react-hook-form';

import { PersonalIdentityInput } from './PersonalIdentityInput';
import { IFormInputBaseWithValidation } from '../../../../models/IFormInputBaseWithValidation';
import { CustomSubmitButton, CustomSubmitButtonType } from '../../CustomSubmitButton'

// Extend ITextInput to include formMethods for Storybook.
interface StorybookIFormInputBaseWithValidation extends IFormInputBaseWithValidation {
    formMethods: any; // Replace 'any' with the actual type if you know it
}

export default {
    title: 'Form/Fields/PersonalIdentityInput',
    component: PersonalIdentityInput,
} as Meta;

const Template: Story<IFormInputBaseWithValidation> = (args) => {
    const methods = useForm();

    const onSubmit = (data: any) => {
        console.log('Form Submitted:', data);
    };

    return (
        <FormContext {...methods}>
            <PersonalIdentityInput {...args} />
        </FormContext>
    );
};

export const FirstExample = Template.bind({});
FirstExample.args = {
    label: 'Tooltip example',
    inlineLabel: true,
    tooltipDescription: "Testar lite",
    required: true,
    name: "test"
};