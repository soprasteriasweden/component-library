import * as React from "react";
import { Fragment } from "react";
import { IPagination } from "../../models/IPagination";

interface IPaginationNavigation {
    pagination: IPagination | undefined;
    ariaLabel: string;
    pageNeighbours: number;
    showCount?: boolean;
    selectedPage: (page: any) => void;
}

const DOTS = '...';

// Helper method for creating a range of numbers
// range (1, 5) => [1, 2, 3, 4, 5]
const range = (from: any, to: any, step: number = 1) => {
    let i = from;
    const range = [];

    while (i <= to) {
        range.push(i);
        i += step
    }
    return range;
}

export const PaginationNavigation: React.FunctionComponent<IPaginationNavigation> = ({ pagination, ariaLabel, pageNeighbours, selectedPage, showCount = true }) => {
    const [pages, setPages] = React.useState<any[]>([]);

    const fetchPageNumbers = () => {
        /**
         * totalNumbers: the total page numbers to show on the control
         * totalBlocks: totalNumbers + 2 to cover for the (...) controls
         */
        const totalNumbers = (pageNeighbours * 2) + 3;
        const totalBlocks = totalNumbers + 2;

        if (pagination !== undefined && pagination.totalPages > totalBlocks) {
            const startPage = Math.max(2, pagination.currentPage - pageNeighbours);
            const endPage = Math.min(pagination.totalPages - 1, pagination.currentPage + pageNeighbours);
            let pages = range(startPage, endPage);

            /**
             * hasLeftSpill: has hidden pages to the left
             * hasRightSpill: has hidden pages to the right
             * spillOffset: number of hidden pages either to the left or to the right
             */
            const hasLeftSpill = startPage > 2;
            const hasRightSpill = (pagination.totalPages - endPage) > 1;
            const spillOffset = totalNumbers - (pages.length + 1);

            switch (true) {
                // handle: (1) (...) {5 6} [7] {8 9} (10)
                case (hasLeftSpill && !hasRightSpill): {
                    const extraPages = range(startPage - spillOffset, startPage - 1);
                    pages = [DOTS, ...extraPages, ...pages];
                    break;
                }

                // handle: (1) {2 3} [4] {5 6} (...) (10)
                case (!hasLeftSpill && hasRightSpill): {
                    const extraPages = range(endPage + 1, endPage + spillOffset);
                    pages = [...pages, ...extraPages, DOTS];
                    break;
                }

                // handle: (1) (...) {4 5} [6] {7 8} (...) (10)
                case (hasLeftSpill && hasRightSpill):
                default: {
                    pages = [DOTS, ...pages, DOTS];
                    break;
                }
            }
            return [1, ...pages, pagination.totalPages];
        }
        return (range(1, pagination?.totalPages));
    }

    React.useEffect(() => {
        if (pagination !== undefined && pagination.totalPages > 1) {
            setPages(fetchPageNumbers());
        }
        else {
            setPages([]);
        }
    }, [pagination]);


    const handleClick = (clickedPage: number) => {
        selectedPage(clickedPage);
    }

    const handleClickPrevious = () => {
        if (pagination !== undefined && pagination.currentPage > 1) {
            selectedPage(pagination.currentPage - 1);
        }
    }

    const handleClickNext = () => {
        if (pagination !== undefined && pagination.currentPage < pagination.totalPages) {
            selectedPage(pagination.currentPage + 1);
        }
    }

    const handleClickPreviousTen = () => {
        if (pagination !== undefined && pagination.currentPage - 10 > 0) {
            selectedPage(pagination.currentPage - 10);
        }
    }

    const handleClickNextTen = () => {
        if (pagination !== undefined && pagination.currentPage + 9 < pagination.totalPages) {
            selectedPage(pagination.currentPage + 10);
        }
    }

    const renderPreviousButton = () => {
        return (
            <li key="previousPage" className="page-item" onClick={handleClickPrevious} >
                <button type="button" className="page-link">Föregående</button>
            </li>
        );
    }

    const renderNextButton = () => {
        return (
            <li key="nextPage" className="page-item" onClick={handleClickNext} >
                <button type="button" className="page-link">Nästa</button>
            </li>
        );
    }

    const renderItemCount = () => {
        if (pagination !== undefined) {
            const startItem = pagination.pageSize * (pagination.currentPage - 1) + 1;
            const endItem = Math.min(startItem + pagination.pageSize - 1, pagination.totalCount);
            return (
                <p className="text-right">
                    {`Visar ${startItem}-${endItem} av ${pagination.totalCount}`}
                </p>)
        }
    }

    const renderPreviousTenButton = () => {
        return (
            <li key="previousTenPage" className="page-item" onClick={handleClickPreviousTen} >
                <button type="button" className="page-link">{'<<'}</button>
            </li>
        )
    }

    const renderNextTenButton = () => {
        return (
            <li key="nextTenPage" className="page-item" onClick={handleClickNextTen} >
                <button type="button" className="page-link">{'>>'}</button>
            </li>
        )
    }

    return (
        <Fragment>
            {
                pagination !== undefined ?
                    <nav aria-label={ariaLabel}>
                        <div className="row">
                            <div className="col">
                                <ul className="pagination pagination-sm">
                                    {
                                        pagination.currentPage - 10 > 0 ? renderPreviousTenButton() : null
                                    }
                                    {
                                        pagination.currentPage > 1 ? renderPreviousButton() : null
                                    }
                                    {
                                        pages.map((page: number | string, index: number) => {
                                            if (page === DOTS) return (
                                                <li key={index} className="page-item disabled">
                                                    <span className="page-link">
                                                        {DOTS}
                                                        <span className="sr-only" />
                                                    </span>
                                                </li>
                                            );
                                            if (page === pagination.currentPage) return (
                                                <li key={index} className="page-item active">
                                                    <span className="page-link">
                                                        {page}
                                                        <span className="sr-only" />
                                                    </span>
                                                </li>
                                            );
                                            return (
                                                <li key={index} className="page-item" onClick={() => handleClick(Number(page))} >
                                                    <button type="button" className="page-link">{page}</button>
                                                </li>
                                            );
                                        })
                                    }
                                    {
                                        pagination.currentPage < pagination.totalPages ? renderNextButton() : null
                                    }
                                    {
                                        pagination.currentPage + 9 < pagination.totalPages ? renderNextTenButton() : null
                                    }
                                </ul>
                            </div>
                            <div className="col-md-auto">
                                {
                                    showCount ? renderItemCount() : null
                                }
                            </div>
                        </div>
                    </nav>
                    : null
            }
        </Fragment>
    );
}