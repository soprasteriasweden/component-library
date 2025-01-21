import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import { Table } from '../Table/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import '../../assets/styles/EventLog.style.scss';
export const EventLog = ({ id, events }) => {
    const [expanded, setExpanded] = React.useState(false);
    const onExpandButtonClick = () => {
        var _a;
        const expandButtonState = (_a = document.getElementById('openEventLogButton')) === null || _a === void 0 ? void 0 : _a.getAttribute('aria-expanded');
        if (expandButtonState) {
            setExpanded(expandButtonState === 'true');
        }
    };
    const dateTimeToDateTimeString = (dateTime) => {
        if (dateTime === undefined || dateTime === null) {
            return "";
        }
        const date = dateTime.toString().slice(0, 10);
        const time = dateTime.toString().slice(11, 16);
        return `${date} ${time}`;
    };
    return (_jsxs("section", { id: id, className: "event-log", children: [_jsxs("div", { className: "row", children: [_jsx("h5", { className: "col-6", children: "H\u00E4ndelselogg" }), _jsx("div", { className: "col-6 text text-right", children: _jsx("button", { type: "button", id: "openEventLogButton", className: "btn btn-sm btn-link", "data-toggle": "collapse", "data-target": "#eventLogCollapse", "aria-expanded": "false", "aria-controls": "eventLogCollapse", onClick: onExpandButtonClick, children: expanded ?
                                _jsxs(_Fragment, { children: ["D\u00F6lj ", _jsx(FontAwesomeIcon, { tabIndex: -1, icon: faCaretUp, size: "lg" })] })
                                :
                                    _jsxs(_Fragment, { children: ["Visa ", _jsx(FontAwesomeIcon, { tabIndex: -1, icon: faCaretDown, size: "lg" })] }) }) })] }), _jsx("div", { className: "collapse", id: "eventLogCollapse", children: _jsx("div", { className: "row", children: _jsx("div", { className: "col-12", children: _jsxs(Table, { children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { style: { width: '15%' }, children: "Datum" }), _jsx("th", { style: { width: '60%' }, children: "H\u00E4ndelse" }), _jsx("th", { style: { width: '25%' }, children: "Anv\u00E4ndare" })] }) }), _jsx("tbody", { children: events.length > 0 ?
                                        _jsx(_Fragment, { children: events.map((event, key) => _jsxs("tr", { children: [_jsx("td", { children: dateTimeToDateTimeString(event.date) }), _jsx("td", { children: event.eventCategory }), _jsx("td", { children: event.user })] }, key)) })
                                        :
                                            _jsx("tr", { children: _jsx("td", { colSpan: 3, children: "Det finns inga h\u00E4ndelser" }) }) })] }) }) }) })] }));
};
