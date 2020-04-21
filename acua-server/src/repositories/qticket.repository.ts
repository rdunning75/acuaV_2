import {DefaultCrudRepository} from '@loopback/repository';
import {Qticket, QticketRelations} from '../models';
import {LocalhostDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class QticketRepository extends DefaultCrudRepository<Qticket,
    typeof Qticket.prototype.tic_id,
    QticketRelations> {
    constructor(
        @inject('datasources.localhost') dataSource: LocalhostDataSource,
    ) {
        super(Qticket, dataSource);
    }
}
