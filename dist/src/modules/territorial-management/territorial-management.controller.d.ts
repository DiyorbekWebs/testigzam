import { UpdateResult } from 'typeorm';
import { CreateTerritorialManagementDto, UpdateTerritorialManagementDto } from './dto';
import { TerritorialManagement } from './territorial-management.entity';
import { TerritorialManagementService } from './territorial-management.service';
import { PaginationDto } from '../../infra/shared/dto';
export declare class TerritorialManagementController {
    private readonly territorialManagementService;
    constructor(territorialManagementService: TerritorialManagementService);
    getAll(route: string, query: PaginationDto): Promise<import("nestjs-typeorm-paginate").Pagination<TerritorialManagement, import("nestjs-typeorm-paginate").IPaginationMeta>>;
    getMe(id: string): Promise<TerritorialManagement>;
    saveData(data: CreateTerritorialManagementDto): Promise<import("typeorm").InsertResult>;
    changeData(data: UpdateTerritorialManagementDto, id: string): Promise<UpdateResult>;
    deleteData(id: string): Promise<import("typeorm").DeleteResult>;
}
