var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { FixedSizeList as List } from "react-window";
import * as React from "react";
export var MenuList = function (_a) {
    var children = _a.children, maxHeight = _a.maxHeight;
    return (React.createElement(List, { height: maxHeight, itemCount: children.length, itemSize: 35, width: "100%" }, function (_a) {
        var index = _a.index, style = _a.style;
        return React.createElement("div", { style: style }, children[index]);
    }));
};
export var SelectStyles = {
    control: function (provided) { return (__assign(__assign({}, provided), { minHeight: "35px" })); },
    valueContainer: function (provided) { return (__assign(__assign({}, provided), { position: "static" })); },
    indicatorSeparator: function (provided) { return (__assign(__assign({}, provided), { width: "0px" })); },
};
