import {DefaultCrudRepository} from '@loopback/repository';
import {Ticket} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TicketRepository extends DefaultCrudRepository<
  Ticket,
  typeof Ticket.prototype.id
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Ticket, dataSource);
  }
}
