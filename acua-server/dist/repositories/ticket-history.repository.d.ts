import { DefaultCrudRepository } from '@loopback/repository';
import { TicketHistory, TicketHistoryRelations } from '../models';
import { MysqlDataSource } from '../datasources';
export declare class TicketHistoryRepository extends DefaultCrudRepository<TicketHistory, typeof TicketHistory.prototype.tic_id, TicketHistoryRelations> {
    constructor(dataSource: MysqlDataSource);
}
