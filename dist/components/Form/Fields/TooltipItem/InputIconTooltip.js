import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "../../../../assets/styles/TooltipItem.style.scss";
export var InputIconTooltip = function (_a) {
    var description = _a.description, icon = _a.icon;
    var tooltipId = "a".concat(Math.floor(Math.random() * 100000));
    var myWindow = window;
    var onTooltipMouseOver = function () {
        myWindow.$("#".concat(tooltipId)).tooltip("enable");
        myWindow.$("#".concat(tooltipId)).tooltip("show");
    };
    var onTooltipClick = function () {
        myWindow.$("#".concat(tooltipId)).tooltip("hide");
    };
    return (React.createElement("div", { className: "tooltip-item" },
        React.createElement("p", null,
            React.createElement("span", { id: tooltipId, "data-toggle": "tooltip", "data-html": "true", "data-placement": "right", "data-original-title": description, onMouseOver: onTooltipMouseOver, onClick: onTooltipClick },
                React.createElement("span", { className: "input-group-text", style: { backgroundColor: 'transparent', border: 'none' } },
                    React.createElement(FontAwesomeIcon, { icon: icon }))))));
};
