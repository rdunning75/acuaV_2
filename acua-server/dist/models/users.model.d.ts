import { Entity } from '@loopback/repository';
export declare class Users extends Entity {
    id: number;
    username: string;
    password: string;
    first_name: string;
    last_name: string;
    [prop: string]: any;
    constructor(data?: Partial<Users>);
}
export interface UsersRelations {
}
export declare type UsersWithRelations = Users & UsersRelations;
