import React from 'react';
import { CustomButton, ButtonType } from './CustomButton';

export default {
  title: 'Components/CustomButton',
  component: CustomButton,
};

export const General = () => <CustomButton buttonText="General" buttonType={ButtonType.general} />;
export const Create = () => <CustomButton buttonText="Create" buttonType={ButtonType.create} />;
export const CreateAlt = () => <CustomButton buttonText="Create" buttonType={ButtonType.createAlt} />;
export const Credit = () => <CustomButton buttonText="" buttonType={ButtonType.credit} />;
export const Delete = () => <CustomButton buttonText="" buttonType={ButtonType.delete} />;
export const DeleteAlt = () => <CustomButton buttonText="DeleteAlt" buttonType={ButtonType.deleteAlt} />;
export const Download = () => <CustomButton buttonText="Download" buttonType={ButtonType.download} />;
export const Edit = () => <CustomButton buttonText="Edit" buttonType={ButtonType.edit} />;
export const EditAlt = () => <CustomButton buttonText="" buttonType={ButtonType.editAlt} />;
export const Excel = () => <CustomButton buttonText="Excel" buttonType={ButtonType.excel} />;
export const Pdf = () => <CustomButton buttonText="Pdf" buttonType={ButtonType.pdf} />;
export const Success = () => <CustomButton buttonText="Success" buttonType={ButtonType.success} />;
export const Warning = () => <CustomButton buttonText="Warning" buttonType={ButtonType.warning} />;