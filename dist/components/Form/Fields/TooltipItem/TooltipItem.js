import React from "react";
import { Tooltip } from "../../../Tooltip/Tooltip";
import "../../../../assets/styles/TooltipItem.style.scss";
export const TooltipItem = ({ title, description, showDisc, showHyphen }) => {
    return (React.createElement("div", { className: "tooltip-item" },
        React.createElement("p", { className: showDisc ? "show-disc" : showHyphen ? "show-hyphen" : "" },
            React.createElement(Tooltip, { title: description, placement: "right" },
                React.createElement("span", { className: "tooltip-trigger" }, title)))));
};
