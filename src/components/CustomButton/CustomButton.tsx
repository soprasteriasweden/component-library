import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPen, faDownload, faFilePdf, faFileExcel } from '@fortawesome/free-solid-svg-icons';

export enum ButtonType {
    create = "btn-link",
    createAlt = "btn-success",
    edit = "btn-link ",
    editAlt = " ",
    credit = "btn-warning ",
    download = " btn-link ",
    pdf = "btn-link pdf",
    excel = "btn-link excel",
    general = "",
    success = "btn-success",
    warning = "btn-warning",
    delete = "btn-danger",
    deleteAlt = "btn-danger "
}

export interface ICustomButton {
    buttonType: ButtonType;
    buttonText: string;
    isLoading?: boolean;
}

export const CustomButton: React.FunctionComponent<ICustomButton & React.HTMLProps<HTMLButtonElement>> = (props) => {

    const { buttonType, buttonText, isLoading, children, disabled, title, ...defaultProps } = props;

    const tooltipId = "a" + Math.floor(Math.random() * Math.floor(100000));
    React.useEffect(() => {
        var myWindow: any = window;
        myWindow.$(`#${tooltipId}`).tooltip();
    }, [])

    const renderIcon = () => {
        if (buttonType === ButtonType.create) {
            return <span> <FontAwesomeIcon icon={faPlus} /> </span>
        }
        else if (buttonType === ButtonType.edit) {
            return <span> <FontAwesomeIcon icon={faPen} /> </span>
        }
        else if (buttonType === ButtonType.editAlt) {
            return <span>Ändra</span>
        }
        else if (buttonType === ButtonType.delete) {
            return <span>Ta bort</span>
        }
        else if (buttonType === ButtonType.credit) {
            return <span>Kreditera</span>
        }
        else if (buttonType === ButtonType.download) {
            return <span> <FontAwesomeIcon icon={faDownload} /> </span>
        }
        else if (buttonType === ButtonType.pdf) {
            return <span> <FontAwesomeIcon icon={faFilePdf} /> </span>
        }
        else if (buttonType === ButtonType.excel) {
            return <span> <FontAwesomeIcon icon={faFileExcel} /> </span>
        }
    }

    return (
        <>
            <span className={`d-inline-block ${isLoading || disabled ? "cursor-not-allowed" : ""}`}
                id={tooltipId}
                style={{ cursor: "not-allowed" }}
                data-toggle="tooltip"
                data-placement="right"
                data-original-title={isLoading ? "Laddar..." : title}>
                <button
                    {...defaultProps}
                    type="button"
                    className={`btn btn-sm ${buttonType}`}
                    disabled={isLoading || disabled}
                    style={{ pointerEvents: isLoading || disabled ? "none" : "initial" }}
                >
                    {
                        isLoading ?
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            : null
                    }
                    {
                        renderIcon()
                    }
                    {buttonText}
                </button>
            </span>
        </>
    )
}