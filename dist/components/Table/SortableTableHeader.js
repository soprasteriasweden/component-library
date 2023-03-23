import * as React from 'react';
import { SortOrder } from '../../models/IPagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown, faSort } from '@fortawesome/free-solid-svg-icons';
import { SortTableContext } from './SortTableContext';
import "./TableStyle.scss";
export var SortableTableHeader = function (_a) {
    var propertyToSortBy = _a.propertyToSortBy, headerText = _a.headerText;
    var _b = React.useContext(SortTableContext), sortOrder = _b.sortOrder, setSortOrder = _b.setSortOrder, setSelectedPropertyToSortBy = _b.setSelectedPropertyToSortBy, selectedPropertyToSortBy = _b.selectedPropertyToSortBy;
    var _c = React.useState(faSort), icon = _c[0], setIcon = _c[1];
    React.useEffect(function () {
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
    var onSortClick = function () {
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
    return (React.createElement("th", { className: "sortable-column text-nowrap", onClick: onSortClick },
        headerText,
        " ",
        React.createElement(FontAwesomeIcon, { icon: icon })));
};
