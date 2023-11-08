import { Repository } from 'typeorm';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { UpdateTerritorialDivisionDto, CreateTerritorialDivisionDto } from './dto';
import { TerritorialDivision } from './territorial-division.entity';
export declare class TerritorialDivisionService {
    private readonly territorialDivisionRepository;
    constructor(territorialDivisionRepository: Repository<TerritorialDivision>);
    getOne(id: string): Promise<TerritorialDivision>;
    getAll(options: IPaginationOptions): Promise<Pagination<TerritorialDivision>>;
    deleteOne(id: string): Promise<import("typeorm").DeleteResult>;
    change(value: UpdateTerritorialDivisionDto, id: string): Promise<import("typeorm").UpdateResult>;
    create(value: CreateTerritorialDivisionDto): Promise<TerritorialDivision>;
}
