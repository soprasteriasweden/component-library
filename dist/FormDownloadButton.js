import * as React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faDownload } from '@fortawesome/free-solid-svg-icons';

import "./FormDownloadButton.style.scss";

export const FormDownloadButton = ({ label, name, text, disabled = false, className, inlineLabel, labelCol = 4, inputCol = 8, onClick, isLoading }) => {

    return (React.createElement(React.Fragment, null,

        React.createElement("div", { className: "form-download-button " + className + " form-group " + (inlineLabel ? "row" : "") },

            React.createElement("label", { htmlFor: name, className: inlineLabel ? `col-${labelCol} col-form-label` : "" },

                label,

                ":"),

            React.createElement("div", { className: inlineLabel ? `col-${inputCol}` : "" }, disabled ?

                React.createElement("p", { id: name, className: "form-control-plaintext" }, text)

                :

                    React.createElement("p", { id: name, className: `form-control-plaintext link ${isLoading ? "cursor-not-allowed" : ""}`, onClick: (event) => onClick ? onClick(event) : undefined },

                        React.createElement(FontAwesomeIcon, { icon: faDownload }),

                        " ",

                        text,

                        " ",

                        isLoading ? React.createElement("span", { className: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true" }) : null)))));

};

