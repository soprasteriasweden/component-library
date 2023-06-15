import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import "../../assets/styles/FormDownloadButton.style.scss";
export var FormDownloadButton = function (_a) {
    var label = _a.label, name = _a.name, text = _a.text, _b = _a.disabled, disabled = _b === void 0 ? false : _b, className = _a.className, inlineLabel = _a.inlineLabel, _c = _a.labelCol, labelCol = _c === void 0 ? 4 : _c, _d = _a.inputCol, inputCol = _d === void 0 ? 8 : _d, onClick = _a.onClick, isLoading = _a.isLoading;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "form-download-button " + className + " form-group " + (inlineLabel ? "row" : "") },
            React.createElement("label", { htmlFor: name, className: inlineLabel ? "col-".concat(labelCol, " col-form-label") : "" },
                label,
                ":"),
            React.createElement("div", { className: inlineLabel ? "col-".concat(inputCol) : "" }, disabled ?
                React.createElement("p", { id: name, className: "form-control-plaintext" }, text)
                :
                    React.createElement("p", { id: name, className: "form-control-plaintext link ".concat(isLoading ? "cursor-not-allowed" : ""), onClick: function (event) { return onClick ? onClick(event) : undefined; } },
                        React.createElement(FontAwesomeIcon, { icon: faDownload }),
                        " ",
                        text,
                        " ",
                        isLoading ? React.createElement("span", { className: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true" }) : null)))));
};
