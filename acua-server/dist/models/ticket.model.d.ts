import { Entity } from '@loopback/repository';
export declare class Ticket extends Entity {
    id?: string;
    number: number;
    index_: number;
    phone: string;
    name: string;
    query: string;
    location: string;
    window: number;
    strikes: number;
    isComplete: boolean;
    constructor(data?: Partial<Ticket>);
}
