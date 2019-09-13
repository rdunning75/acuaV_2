import { Count, Filter, Where } from '@loopback/repository';
import { Animal } from '../models';
import { AnimalRepository } from '../repositories';
export declare class AnimalController {
    animalRepository: AnimalRepository;
    constructor(animalRepository: AnimalRepository);
    create(animal: Animal): Promise<Animal>;
    count(where?: Where): Promise<Count>;
    find(filter?: Filter): Promise<Animal[]>;
    updateAll(animal: Animal, where?: Where): Promise<Count>;
    findById(id: string): Promise<Animal>;
    updateById(id: string, animal: Animal): Promise<void>;
    replaceById(id: string, animal: Animal): Promise<void>;
    deleteById(id: string): Promise<void>;
}
