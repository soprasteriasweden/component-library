import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPen, faDownload, faFilePdf, faFileExcel, faTrash } from '@fortawesome/free-solid-svg-icons';
import * as bootstrap from "bootstrap";

export enum ButtonType {
    create = "btn-primary btn-create",
    createAlt = "btn-outline-primary btn-create-alt",
    edit = "btn-primary btn-edit",
    editAlt = "btn-outline-primary btn-edit-alt",
    credit = "btn-warning",
    download = "btn-primary btn-download",
    pdf = "btn-primary btn-pdf",
    excel = "btn-primary btn-excel",
    general = "btn-outline-dark",
    success = "btn-success",
    warning = "btn-warning",
    delete = "btn-danger",
    deleteAlt = "btn-outline-danger"
}

export interface ICustomButton {
    buttonType: ButtonType;
    buttonText: string;
    isLoading?: boolean;
}

export const CustomButton: React.FunctionComponent<ICustomButton & React.HTMLProps<HTMLButtonElement>> = (props) => {

    const { buttonType, buttonText, isLoading, children, disabled, title = "", ...buttonProps } = props;
    const tooltipRef = React.useRef<HTMLSpanElement>(null);

    React.useEffect(() => {
        let tooltip: bootstrap.Tooltip | undefined;

        if (tooltipRef.current) {
            tooltip = bootstrap.Tooltip.getInstance(tooltipRef.current) || new bootstrap.Tooltip(tooltipRef.current);
            tooltip.setContent({ '.tooltip-inner': isLoading ? 'Laddar...' : title || '' });
        }

        return () => {
            if (tooltip) {
                tooltip.dispose();
            }
        };
    }, [isLoading, title]);

    const iconMap: { [key in ButtonType]?: React.ReactNode } = {
        [ButtonType.create]: <FontAwesomeIcon icon={faPlus} />,
        [ButtonType.createAlt]: <FontAwesomeIcon icon={faPlus} />,
        [ButtonType.edit]: <FontAwesomeIcon icon={faPen} />,
        [ButtonType.editAlt]: <FontAwesomeIcon icon={faPen} />,
        [ButtonType.download]: <FontAwesomeIcon icon={faDownload} />,
        [ButtonType.pdf]: <FontAwesomeIcon icon={faFilePdf} />,
        [ButtonType.excel]: <FontAwesomeIcon icon={faFileExcel} />,
        [ButtonType.delete]: <FontAwesomeIcon icon={faTrash} />,
        [ButtonType.deleteAlt]: <FontAwesomeIcon icon={faTrash} />
    };

    const renderIcon = (buttonType: ButtonType) => {
        return iconMap[buttonType] || null;
    };

    const defaultTextMap: { [key in ButtonType]?: string } = {
        [ButtonType.editAlt]: "Ändra",
        [ButtonType.delete]: "Ta bort",
        [ButtonType.credit]: "Kreditera",
    };

    const resolvedButtonText = buttonText || defaultTextMap[buttonType] || "";

    return (
        <span
            ref={tooltipRef}
            className={`d-inline-block ${isLoading || disabled ? "cursor-not-allowed" : ""}`}
            data-bs-toggle="tooltip"
            data-bs-placement="right"
        >
            <button
                {...buttonProps}
                type="button"
                className={`btn btn-sm ${buttonType}`}
                disabled={isLoading || disabled}
            >
                {isLoading && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
                {renderIcon(buttonType)} {resolvedButtonText}
            </button>
        </span>
    );
};