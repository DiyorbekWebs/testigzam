import { Repository } from 'typeorm';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { UpdateManagementDto, CreateManagementDto } from './dto';
import { Management } from './management.entity';
export declare class ManagementService {
    private readonly managementRepository;
    constructor(managementRepository: Repository<Management>);
    getOne(id: string): Promise<Management>;
    getManagement(options: IPaginationOptions): Promise<Pagination<Management>>;
    getCentralApparatus(options: IPaginationOptions): Promise<Pagination<Management>>;
    deleteOne(id: string): Promise<import("typeorm").DeleteResult>;
    change(value: UpdateManagementDto, id: string): Promise<import("typeorm").UpdateResult>;
    create(value: CreateManagementDto): Promise<Management>;
}
