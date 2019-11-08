import { DefaultCrudRepository } from '@loopback/repository';
import { Animal } from '../models';
//import { MongoDataSource } from '../datasources';
import { MysqlDataSource } from '../datasources';

import { inject } from '@loopback/core';

export class AnimalRepository extends DefaultCrudRepository <Animal, typeof Animal.prototype.id > {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Animal, dataSource);
  }
}
