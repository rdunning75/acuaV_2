import { DefaultCrudRepository } from '@loopback/repository';
import { Qticket, QticketRelations } from '../models';
import { LocalhostDataSource } from '../datasources';
export declare class QticketRepository extends DefaultCrudRepository<Qticket, typeof Qticket.prototype.tic_id, QticketRelations> {
    constructor(dataSource: LocalhostDataSource);
}
