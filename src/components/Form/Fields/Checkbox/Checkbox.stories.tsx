import React from 'react';
import { Meta, Story } from '@storybook/react';
import { useForm, FormContext } from 'react-hook-form';

import { Checkbox } from './Checkbox';
import { ICheckbox } from '../../../../models/IFormInput';

// Extend ITextInput to include formMethods for Storybook.
interface StorybookICheckbox extends ICheckbox {
    formMethods: any; // Replace 'any' with the actual type if you know it
}

export default {
    title: 'Form/Fields/Checkbox',
    component: Checkbox,
} as Meta;

const Template: Story<StorybookICheckbox> = (args) => {
    const methods = useForm();

    return (
        <FormContext {...methods}>
            <Checkbox {...args} />
        </FormContext>
    );
};

export const Default = Template.bind({});
Default.args = {
    id: 'test',
    label: 'Default Label',
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: 'Disabled Label',
    disabled: true,
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
    label: 'Checkbox',
    id: 'test2',
    tooltipDescription: 'test'
};
