import { Repository } from 'typeorm';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { UpdateStatisticDto, CreateStatisticDto } from './dto';
import { Statistic } from './statistic.entity';
export declare class StatisticService {
    private readonly statisticRepository;
    constructor(statisticRepository: Repository<Statistic>);
    getAll(options: IPaginationOptions): Promise<Pagination<Statistic>>;
    getOne(id: string): Promise<Statistic>;
    deleteOne(id: string): Promise<import("typeorm").DeleteResult>;
    change(value: UpdateStatisticDto, id: string): Promise<import("typeorm").UpdateResult>;
    create(value: CreateStatisticDto): Promise<Statistic>;
}
