import * as React from "react";

import "./FormDownloadButton.style.scss";

interface IFormDownloadButton extends IColumnPlacement, IInputPosition {

    label: string;

    name: string;

    text: string;

    disabled?: boolean;

    className?: string;

    onClick?: (event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => void;

    isLoading?: boolean;

}

interface IColumnPlacement {

    labelCol?: number;

    inputCol?: number;

}

export interface IInputPosition {

    inlineLabel?: boolean;

}

export declare const FormDownloadButton: React.FunctionComponent<IFormDownloadButton>;

export {};

