import * as React from 'react';
import { IEvent } from '../../models/IEvent';
import { Table } from '../Table/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import '../../assets/styles/EventLog.style.scss';

export interface IEventLog {
    id: string;
    events: IEvent[];
}

export const EventLog: React.FunctionComponent<IEventLog> = ({ id, events }) => {

    const [expanded, setExpanded] = React.useState<boolean>(false);

    const onExpandButtonClick = () => {
        const expandButtonState = document.getElementById('openEventLogButton')?.getAttribute('aria-expanded');
        if (expandButtonState) {
            setExpanded(expandButtonState === 'true');
        }
    }

    const dateTimeToDateTimeString = (dateTime: Date | undefined | null) => {
        if (dateTime === undefined || dateTime === null) {
            return "";
        }
        const date = dateTime.toString().slice(0, 10);
        const time = dateTime.toString().slice(11, 16);
        return `${date} ${time}`;
    }

    return (
        <section id={id} className="event-log">
            <div className="row">
                <h5 className="col-6">Händelselogg</h5>
                <div className="col-6 text text-right">
                    <button type="button" id="openEventLogButton" className="btn btn-sm btn-link" data-toggle="collapse" data-target="#eventLogCollapse" aria-expanded="false" aria-controls="eventLogCollapse" onClick={onExpandButtonClick} >
                        {
                            expanded ?
                                <>
                                    Dölj <FontAwesomeIcon tabIndex={-1} icon={faCaretUp} size="lg" />
                                </>
                                :
                                <>
                                    Visa <FontAwesomeIcon tabIndex={-1} icon={faCaretDown} size="lg" />
                                </>
                        }
                    </button>
                </div>
            </div>

            <div className="collapse" id="eventLogCollapse">
                <div className="row">
                    <div className="col-12">
                        <Table>
                            <thead>
                                <tr>
                                    <th style={{ width: '15%' }}>Datum</th>
                                    <th style={{ width: '60%' }}>Händelse</th>
                                    <th style={{ width: '25%' }}>Användare</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    events.length > 0 ?
                                        <>
                                            {
                                                events.map((event, key) =>
                                                    <tr key={key} >
                                                        <td>{dateTimeToDateTimeString(event.date)}</td>
                                                        <td>{event.eventCategory}</td>
                                                        <td>{event.user}</td>
                                                    </tr>
                                                )
                                            }
                                        </>
                                        :
                                        <tr><td colSpan={3}>Det finns inga händelser</td></tr>
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </section>
    );
}