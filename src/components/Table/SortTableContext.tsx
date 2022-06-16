import * as React from "react";
import { SortOrder } from '../../models/IPagination';

export interface ISortTableContext {
    selectedPropertyToSortBy?: string;
    sortOrder: SortOrder;
    setSelectedPropertyToSortBy?: React.Dispatch<React.SetStateAction<string | undefined>>;
    setSortOrder?: React.Dispatch<React.SetStateAction<SortOrder>>;
}

export const SortTableContext = React.createContext<ISortTableContext>({ sortOrder: SortOrder.ascending });

export const SortTableProvider: React.FunctionComponent<{}> = ({ children }) => {

    const [selectedPropertyToSortBy, setSelectedPropertyToSortBy] = React.useState<string>();
    const [sortOrder, setSortOrder] = React.useState<SortOrder>(SortOrder.ascending);

    return (
        <SortTableContext.Provider value={{
            selectedPropertyToSortBy,
            sortOrder,
            setSelectedPropertyToSortBy, 
            setSortOrder
        }}>
            {children}
        </SortTableContext.Provider>
    )

}