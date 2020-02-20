import { Entity } from '@loopback/repository';
export declare class Users extends Entity {
    id: number;
    username: string;
    password: string;
    fist_name: string;
    last_name: string;
    loc_id?: number;
    win_id?: number;
    constructor(data?: Partial<Users>);
}
export interface UsersRelations {
}
export declare type UsersWithRelations = Users & UsersRelations;
