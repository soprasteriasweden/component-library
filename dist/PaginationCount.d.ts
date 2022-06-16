import * as React from "react";

interface IPaginationCount {

    totalCount?: number;

    itemsPerPage?: number;

    currentPage?: number;

}

export declare const PaginationCount: React.FunctionComponent<IPaginationCount>;

export {};

