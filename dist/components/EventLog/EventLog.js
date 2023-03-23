import * as React from 'react';
import { Table } from '../Table/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import './EventLog.style.scss';
export var EventLog = function (_a) {
    var id = _a.id, events = _a.events;
    var _b = React.useState(false), expanded = _b[0], setExpanded = _b[1];
    var onExpandButtonClick = function () {
        var _a;
        var expandButtonState = (_a = document.getElementById('openEventLogButton')) === null || _a === void 0 ? void 0 : _a.getAttribute('aria-expanded');
        if (expandButtonState) {
            setExpanded(expandButtonState === 'true');
        }
    };
    var dateTimeToDateTimeString = function (dateTime) {
        if (dateTime === undefined || dateTime === null) {
            return "";
        }
        var date = dateTime.toString().slice(0, 10);
        var time = dateTime.toString().slice(11, 16);
        return "".concat(date, " ").concat(time);
    };
    return (React.createElement("section", { id: id, className: "event-log" },
        React.createElement("div", { className: "row" },
            React.createElement("h5", { className: "col-6" }, "H\u00E4ndelselogg"),
            React.createElement("div", { className: "col-6 text text-right" },
                React.createElement("button", { type: "button", id: "openEventLogButton", className: "btn btn-sm btn-link", "data-toggle": "collapse", "data-target": "#eventLogCollapse", "aria-expanded": "false", "aria-controls": "eventLogCollapse", onClick: onExpandButtonClick }, expanded ?
                    React.createElement(React.Fragment, null,
                        "D\u00F6lj ",
                        React.createElement(FontAwesomeIcon, { tabIndex: -1, icon: faCaretUp, size: "lg" }))
                    :
                        React.createElement(React.Fragment, null,
                            "Visa ",
                            React.createElement(FontAwesomeIcon, { tabIndex: -1, icon: faCaretDown, size: "lg" }))))),
        React.createElement("div", { className: "collapse", id: "eventLogCollapse" },
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-12" },
                    React.createElement(Table, null,
                        React.createElement("thead", null,
                            React.createElement("tr", null,
                                React.createElement("th", { style: { width: '15%' } }, "Datum"),
                                React.createElement("th", { style: { width: '60%' } }, "H\u00E4ndelse"),
                                React.createElement("th", { style: { width: '25%' } }, "Anv\u00E4ndare"))),
                        React.createElement("tbody", null, events.length > 0 ?
                            React.createElement(React.Fragment, null, events.map(function (event, key) {
                                return React.createElement("tr", { key: key },
                                    React.createElement("td", null, dateTimeToDateTimeString(event.date)),
                                    React.createElement("td", null, event.eventCategory),
                                    React.createElement("td", null, event.user));
                            }))
                            :
                                React.createElement("tr", null,
                                    React.createElement("td", { colSpan: 3 }, "Det finns inga h\u00E4ndelser")))))))));
};
