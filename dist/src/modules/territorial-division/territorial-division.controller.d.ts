import { UpdateResult } from 'typeorm';
import { CreateTerritorialDivisionDto, UpdateTerritorialDivisionDto } from './dto';
import { TerritorialDivision } from './territorial-division.entity';
import { TerritorialDivisionService } from './territorial-division.service';
import { PaginationDto } from '../../infra/shared/dto';
export declare class TerritorialDivisionController {
    private readonly territorialDivisionService;
    constructor(territorialDivisionService: TerritorialDivisionService);
    getAll(route: string, query: PaginationDto): Promise<import("nestjs-typeorm-paginate").Pagination<TerritorialDivision, import("nestjs-typeorm-paginate").IPaginationMeta>>;
    getMe(id: string): Promise<TerritorialDivision>;
    saveData(data: CreateTerritorialDivisionDto): Promise<TerritorialDivision>;
    changeData(data: UpdateTerritorialDivisionDto, id: string): Promise<UpdateResult>;
    deleteData(id: string): Promise<import("typeorm").DeleteResult>;
}
