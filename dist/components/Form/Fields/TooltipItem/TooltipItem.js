import React from 'react';
import "../../../../assets/styles/TooltipItem.style.scss";
export var TooltipItem = function (_a) {
    var title = _a.title, description = _a.description, showDisc = _a.showDisc;
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
        React.createElement("p", { className: showDisc ? "show-disc" : "" },
            React.createElement("span", { id: tooltipId, "data-toggle": "tooltip", "data-html": "true", "data-placement": "right", "data-original-title": description, onMouseOver: onTooltipMouseOver, onClick: onTooltipClick }, title))));
};
