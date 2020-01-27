import { Entity } from '@loopback/repository';
export declare class TicketHistory extends Entity {
    tic_id: number;
    user_id: number;
    loc_id: number;
    win_id: number;
    time_created: string;
    time_serviced: string;
    serviced: boolean;
    first_name: string;
    last_name: string;
    reason_of_visit: string;
    user_notes?: string;
    constructor(data?: Partial<TicketHistory>);
}
export interface TicketHistoryRelations {
}
export declare type TicketHistoryWithRelations = TicketHistory & TicketHistoryRelations;
