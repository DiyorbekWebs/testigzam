import { FindOptionsWhere, Repository } from 'typeorm';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { UpdateAgencyDto, CreateAgencyDto } from './dto';
import { Agency } from './agency.entity';
export declare class AgencyService {
    private readonly agencyRepository;
    constructor(agencyRepository: Repository<Agency>);
    getAll(options: IPaginationOptions, where?: FindOptionsWhere<Agency>): Promise<Pagination<Agency>>;
    getOne(id: string): Promise<Agency>;
    deleteOne(id: string): Promise<import("typeorm").DeleteResult>;
    change(value: UpdateAgencyDto, id: string): Promise<import("typeorm").UpdateResult>;
    create(value: CreateAgencyDto): Promise<Agency>;
}
