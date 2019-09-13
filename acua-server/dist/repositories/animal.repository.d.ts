import { DefaultCrudRepository } from '@loopback/repository';
import { Animal } from '../models';
import { MongoDataSource } from '../datasources';
export declare class AnimalRepository extends DefaultCrudRepository<Animal, typeof Animal.prototype.id> {
    constructor(dataSource: MongoDataSource);
}
