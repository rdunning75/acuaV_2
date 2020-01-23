import { DefaultCrudRepository } from '@loopback/repository';
import { Tickethistory, TickethistoryRelations } from '../models';
import { MysqlDataSource } from '../datasources';
export declare class TickethistoryRepository extends DefaultCrudRepository<Tickethistory, typeof Tickethistory.prototype.tic_id, TickethistoryRelations> {
    constructor(dataSource: MysqlDataSource);
}
