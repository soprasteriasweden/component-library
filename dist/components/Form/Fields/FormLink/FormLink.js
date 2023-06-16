import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
import "../../../../assets/styles/FormLink.style.scss";
export var FormLink = function (_a) {
    var label = _a.label, linkText = _a.linkText, name = _a.name, to = _a.to, className = _a.className, inlineLabel = _a.inlineLabel, _b = _a.labelCol, labelCol = _b === void 0 ? 4 : _b, _c = _a.inputCol, inputCol = _c === void 0 ? 8 : _c, onClick = _a.onClick;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "form-link " + className + " form-group " + (inlineLabel ? "row" : "") },
            React.createElement("label", { htmlFor: name, className: inlineLabel ? "col-".concat(labelCol, " col-form-label") : "" },
                label,
                ":"),
            React.createElement("div", { className: inlineLabel ? "col-".concat(inputCol) : "" },
                React.createElement(NavLink, { to: to, id: name, onClick: function (event) { return onClick ? onClick(event) : undefined; }, className: "form-control-plaintext" },
                    React.createElement(FontAwesomeIcon, { icon: faLink }),
                    " ",
                    linkText)))));
};
