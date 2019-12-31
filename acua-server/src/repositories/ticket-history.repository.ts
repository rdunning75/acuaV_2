import {DefaultCrudRepository} from '@loopback/repository';
import {TicketHistory, TicketHistoryRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TicketHistoryRepository extends DefaultCrudRepository<
  TicketHistory,
  typeof TicketHistory.prototype.tic_iid,
  TicketHistoryRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(TicketHistory, dataSource);
  }
}
