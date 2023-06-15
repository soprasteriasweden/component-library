import * as React from 'react';
import "./TableStyle.scss";
interface ISortableTableHeader {
    headerText: string;
    propertyToSortBy: string;
}
export declare const SortableTableHeader: React.FunctionComponent<ISortableTableHeader>;
export {};
