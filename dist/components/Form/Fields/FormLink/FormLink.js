import * as React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faLink } from '@fortawesome/free-solid-svg-icons';

import { NavLink } from "react-router-dom";

import "./FormLink.style.scss";

export const FormLink = ({ label, linkText, name, to, className, inlineLabel, labelCol = 4, inputCol = 8 }) => {

    return (React.createElement(React.Fragment, null,

        React.createElement("div", { className: "form-link " + className + " form-group " + (inlineLabel ? "row" : "") },

            React.createElement("label", { htmlFor: name, className: inlineLabel ? `col-${labelCol} col-form-label` : "" },

                label,

                ":"),

            React.createElement("div", { className: inlineLabel ? `col-${inputCol}` : "" },

                React.createElement(NavLink, { to: to, id: name, className: "form-control-plaintext" },

                    React.createElement(FontAwesomeIcon, { icon: faLink }),

                    " ",

                    linkText)))));

};

