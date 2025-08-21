import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { FileUpload } from './FileUpload';
import { FormProvider, useForm } from 'react-hook-form';

const meta: Meta<typeof FileUpload> = {
  title: 'Components/FileUpload',
  component: FileUpload,
  argTypes: {
    label: { control: 'text' },
    multiple: { control: 'boolean' },
    required: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof FileUpload>;

const Template = (args: any) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form>
        <FileUpload {...args} />
      </form>
    </FormProvider>
  );
};

export const SingleFile: Story = {
  render: Template,
  args: {
    name: 'documents',
    label: 'Ladda upp fil',
    multiple: false,
    required: true,
    allowedFileTypes: ['.pdf', '.jpg'],
    inlineLabel: false,
    disableDropzoneOnSelect: true
  },
};

export const MultipleFiles: Story = {
  render: Template,
  args: {
    name: 'documents',
    label: 'Ladda upp flera filer',
    multiple: true,
    required: false,
    allowedFileTypes: ['.pdf', '.jpg', '.png'],
    inlineLabel: false,
  },
};
