import { UpdateResult } from 'typeorm';
import { CreateStatisticDto, UpdateStatisticDto } from './dto';
import { Statistic } from './statistic.entity';
import { StatisticService } from './statistic.service';
import { PaginationDto } from '../../infra/shared/dto';
export declare class StatisticController {
    private readonly statisticService;
    constructor(statisticService: StatisticService);
    getaAll(route: string, query: PaginationDto): Promise<import("nestjs-typeorm-paginate").Pagination<Statistic, import("nestjs-typeorm-paginate").IPaginationMeta>>;
    getMe(id: string): Promise<Statistic>;
    saveData(data: CreateStatisticDto): Promise<Statistic>;
    changeData(data: UpdateStatisticDto, id: string): Promise<UpdateResult>;
    deleteData(id: string): Promise<import("typeorm").DeleteResult>;
}
