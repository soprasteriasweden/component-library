import * as React from "react";
import { IChildren } from "../../../models/IChildren";
import { useFormContext } from "react-hook-form";
import * as bootstrap from "bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export enum CustomSubmitButtonType {
    default = "btn-primary",
    alternative = "btn-link",
    search = "btn-outline-secondary btn-search"
}

export interface ICustomSubmitButton extends IChildren {
    onButtonSubmit?: (data: any) => any;
    buttonType?: CustomSubmitButtonType;
    isLoading?: boolean;
}

export const CustomSubmitButton: React.FunctionComponent<ICustomSubmitButton & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
    onButtonSubmit,
    buttonType = CustomSubmitButtonType.default,
    isLoading,
    children,
    disabled,
    title = "",
    ...buttonProps
}) => {
    const { handleSubmit } = useFormContext();
    const tooltipRef = React.useRef<HTMLSpanElement>(null);
    const icon = buttonType === CustomSubmitButtonType.search ? <FontAwesomeIcon icon={faSearch} /> : null;

    React.useEffect(() => {
        if (tooltipRef.current) {
            const tooltip = new bootstrap.Tooltip(tooltipRef.current, {
                title: isLoading ? "Laddar..." : title,
                placement: "right",
                html: true
            });

            return () => {
                tooltip.dispose();
            };
        }
    }, [isLoading, title]);

    return (
        <span 
            ref={tooltipRef} 
            className={`d-inline-block ${isLoading || disabled ? "cursor-not-allowed" : ""}`}
            data-bs-toggle="tooltip"
        >
            <button
                {...buttonProps}
                type="submit"
                className={`btn btn-sm ${buttonType}`}
                onClick={onButtonSubmit ? handleSubmit(onButtonSubmit) : undefined}
                disabled={isLoading || disabled}
            >
                {isLoading ? (
                    <>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> {children}
                    </>
                ) : (
                    <>{icon} {children}</>
                )}
            </button>
        </span>
    );
};
