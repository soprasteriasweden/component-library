import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { SortOrder } from '../../models/IPagination';
export const SortTableContext = React.createContext({ sortOrder: SortOrder.ascending });
export const SortTableProvider = ({ children }) => {
    const [selectedPropertyToSortBy, setSelectedPropertyToSortBy] = React.useState();
    const [sortOrder, setSortOrder] = React.useState(SortOrder.ascending);
    return (_jsx(SortTableContext.Provider, { value: {
            selectedPropertyToSortBy,
            sortOrder,
            setSelectedPropertyToSortBy,
            setSortOrder
        }, children: children }));
};
