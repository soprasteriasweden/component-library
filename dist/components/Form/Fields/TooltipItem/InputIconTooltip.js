import { jsx as _jsx } from "react/jsx-runtime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    return (_jsx("div", { className: "tooltip-item", children: _jsx("p", { children: _jsx("span", { id: tooltipId, "data-toggle": "tooltip", "data-html": "true", "data-placement": "right", "data-original-title": description, onMouseOver: onTooltipMouseOver, onClick: onTooltipClick, children: _jsx("span", { className: "input-group-text", style: { backgroundColor: 'transparent', border: 'none' }, children: _jsx(FontAwesomeIcon, { icon: icon }) }) }) }) }));
};
