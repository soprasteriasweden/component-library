import * as React from "react";

export const PaginationCount = ({ totalCount = 0, itemsPerPage = 0, currentPage = 0 }) => {

    const [startItem, setStartItem] = React.useState(0);

    const [endItem, setEndItem] = React.useState(0);

    React.useEffect(() => {

        const startItem = itemsPerPage * (currentPage - 1) + 1;

        const endItem = startItem + itemsPerPage - 1;

        setStartItem(startItem);

        setEndItem(endItem > totalCount ? totalCount : endItem);

    }, [totalCount, itemsPerPage, currentPage]);

    return (React.createElement("p", { className: "text-right" }, `Visar ${startItem}-${endItem} av ${totalCount}`));

};

