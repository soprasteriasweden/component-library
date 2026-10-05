import React from 'react';
import { AlertMessage, AlertType } from './AlertMessage';

export default {
  title: 'Components/AlertMessage',
  component: AlertMessage,
};

const duration = 3000;

export const Primary = () => <AlertMessage duration={duration} alertType={AlertType.primary}>Primary</AlertMessage>;
export const Success = () => <AlertMessage duration={duration} alertType={AlertType.success}>Success</AlertMessage>;
export const Warning = () => <AlertMessage duration={duration} alertType={AlertType.warning}>Warning</AlertMessage>;
export const Danger = () => <AlertMessage duration={duration} alertType={AlertType.danger}>Danger</AlertMessage>;
export const AlwaysShow = () => <AlertMessage alwaysShow={true} alertType={AlertType.primary}>Always show</AlertMessage>;
export const NonDismissible = () => <AlertMessage duration={duration} dismissible={false} alertType={AlertType.primary}>Non-dismissible</AlertMessage>;
export const NonDismissibleInline = () => <AlertMessage duration={duration} dismissible={false} renderOnTopOfPage={false} alertType={AlertType.primary}>Non-dismissible inline</AlertMessage>;
export const AlwaysShowNonDismissible = () => <AlertMessage alwaysShow={true} dismissible={false} alertType={AlertType.primary}>Always show non-dismissible</AlertMessage>;