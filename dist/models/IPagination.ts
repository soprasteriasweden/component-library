export interface IPagination {
    totalCount: number;
    pageSize: number;
    currentPage: number;
    totalPages: number;
}

export interface ISort {
    propertyToOrderBy?: string;
    sortOrder?: SortOrder;
}

export enum SortOrder {
    ascending = 0,
    descending = 1
}