import { FindOptionsWhere, Repository } from 'typeorm';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { UpdateVacancyDto, CreateVacancyDto } from './dto';
import { Vacancy } from './vacancy.entity';
export declare class VacancyService {
    private readonly vacancyRepository;
    constructor(vacancyRepository: Repository<Vacancy>);
    getAll(options: IPaginationOptions, where?: FindOptionsWhere<Vacancy>): Promise<Pagination<Vacancy>>;
    getOne(id: string): Promise<Vacancy>;
    deleteOne(id: string): Promise<import("typeorm").DeleteResult>;
    change(value: UpdateVacancyDto, id: string): Promise<import("typeorm").UpdateResult>;
    create(value: CreateVacancyDto): Promise<Vacancy>;
}
