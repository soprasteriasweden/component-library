import * as React from 'react';
import { CustomSubmitButton, CustomSubmitButtonType } from './CustomSubmitButton';
import { Form } from '../Form';

export default {
  title: 'Form/CustomSubmitButton',
  component: CustomSubmitButton,
};

export const Default = () => {
  const onSubmit = (data: any) => {
    console.log("Form Submitted:", data);
  };

  return (
    <Form onSubmit={onSubmit}>
      <CustomSubmitButton buttonType={CustomSubmitButtonType.default}>
        Submit
      </CustomSubmitButton>
    </Form>
  );
};

export const Alternative = () => {
  const onSubmit = (data: any) => {
    console.log("Form Submitted:", data);
  };

  return (
    <Form onSubmit={onSubmit}>
      <CustomSubmitButton buttonType={CustomSubmitButtonType.alternative}>
        Alternative
      </CustomSubmitButton>
    </Form>
  );
};

export const Search = () => {
  const onSubmit = (data: any) => {
    console.log("Form Submitted:", data);
  };

  return (
    <Form onSubmit={onSubmit}>
      <CustomSubmitButton buttonType={CustomSubmitButtonType.search}>
        Sök
      </CustomSubmitButton>
    </Form>
  );
};
