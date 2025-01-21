import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import "../../assets/styles/FormDownloadButton.style.scss";
export const FormDownloadButton = ({ label, name, text, disabled = false, className, inlineLabel, labelCol = 4, inputCol = 8, onClick, isLoading }) => {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "form-download-button " + className + " form-group " + (inlineLabel ? "row" : ""), children: [_jsxs("label", { htmlFor: name, className: inlineLabel ? `col-${labelCol} col-form-label` : "", children: [label, ":"] }), _jsx("div", { className: inlineLabel ? `col-${inputCol}` : "", children: disabled ?
                        _jsx("p", { id: name, className: "form-control-plaintext", children: text })
                        :
                            _jsxs("p", { id: name, className: `form-control-plaintext link ${isLoading ? "cursor-not-allowed" : ""}`, onClick: (event) => onClick ? onClick(event) : undefined, children: [_jsx(FontAwesomeIcon, { icon: faDownload }), " ", text, " ", isLoading ? _jsx("span", { className: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true" }) : null] }) })] }) }));
};
