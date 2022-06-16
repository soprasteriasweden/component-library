import { FixedSizeList as List } from "react-window";
import * as React from "react";

interface IMenuList {
    children: any
    maxHeight: number
}

export const MenuList: React.FunctionComponent<IMenuList> = ({ children, maxHeight }) => {
    return (
        <List
            height={maxHeight}
            itemCount={children.length}
            itemSize={35}
            width="100%"
        >
            {({ index, style }) => <div style={style}>{children[index]}</div>}
        </List>
    );
}

export const SelectStyles: Partial<any> = {
    control: (provided: React.CSSProperties) => ({
        ...provided,
        minHeight: "35px"
    }),
    valueContainer: (provided: React.CSSProperties) => ({
        ...provided,
        position: "static"
    }),
    indicatorSeparator: (provided: React.CSSProperties) => ({
        ...provided,
        width: "0px"
    }),
}