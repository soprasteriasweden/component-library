import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import { SortOrder } from '../../models/IPagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown, faSort } from '@fortawesome/free-solid-svg-icons';
import { SortTableContext } from './SortTableContext';
import "../../assets/styles/TableStyle.scss";
export const SortableTableHeader = ({ propertyToSortBy, headerText }) => {
    const { sortOrder, setSortOrder, setSelectedPropertyToSortBy, selectedPropertyToSortBy } = React.useContext(SortTableContext);
    const [icon, setIcon] = React.useState(faSort);
    React.useEffect(() => {
        if (propertyToSortBy === selectedPropertyToSortBy) {
            if (sortOrder === SortOrder.ascending) {
                setIcon(faSortUp);
            }
            else {
                setIcon(faSortDown);
            }
        }
        else {
            setIcon(faSort);
        }
    }, [sortOrder, selectedPropertyToSortBy]);
    const onSortClick = () => {
        if (setSortOrder && setSelectedPropertyToSortBy) {
            if (propertyToSortBy === selectedPropertyToSortBy) {
                setSortOrder(sortOrder === SortOrder.ascending ? SortOrder.descending : SortOrder.ascending);
            }
            else {
                setSortOrder(SortOrder.ascending);
            }
            setSelectedPropertyToSortBy(propertyToSortBy);
        }
    };
    return (_jsxs("th", { className: `sortable-column text-nowrap`, onClick: onSortClick, children: [headerText, " ", _jsx(FontAwesomeIcon, { icon: icon })] }));
};
