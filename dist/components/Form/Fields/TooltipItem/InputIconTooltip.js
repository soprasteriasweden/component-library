import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Tooltip } from "../../../Tooltip/Tooltip";
import "../../../../assets/styles/TooltipItem.style.scss";
export const InputIconTooltip = ({ description, icon }) => {
    return (React.createElement("div", { className: "tooltip-item" },
        React.createElement("p", null,
            React.createElement(Tooltip, { title: description, placement: "right", trigger: "hover" },
                React.createElement("span", { className: "tooltip-trigger" },
                    React.createElement("span", { className: "input-group-text", style: { backgroundColor: "transparent", border: "none" } },
                        React.createElement(FontAwesomeIcon, { icon: icon })))))));
};
