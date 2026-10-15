import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Tooltip } from "../../../Tooltip/Tooltip";
import "../../../../assets/styles/TooltipItem.style.scss";

interface IProps {
    description: string;
    icon: IconDefinition;
}

export const InputIconTooltip: React.FC<IProps> = ({ description, icon }) => {
    return (
        <div className="tooltip-item">
            <p>
                <Tooltip title={description} placement="right" trigger="hover">
                    <span className="tooltip-trigger">
                        <span className="input-group-text" style={{ backgroundColor: "transparent", border: "none" }}>
                            <FontAwesomeIcon icon={icon} />
                        </span>
                    </span>
                </Tooltip>
            </p>
        </div>
    );
};
