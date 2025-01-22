import React from 'react';
import "../../../../assets/styles/TooltipItem.style.scss";
export const TooltipItem = ({ title, description, showDisc }) => {
    const tooltipId = `a${Math.floor(Math.random() * 100000)}`;
    const myWindow = window;
    const onTooltipMouseOver = () => {
        myWindow.$(`#${tooltipId}`).tooltip("enable");
        myWindow.$(`#${tooltipId}`).tooltip("show");
    };
    const onTooltipClick = () => {
        myWindow.$(`#${tooltipId}`).tooltip("hide");
    };
    return (React.createElement("div", { className: "tooltip-item" },
        React.createElement("p", { className: showDisc ? "show-disc" : "" },
            React.createElement("span", { id: tooltipId, "data-toggle": "tooltip", "data-html": "true", "data-placement": "right", "data-original-title": description, onMouseOver: onTooltipMouseOver, onClick: onTooltipClick }, title))));
};
