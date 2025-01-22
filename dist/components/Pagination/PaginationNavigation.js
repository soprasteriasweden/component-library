import * as React from "react";
import { Fragment } from "react";
const DOTS = '...';
// Helper method for creating a range of numbers
// range (1, 5) => [1, 2, 3, 4, 5]
const range = (from, to, step = 1) => {
    let i = from;
    const range = [];
    while (i <= to) {
        range.push(i);
        i += step;
    }
    return range;
};
export const PaginationNavigation = ({ pagination, ariaLabel, pageNeighbours, selectedPage, showCount = true }) => {
    const [pages, setPages] = React.useState([]);
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
        return (range(1, pagination === null || pagination === void 0 ? void 0 : pagination.totalPages));
    };
    React.useEffect(() => {
        if (pagination !== undefined && pagination.totalPages > 1) {
            setPages(fetchPageNumbers());
        }
        else {
            setPages([]);
        }
    }, [pagination]);
    const handleClick = (clickedPage) => {
        selectedPage(clickedPage);
    };
    const handleClickPrevious = () => {
        if (pagination !== undefined && pagination.currentPage > 1) {
            selectedPage(pagination.currentPage - 1);
        }
    };
    const handleClickNext = () => {
        if (pagination !== undefined && pagination.currentPage < pagination.totalPages) {
            selectedPage(pagination.currentPage + 1);
        }
    };
    const handleClickPreviousTen = () => {
        if (pagination !== undefined && pagination.currentPage - 10 > 0) {
            selectedPage(pagination.currentPage - 10);
        }
    };
    const handleClickNextTen = () => {
        if (pagination !== undefined && pagination.currentPage + 9 < pagination.totalPages) {
            selectedPage(pagination.currentPage + 10);
        }
    };
    const renderPreviousButton = () => {
        return (React.createElement("li", { key: "previousPage", className: "page-item", onClick: handleClickPrevious },
            React.createElement("button", { type: "button", className: "page-link" }, "F\u00F6reg\u00E5ende")));
    };
    const renderNextButton = () => {
        return (React.createElement("li", { key: "nextPage", className: "page-item", onClick: handleClickNext },
            React.createElement("button", { type: "button", className: "page-link" }, "N\u00E4sta")));
    };
    const renderItemCount = () => {
        if (pagination !== undefined) {
            const startItem = pagination.pageSize * (pagination.currentPage - 1) + 1;
            const endItem = Math.min(startItem + pagination.pageSize - 1, pagination.totalCount);
            return (React.createElement("p", { className: "text-right" }, `Visar ${startItem}-${endItem} av ${pagination.totalCount}`));
        }
    };
    const renderPreviousTenButton = () => {
        return (React.createElement("li", { key: "previousTenPage", className: "page-item", onClick: handleClickPreviousTen },
            React.createElement("button", { type: "button", className: "page-link" }, '<<')));
    };
    const renderNextTenButton = () => {
        return (React.createElement("li", { key: "nextTenPage", className: "page-item", onClick: handleClickNextTen },
            React.createElement("button", { type: "button", className: "page-link" }, '>>')));
    };
    return (React.createElement(Fragment, null, pagination !== undefined ?
        React.createElement("nav", { "aria-label": ariaLabel },
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col" },
                    React.createElement("ul", { className: "pagination pagination-sm" },
                        pagination.currentPage - 10 > 0 ? renderPreviousTenButton() : null,
                        pagination.currentPage > 1 ? renderPreviousButton() : null,
                        pages.map((page, index) => {
                            if (page === DOTS)
                                return (React.createElement("li", { key: index, className: "page-item disabled" },
                                    React.createElement("span", { className: "page-link" },
                                        DOTS,
                                        React.createElement("span", { className: "sr-only" }))));
                            if (page === pagination.currentPage)
                                return (React.createElement("li", { key: index, className: "page-item active" },
                                    React.createElement("span", { className: "page-link" },
                                        page,
                                        React.createElement("span", { className: "sr-only" }))));
                            return (React.createElement("li", { key: index, className: "page-item", onClick: () => handleClick(Number(page)) },
                                React.createElement("button", { type: "button", className: "page-link" }, page)));
                        }),
                        pagination.currentPage < pagination.totalPages ? renderNextButton() : null,
                        pagination.currentPage + 9 < pagination.totalPages ? renderNextTenButton() : null)),
                React.createElement("div", { className: "col-md-auto" }, showCount ? renderItemCount() : null)))
        : null));
};
