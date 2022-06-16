import * as React from "react";

interface IPaginationCount {
    totalCount?: number;
    itemsPerPage?: number;
    currentPage?: number;
}

export const PaginationCount: React.FunctionComponent<IPaginationCount> = ({ totalCount = 0, itemsPerPage = 0, currentPage = 0 }) => {
    const [startItem, setStartItem] = React.useState<number>(0);
    const [endItem, setEndItem] = React.useState<number>(0);

    React.useEffect(() => {

        const startItem = itemsPerPage * (currentPage - 1) + 1;
        const endItem = startItem + itemsPerPage - 1;
        setStartItem(startItem);
        setEndItem(endItem > totalCount ? totalCount : endItem);
    }, [totalCount, itemsPerPage, currentPage])

    return (
        <p className="text-right">
            {`Visar ${startItem}-${endItem} av ${totalCount}`}
        </p>
    )
}