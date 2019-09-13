import { Entity } from '@loopback/repository';
export declare class Faq extends Entity {
    id?: string;
    index?: number;
    query: string;
    answer?: string;
    window?: number;
    isComplete?: boolean;
    constructor(data?: Partial<Faq>);
}
