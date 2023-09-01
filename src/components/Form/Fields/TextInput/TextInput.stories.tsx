import React from 'react';
import { Meta, Story } from '@storybook/react';
import { useForm, FormContext } from 'react-hook-form';

import { TextInput } from './TextInput';
import { ITextInput } from '../../../../models/IFormInput';

// Extend ITextInput to include formMethods for Storybook.
interface StorybookITextInput extends ITextInput {
  formMethods: any; // Replace 'any' with the actual type if you know it
}

export default {
  title: 'Form/Fields/TextInput',
  component: TextInput,
} as Meta;

const Template: Story<StorybookITextInput> = (args) => {
  const methods = useForm();

  return (
    <FormContext {...methods}>
      <TextInput {...args} />
    </FormContext>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Default Label',
  inlineLabel: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Label',
  inlineLabel: true,
  disabled: true,
};

export const Readonly = Template.bind({});
Readonly.args = {
  label: 'Readonly Label',
  name: 'readonly',
  inlineLabel: true,
  defaultValue: "Readonly",
  readonly: true,
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  label: 'With Placeholder',
  inlineLabel: true,
  placeholder: 'Type here...',
};

export const RequiredField = Template.bind({});
RequiredField.args = {
  label: 'Required Field',
  inlineLabel: true,
  required: true,
  requiredValidationMessage: 'This field is required',
};
