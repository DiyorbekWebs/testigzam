import { Repository } from 'typeorm';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { UpdateTerritorialManagementDto, CreateTerritorialManagementDto } from './dto';
import { TerritorialManagement } from './territorial-management.entity';
export declare class TerritorialManagementService {
    private readonly territorialManagementRepository;
    constructor(territorialManagementRepository: Repository<TerritorialManagement>);
    getOne(id: string): Promise<TerritorialManagement>;
    getAll(options: IPaginationOptions): Promise<Pagination<TerritorialManagement>>;
    deleteOne(id: string): Promise<import("typeorm").DeleteResult>;
    change(value: UpdateTerritorialManagementDto, id: string): Promise<import("typeorm").UpdateResult>;
    create(value: CreateTerritorialManagementDto): Promise<import("typeorm").InsertResult>;
}
