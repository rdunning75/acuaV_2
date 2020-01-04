import { Count, Filter, Where } from '@loopback/repository';
import { TicketHistory } from '../models';
import { TicketHistoryRepository } from '../repositories';
export declare class TicketHistoryController {
    ticketHistoryRepository: TicketHistoryRepository;
    constructor(ticketHistoryRepository: TicketHistoryRepository);
    create(ticketHistory: Omit<TicketHistory, 'id'>): Promise<TicketHistory>;
    count(where?: Where<TicketHistory>): Promise<Count>;
    find(filter?: Filter<TicketHistory>): Promise<TicketHistory[]>;
    updateAll(ticketHistory: TicketHistory, where?: Where<TicketHistory>): Promise<Count>;
    findById(id: number): Promise<TicketHistory>;
    updateById(id: number, ticketHistory: TicketHistory): Promise<void>;
    replaceById(id: number, ticketHistory: TicketHistory): Promise<void>;
    deleteById(id: number): Promise<void>;
}
