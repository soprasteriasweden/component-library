import * as React from "react";
import { SortOrder } from '../../models/IPagination';
export interface ISortTableContext {
    selectedPropertyToSortBy?: string;
    sortOrder: SortOrder;
    setSelectedPropertyToSortBy?: React.Dispatch<React.SetStateAction<string | undefined>>;
    setSortOrder?: React.Dispatch<React.SetStateAction<SortOrder>>;
}
export declare const SortTableContext: React.Context<ISortTableContext>;
export declare const SortTableProvider: React.FunctionComponent<{}>;
