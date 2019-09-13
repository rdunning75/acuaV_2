import { Count, Filter, Where } from '@loopback/repository';
import { Faq } from '../models';
import { FaqRepository, UserRepository } from '../repositories';
export declare class FaqController {
    faqRepository: FaqRepository;
    userRepository: UserRepository;
    static windowGen: number;
    static numberGen: number;
    constructor(faqRepository: FaqRepository, userRepository: UserRepository);
    create(faq: Faq): Promise<Faq | null>;
    count(where?: Where): Promise<Count>;
    find(filter?: Filter): Promise<Faq[]>;
    updateAll(faq: Faq, where?: Where): Promise<Count>;
    findById(id: string): Promise<Faq>;
    updateById(id: string, faq: Faq): Promise<void>;
    replaceById(id: string, faq: Faq): Promise<void>;
    deleteById(id: string): Promise<void>;
}
