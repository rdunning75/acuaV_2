import { DefaultCrudRepository } from '@loopback/repository';
import { Users, UsersRelations } from '../models';
import { LocalhostDataSource } from '../datasources';
export declare class UsersRepository extends DefaultCrudRepository<Users, typeof Users.prototype.id, UsersRelations> {
    constructor(dataSource: LocalhostDataSource);
}
