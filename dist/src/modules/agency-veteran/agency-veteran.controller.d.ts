import { CreateAgencyVeteranDto, UpdateAgencyVeteranDto } from './dto';
import { AgencyVeteran } from './agency-veteran.entity';
import { AgencyVeteranService } from './agency-veteran.service';
import { PaginationDto } from '../../infra/shared/dto';
export declare class AgencyVeteranController {
    private readonly agencyService;
    constructor(agencyService: AgencyVeteranService);
    getData(route: string, query: PaginationDto): Promise<import("nestjs-typeorm-paginate").Pagination<AgencyVeteran, import("nestjs-typeorm-paginate").IPaginationMeta>>;
    getMe(id: string): Promise<AgencyVeteran>;
    saveData(data: CreateAgencyVeteranDto): Promise<AgencyVeteran>;
    changeData(data: UpdateAgencyVeteranDto, id: string): Promise<import("typeorm").UpdateResult>;
    deleteData(id: string): Promise<import("typeorm").DeleteResult>;
}
