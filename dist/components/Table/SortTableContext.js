import * as React from "react";
import { SortOrder } from '../../models/IPagination';
export const SortTableContext = React.createContext({ sortOrder: SortOrder.ascending });
export const SortTableProvider = ({ children }) => {
    const [selectedPropertyToSortBy, setSelectedPropertyToSortBy] = React.useState();
    const [sortOrder, setSortOrder] = React.useState(SortOrder.ascending);
    return (React.createElement(SortTableContext.Provider, { value: {
            selectedPropertyToSortBy,
            sortOrder,
            setSelectedPropertyToSortBy,
            setSortOrder
        } }, children));
};
