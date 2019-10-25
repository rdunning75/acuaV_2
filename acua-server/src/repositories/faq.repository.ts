import {DefaultCrudRepository} from '@loopback/repository';
import {Faq} from '../models';
// import {MongoDataSource} from '../datasources';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class FaqRepository extends DefaultCrudRepository<
  Faq,
  typeof Faq.prototype.id
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Faq, dataSource);
  }
}
