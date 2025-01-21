import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
import "../../../../assets/styles/FormLink.style.scss";
export const FormLink = ({ label, linkText, name, to, className, inlineLabel, labelCol = 4, inputCol = 8, onClick }) => {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "form-link " + className + " form-group " + (inlineLabel ? "row" : ""), children: [_jsxs("label", { htmlFor: name, className: inlineLabel ? `col-${labelCol} col-form-label` : "", children: [label, ":"] }), _jsx("div", { className: inlineLabel ? `col-${inputCol}` : "", children: _jsxs(NavLink, { to: to, id: name, onClick: (event) => onClick ? onClick(event) : undefined, className: "form-control-plaintext", children: [_jsx(FontAwesomeIcon, { icon: faLink }), " ", linkText] }) })] }) }));
};
