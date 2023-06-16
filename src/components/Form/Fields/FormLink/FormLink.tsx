import * as React from "react";
import { IFormLink } from "../../../../models/IFormInput";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
import "../../../../assets/styles/FormLink.style.scss";


export const FormLink: React.FunctionComponent<IFormLink> = ({ label, linkText, name, to, className, inlineLabel, labelCol = 4, inputCol = 8, onClick }) => {

    return (
        <>
            <div className={"form-link " + className + " form-group " + (inlineLabel ? "row" : "")}>
                <label htmlFor={name} className={inlineLabel ? `col-${labelCol} col-form-label` : ""}>{label}:</label>
                <div className={inlineLabel ? `col-${inputCol}` : ""}>
                    <NavLink to={to} id={name} onClick={(event) => onClick ? onClick(event) : undefined} className="form-control-plaintext" >
                        <FontAwesomeIcon icon={faLink} /> {linkText}
                    </NavLink>
                </div>
            </div>
        </>
    )
}