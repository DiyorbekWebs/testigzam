import { UpdateResult } from 'typeorm';
import { CreateVacancyDto, UpdateVacancyDto } from './dto';
import { Vacancy } from './vacancy.entity';
import { VacancyService } from './vacancy.service';
import { PaginationDto } from '../../infra/shared/dto';
export declare class VacancyController {
    private readonly vacancyService;
    constructor(vacancyService: VacancyService);
    getData(route: string, query: PaginationDto): Promise<import("nestjs-typeorm-paginate").Pagination<Vacancy, import("nestjs-typeorm-paginate").IPaginationMeta>>;
    getMe(id: string): Promise<Vacancy>;
    saveData(data: CreateVacancyDto): Promise<Vacancy>;
    changeData(positionData: UpdateVacancyDto, id: string): Promise<UpdateResult>;
    deleteData(id: string): Promise<import("typeorm").DeleteResult>;
}
