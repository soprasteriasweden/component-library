import * as React from 'react';
import "../../assets/styles/TableStyle.scss";
interface ISortableTableHeader {
    headerText: string;
    propertyToSortBy: string;
}
export declare const SortableTableHeader: React.FunctionComponent<ISortableTableHeader>;
export {};
