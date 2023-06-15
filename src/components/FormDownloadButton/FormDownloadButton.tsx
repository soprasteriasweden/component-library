import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import "../../assets/styles/FormDownloadButton.style.scss";


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


export const FormDownloadButton: React.FunctionComponent<IFormDownloadButton> = ({ label, name, text, disabled = false, className, inlineLabel, labelCol = 4, inputCol = 8, onClick, isLoading }) => {

    return (
        <>
            <div className={"form-download-button " + className + " form-group " + (inlineLabel ? "row" : "")}>
                <label htmlFor={name} className={inlineLabel ? `col-${labelCol} col-form-label` : ""}>{label}:</label>
                <div className={inlineLabel ? `col-${inputCol}` : ""}>
                    {
                        disabled ?
                            <p id={name} className="form-control-plaintext">
                                {text}
                            </p>
                            :
                            <p id={name} className={`form-control-plaintext link ${isLoading ? "cursor-not-allowed" : ""}`} onClick={(event) => onClick ? onClick(event) : undefined}>
                                <FontAwesomeIcon icon={faDownload} /> {text} {isLoading ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"/> : null}
                            </p>
                    }
                </div>
            </div>
        </>
    );
}