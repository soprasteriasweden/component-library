import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
        return (_jsx("li", { className: "page-item", onClick: handleClickPrevious, children: _jsx("button", { type: "button", className: "page-link", children: "F\u00F6reg\u00E5ende" }) }, "previousPage"));
    };
    const renderNextButton = () => {
        return (_jsx("li", { className: "page-item", onClick: handleClickNext, children: _jsx("button", { type: "button", className: "page-link", children: "N\u00E4sta" }) }, "nextPage"));
    };
    const renderItemCount = () => {
        if (pagination !== undefined) {
            const startItem = pagination.pageSize * (pagination.currentPage - 1) + 1;
            const endItem = Math.min(startItem + pagination.pageSize - 1, pagination.totalCount);
            return (_jsx("p", { className: "text-right", children: `Visar ${startItem}-${endItem} av ${pagination.totalCount}` }));
        }
    };
    const renderPreviousTenButton = () => {
        return (_jsx("li", { className: "page-item", onClick: handleClickPreviousTen, children: _jsx("button", { type: "button", className: "page-link", children: '<<' }) }, "previousTenPage"));
    };
    const renderNextTenButton = () => {
        return (_jsx("li", { className: "page-item", onClick: handleClickNextTen, children: _jsx("button", { type: "button", className: "page-link", children: '>>' }) }, "nextTenPage"));
    };
    return (_jsx(Fragment, { children: pagination !== undefined ?
            _jsx("nav", { "aria-label": ariaLabel, children: _jsxs("div", { className: "row", children: [_jsx("div", { className: "col", children: _jsxs("ul", { className: "pagination pagination-sm", children: [pagination.currentPage - 10 > 0 ? renderPreviousTenButton() : null, pagination.currentPage > 1 ? renderPreviousButton() : null, pages.map((page, index) => {
                                        if (page === DOTS)
                                            return (_jsx("li", { className: "page-item disabled", children: _jsxs("span", { className: "page-link", children: [DOTS, _jsx("span", { className: "sr-only" })] }) }, index));
                                        if (page === pagination.currentPage)
                                            return (_jsx("li", { className: "page-item active", children: _jsxs("span", { className: "page-link", children: [page, _jsx("span", { className: "sr-only" })] }) }, index));
                                        return (_jsx("li", { className: "page-item", onClick: () => handleClick(Number(page)), children: _jsx("button", { type: "button", className: "page-link", children: page }) }, index));
                                    }), pagination.currentPage < pagination.totalPages ? renderNextButton() : null, pagination.currentPage + 9 < pagination.totalPages ? renderNextTenButton() : null] }) }), _jsx("div", { className: "col-md-auto", children: showCount ? renderItemCount() : null })] }) })
            : null }));
};
