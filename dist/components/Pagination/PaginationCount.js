import * as React from "react";
export var PaginationCount = function (_a) {
    var _b = _a.totalCount, totalCount = _b === void 0 ? 0 : _b, _c = _a.itemsPerPage, itemsPerPage = _c === void 0 ? 0 : _c, _d = _a.currentPage, currentPage = _d === void 0 ? 0 : _d;
    var _e = React.useState(0), startItem = _e[0], setStartItem = _e[1];
    var _f = React.useState(0), endItem = _f[0], setEndItem = _f[1];
    React.useEffect(function () {
        var startItem = itemsPerPage * (currentPage - 1) + 1;
        var endItem = startItem + itemsPerPage - 1;
        setStartItem(startItem);
        setEndItem(endItem > totalCount ? totalCount : endItem);
    }, [totalCount, itemsPerPage, currentPage]);
    return (React.createElement("p", { className: "text-right" }, "Visar ".concat(startItem, "-").concat(endItem, " av ").concat(totalCount)));
};
