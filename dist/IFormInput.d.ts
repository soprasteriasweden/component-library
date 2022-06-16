export interface IFormInputBase {

    name: string;

    disabled?: boolean;

    className?: string;

    label: string;

    defaultValue?: string;

}

export interface IFormInputBaseWithValidation extends IFormInputBase, IFormInputValidation, IInputPosition {

    placeholder?: string;

}

export interface ITextInput extends IFormInputBaseWithValidation, IFormInputBase, IFormInputValidation, IInputPosition, IPlainInput, IColumnPlacement {

}

export interface INumberInput extends IFormInputBaseWithValidation, IPlainInput, IColumnPlacement {

    maxValue?: number;

    minValue?: number;

}

export interface IDatePicker extends IFormInputBase, IFormInputValidation, IInputPosition, IColumnPlacement {

    value?: Date;

    max?: Date;

    min?: Date;

    onChange?: (val: Date | null) => void;

}

export interface IDatePickerRange extends IDatePicker, IColumnPlacement {

    nameSecondary: string;

    valueSecondary?: Date;

    requiredFrom?: boolean;

    requiredTo?: boolean;

}

export interface ISelect extends IFormInputBase, IFormInputBaseWithValidation, IColumnPlacement {

    options: IListItem[];

    selectedValue?: string;

    onChange?: (val: string) => void;

    isLoading?: boolean;

    isClearable?: boolean;

}

export interface IFileUpload extends IFormInputBaseWithValidation, IFormInputValidation, IColumnPlacement {

    multiple?: boolean;

    allowedFileTypes?: string[];

    maxSizeBytes?: number;

    initialFiles?: File[];

    documentType?: IDocumentType;

    numOfFiles?: (num: number) => void;

}

export interface IDocumentType {

    documentTypes: IListItem[];

    documentTypesName: string;

}

export interface ITextarea extends IFormInputBaseWithValidation, IPlainInput, IColumnPlacement {

    rows?: number;

    onChange?: (val: string) => void;

}

export interface ILinkArray {

    disabled?: boolean;

    name: string;

}

export interface ILinkItem {

    url: string;

    description?: string;

    entityId?: string;

}

export interface ICheckbox extends IFormInputBaseWithValidation, IColumnPlacement {

    checked?: boolean;

    value: string;

    id?: string;

    onChange?: (isChecked: boolean) => void;

    withColumn?: boolean;

}

export interface ICheckboxList extends IColumnPlacement {

    initialCheckboxes: ICheckbox[];

    toggleAll?: boolean;

    toggleAllLabel?: string;

    name: string;

}

export interface IInputPosition {

    inlineLabel?: boolean;

}

export interface IFormInputValidation {

    required?: boolean;

    requiredValidationMessage?: string;

    pattern?: RegExp;

    patternValidationMessage?: string;

}

export interface IListItem {

    value: string;

    text: string;

    disabled?: boolean;

    informationText?: string;

}

export interface IPlainInput {

    readonly?: boolean;

    minLength?: number;

    maxLength?: number;

}

export interface IColumnPlacement {

    labelCol?: number;

    inputCol?: number;

}

export interface IFormLink extends IColumnPlacement, IInputPosition {

    label: string;

    linkText: string;

    name: string;

    to: string;

    className?: string | undefined;

}

