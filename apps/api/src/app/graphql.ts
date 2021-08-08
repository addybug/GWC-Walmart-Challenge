
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface EventInput {
    invite: string;
    name: string;
    description: string;
    startTime: string;
    endTime: string;
    type: string;
    link?: Nullable<string>;
    mask?: Nullable<string>;
    test?: Nullable<string>;
    guests: string;
    color: string;
}

export interface EventQueryInput {
    id?: Nullable<string>;
}

export interface RecQueryInput {
    type?: Nullable<string>;
}

export interface Event {
    __typename?: 'Event';
    id: string;
    invite: string;
    name: string;
    description: string;
    startTime: string;
    endTime: string;
    type: string;
    link?: Nullable<string>;
    mask?: Nullable<string>;
    test?: Nullable<string>;
    guests: string;
    color: string;
}

export interface IMutation {
    __typename?: 'IMutation';
    addEvent(event: EventInput): EventResponse | Promise<EventResponse>;
    name(): Nullable<string> | Promise<Nullable<string>>;
}

export interface EventResponse {
    __typename?: 'EventResponse';
    id: string;
}

export interface IQuery {
    __typename?: 'IQuery';
    events(criteria?: Nullable<EventQueryInput>): Nullable<Nullable<Event>[]> | Promise<Nullable<Nullable<Event>[]>>;
    recommendations(criteria: RecQueryInput): Nullable<Recommendation> | Promise<Nullable<Recommendation>>;
    name(): Nullable<string> | Promise<Nullable<string>>;
}

export interface Recommendation {
    __typename?: 'Recommendation';
    type?: Nullable<string>;
    recs?: Nullable<Nullable<Rec>[]>;
}

export interface Rec {
    __typename?: 'Rec';
    img?: Nullable<string>;
    name?: Nullable<string>;
    price?: Nullable<string>;
    link?: Nullable<string>;
}

type Nullable<T> = T | null;
