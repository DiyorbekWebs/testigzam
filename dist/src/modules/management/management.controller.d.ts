import { UpdateResult } from 'typeorm';
import { CreateManagementDto, UpdateManagementDto } from './dto';
import { Management } from './management.entity';
import { ManagementService } from './management.service';
import { PaginationDto } from '../../infra/shared/dto';
export declare class ManagementController {
    private readonly managementService;
    constructor(managementService: ManagementService);
    getManagement(route: string, query: PaginationDto): Promise<import("nestjs-typeorm-paginate").Pagination<Management, import("nestjs-typeorm-paginate").IPaginationMeta>>;
    getCentralApparatus(route: string, query: PaginationDto): Promise<import("nestjs-typeorm-paginate").Pagination<Management, import("nestjs-typeorm-paginate").IPaginationMeta>>;
    getMe(id: string): Promise<Management>;
    saveData(data: CreateManagementDto): Promise<Management>;
    changeData(data: UpdateManagementDto, id: string): Promise<UpdateResult>;
    deleteData(id: string): Promise<import("typeorm").DeleteResult>;
}
