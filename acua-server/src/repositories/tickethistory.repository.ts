import {DefaultCrudRepository} from '@loopback/repository';
import {Tickethistory, TickethistoryRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TickethistoryRepository extends DefaultCrudRepository<
  Tickethistory,
  typeof Tickethistory.prototype.tic_id,
  TickethistoryRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Tickethistory, dataSource);
  }
}
