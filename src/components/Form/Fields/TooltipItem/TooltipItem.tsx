import React from "react";
import { Tooltip } from "../../../Tooltip/Tooltip";
import "../../../../assets/styles/TooltipItem.style.scss";

interface IProps {
    title: string;
    description: string;
    showDisc?: boolean;
    showHyphen?: boolean;
}

export const TooltipItem: React.FC<IProps> = ({ title, description, showDisc, showHyphen }) => {
    return (
        <div className="tooltip-item">
            <p className={showDisc ? "show-disc" : showHyphen ? "show-hyphen" : ""}>
                <Tooltip title={description} placement="right">
                    <span className="tooltip-trigger">{title}</span>
                </Tooltip>
            </p>
        </div>
    );
};
