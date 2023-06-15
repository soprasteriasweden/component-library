import * as React from 'react';
import { IEvent } from '../../models/IEvent';
import './EventLog.style.scss';
export interface IEventLog {
    id: string;
    events: IEvent[];
}
export declare const EventLog: React.FunctionComponent<IEventLog>;
