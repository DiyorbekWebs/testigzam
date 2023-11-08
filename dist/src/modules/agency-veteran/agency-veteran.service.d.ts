import { Repository } from 'typeorm';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { UpdateAgencyVeteranDto, CreateAgencyVeteranDto } from './dto';
import { AgencyVeteran } from './agency-veteran.entity';
export declare class AgencyVeteranService {
    private readonly agencyVeteranRepository;
    constructor(agencyVeteranRepository: Repository<AgencyVeteran>);
    getAll(options: IPaginationOptions): Promise<Pagination<AgencyVeteran>>;
    getOne(id: string): Promise<AgencyVeteran>;
    deleteOne(id: string): Promise<import("typeorm").DeleteResult>;
    change(value: UpdateAgencyVeteranDto, id: string): Promise<import("typeorm").UpdateResult>;
    create(value: CreateAgencyVeteranDto): Promise<AgencyVeteran>;
}
