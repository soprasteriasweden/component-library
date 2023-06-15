var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import * as React from "react";
import { Fragment } from "react";
var DOTS = '...';
// Helper method for creating a range of numbers
// range (1, 5) => [1, 2, 3, 4, 5]
var range = function (from, to, step) {
    if (step === void 0) { step = 1; }
    var i = from;
    var range = [];
    while (i <= to) {
        range.push(i);
        i += step;
    }
    return range;
};
export var PaginationNavigation = function (_a) {
    var pagination = _a.pagination, ariaLabel = _a.ariaLabel, pageNeighbours = _a.pageNeighbours, selectedPage = _a.selectedPage, _b = _a.showCount, showCount = _b === void 0 ? true : _b;
    var _c = React.useState([]), pages = _c[0], setPages = _c[1];
    var fetchPageNumbers = function () {
        /**
         * totalNumbers: the total page numbers to show on the control
         * totalBlocks: totalNumbers + 2 to cover for the (...) controls
         */
        var totalNumbers = (pageNeighbours * 2) + 3;
        var totalBlocks = totalNumbers + 2;
        if (pagination !== undefined && pagination.totalPages > totalBlocks) {
            var startPage = Math.max(2, pagination.currentPage - pageNeighbours);
            var endPage = Math.min(pagination.totalPages - 1, pagination.currentPage + pageNeighbours);
            var pages_1 = range(startPage, endPage);
            /**
             * hasLeftSpill: has hidden pages to the left
             * hasRightSpill: has hidden pages to the right
             * spillOffset: number of hidden pages either to the left or to the right
             */
            var hasLeftSpill = startPage > 2;
            var hasRightSpill = (pagination.totalPages - endPage) > 1;
            var spillOffset = totalNumbers - (pages_1.length + 1);
            switch (true) {
                // handle: (1) (...) {5 6} [7] {8 9} (10)
                case (hasLeftSpill && !hasRightSpill): {
                    var extraPages = range(startPage - spillOffset, startPage - 1);
                    pages_1 = __spreadArrays([DOTS], extraPages, pages_1);
                    break;
                }
                // handle: (1) {2 3} [4] {5 6} (...) (10)
                case (!hasLeftSpill && hasRightSpill): {
                    var extraPages = range(endPage + 1, endPage + spillOffset);
                    pages_1 = __spreadArrays(pages_1, extraPages, [DOTS]);
                    break;
                }
                // handle: (1) (...) {4 5} [6] {7 8} (...) (10)
                case (hasLeftSpill && hasRightSpill):
                default: {
                    pages_1 = __spreadArrays([DOTS], pages_1, [DOTS]);
                    break;
                }
            }
            return __spreadArrays([1], pages_1, [pagination.totalPages]);
        }
        return (range(1, pagination === null || pagination === void 0 ? void 0 : pagination.totalPages));
    };
    React.useEffect(function () {
        if (pagination !== undefined && pagination.totalPages > 1) {
            setPages(fetchPageNumbers());
        }
        else {
            setPages([]);
        }
    }, [pagination]);
    var handleClick = function (clickedPage) {
        selectedPage(clickedPage);
    };
    var handleClickPrevious = function () {
        if (pagination !== undefined && pagination.currentPage > 1) {
            selectedPage(pagination.currentPage - 1);
        }
    };
    var handleClickNext = function () {
        if (pagination !== undefined && pagination.currentPage < pagination.totalPages) {
            selectedPage(pagination.currentPage + 1);
        }
    };
    var handleClickPreviousTen = function () {
        if (pagination !== undefined && pagination.currentPage - 10 > 0) {
            selectedPage(pagination.currentPage - 10);
        }
    };
    var handleClickNextTen = function () {
        if (pagination !== undefined && pagination.currentPage + 9 < pagination.totalPages) {
            selectedPage(pagination.currentPage + 10);
        }
    };
    var renderPreviousButton = function () {
        return (React.createElement("li", { key: "previousPage", className: "page-item", onClick: handleClickPrevious },
            React.createElement("button", { type: "button", className: "page-link" }, "F\u00F6reg\u00E5ende")));
    };
    var renderNextButton = function () {
        return (React.createElement("li", { key: "nextPage", className: "page-item", onClick: handleClickNext },
            React.createElement("button", { type: "button", className: "page-link" }, "N\u00E4sta")));
    };
    var renderItemCount = function () {
        if (pagination !== undefined) {
            var startItem = pagination.pageSize * (pagination.currentPage - 1) + 1;
            var endItem = Math.min(startItem + pagination.pageSize - 1, pagination.totalCount);
            return (React.createElement("p", { className: "text-right" }, "Visar " + startItem + "-" + endItem + " av " + pagination.totalCount));
        }
    };
    var renderPreviousTenButton = function () {
        return (React.createElement("li", { key: "previousTenPage", className: "page-item", onClick: handleClickPreviousTen },
            React.createElement("button", { type: "button", className: "page-link" }, '<<')));
    };
    var renderNextTenButton = function () {
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
                        pages.map(function (page, index) {
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
                            return (React.createElement("li", { key: index, className: "page-item", onClick: function () { return handleClick(Number(page)); } },
                                React.createElement("button", { type: "button", className: "page-link" }, page)));
                        }),
                        pagination.currentPage < pagination.totalPages ? renderNextButton() : null,
                        pagination.currentPage + 9 < pagination.totalPages ? renderNextTenButton() : null)),
                React.createElement("div", { className: "col-md-auto" }, showCount ? renderItemCount() : null)))
        : null));
};
