import { DefaultCrudRepository } from '@loopback/repository';
import { Faq } from '../models';
import { MongoDataSource } from '../datasources';
export declare class FaqRepository extends DefaultCrudRepository<Faq, typeof Faq.prototype.id> {
    constructor(dataSource: MongoDataSource);
}
