import * as React from "react";
import { SortOrder } from '../../models/IPagination';
export var SortTableContext = React.createContext({ sortOrder: SortOrder.ascending });
export var SortTableProvider = function (_a) {
    var children = _a.children;
    var _b = React.useState(), selectedPropertyToSortBy = _b[0], setSelectedPropertyToSortBy = _b[1];
    var _c = React.useState(SortOrder.ascending), sortOrder = _c[0], setSortOrder = _c[1];
    return (React.createElement(SortTableContext.Provider, { value: {
            selectedPropertyToSortBy: selectedPropertyToSortBy,
            sortOrder: sortOrder,
            setSelectedPropertyToSortBy: setSelectedPropertyToSortBy,
            setSortOrder: setSortOrder
        } }, children));
};
