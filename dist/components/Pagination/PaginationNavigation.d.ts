import * as React from "react";
import { IPagination } from "../../models/IPagination";
interface IPaginationNavigation {
    pagination: IPagination | undefined;
    ariaLabel: string;
    pageNeighbours: number;
    showCount?: boolean;
    selectedPage: (page: any) => void;
}
export declare const PaginationNavigation: React.FunctionComponent<IPaginationNavigation>;
export {};
