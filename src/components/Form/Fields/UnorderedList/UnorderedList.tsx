import * as React from "react";
import { IUnorderedList } from "../../../../models/IFormInput";
import "../../../../assets/styles/UnorderedList.style.scss";

export const UnorderedList: React.FunctionComponent<IUnorderedList> = ({ name, textRows, label, inlineLabel, className = "unordered-list", labelCol = 4, inputCol = 8 }) => {

    return (
        <div className={className + " form-group " + (inlineLabel ? "row" : "")}>
            <label htmlFor={name} className={inlineLabel ? `col-${labelCol} col-form-label` : ""} >{label}:</label>
            <div className={inlineLabel ? `col-${inputCol}` : ""}>
                <ul id={name}>
                    {
                        textRows.length > 0 ?
                            textRows.map((textRow, key) => {
                                return (
                                    <li key={key}>{textRow}</li>
                                )
                            }) : null
                    }
                </ul>
            </div>
        </div>
    );
};