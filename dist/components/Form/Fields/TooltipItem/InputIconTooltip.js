import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "../../../../assets/styles/TooltipItem.style.scss";
export const InputIconTooltip = ({ description, icon }) => {
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
        React.createElement("p", null,
            React.createElement("span", { id: tooltipId, "data-toggle": "tooltip", "data-html": "true", "data-placement": "right", "data-original-title": description, onMouseOver: onTooltipMouseOver, onClick: onTooltipClick },
                React.createElement("span", { className: "input-group-text", style: { backgroundColor: 'transparent', border: 'none' } },
                    React.createElement(FontAwesomeIcon, { icon: icon }))))));
};
