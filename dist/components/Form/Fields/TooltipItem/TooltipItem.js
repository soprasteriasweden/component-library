import { jsx as _jsx } from "react/jsx-runtime";
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
    return (_jsx("div", { className: "tooltip-item", children: _jsx("p", { className: showDisc ? "show-disc" : "", children: _jsx("span", { id: tooltipId, "data-toggle": "tooltip", "data-html": "true", "data-placement": "right", "data-original-title": description, onMouseOver: onTooltipMouseOver, onClick: onTooltipClick, children: title }) }) }));
};
