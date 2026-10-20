import * as React from 'react';
import { IEvent } from '../../models/IEvent';
import '../../assets/styles/EventLog.style.scss';
export interface IEventLog {
    id: string;
    events: IEvent[];
}
export declare const EventLog: React.FunctionComponent<IEventLog>;
