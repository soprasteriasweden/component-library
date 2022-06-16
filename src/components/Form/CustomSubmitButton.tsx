import * as React from "react";
import { IChildren } from "../../models/IChildren";
import { useFormContext } from 'react-hook-form';

export enum CustomSubmitButtonType {
    default = "btn-primary",
    alternative = "btn-link"
}

export interface ICustomSubmitButton extends IChildren {
    onButtonSubmit?: (data: any) => any;
    buttonType?: CustomSubmitButtonType;
    isLoading?: boolean;
}
export const CustomSubmitButton: React.FunctionComponent<ICustomSubmitButton & React.HTMLProps<HTMLButtonElement>> = (props) => {

    const { handleSubmit } = useFormContext();

    const { onButtonSubmit, buttonType, isLoading, children, disabled, title, onClick, ...defaultProps } = props;

    const tooltipId = "a" + Math.floor(Math.random() * Math.floor(100000));
    React.useEffect(() => {
        var myWindow: any = window;
        myWindow.$(`#${tooltipId}`).tooltip();
    }, [])

    return (
        <>
            <span className={`d-inline-block ${isLoading || disabled ? "cursor-not-allowed" : ""}`}
                id={tooltipId}
                style={{ cursor: "not-allowed" }}
                data-toggle="tooltip"
                data-html="true"
                data-placement="right"
                data-original-title={isLoading ? "Laddar..." : title}>
                <button
                    {...defaultProps}
                    type="submit"
                    className={`btn btn-sm ${buttonType ? buttonType : CustomSubmitButtonType.default}`}
                    onClick={onButtonSubmit ? handleSubmit(onButtonSubmit) : undefined}
                    disabled={isLoading || disabled}
                    style={{ pointerEvents: isLoading || disabled ? "none" : "initial" }}
                >
                    {
                        isLoading ?
                            <><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"> </span> {children}</>
                            : children
                    }
                </button>
            </span>
        </>
    )
}