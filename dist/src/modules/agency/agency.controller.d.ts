import { CreateAgencyDto, UpdateAgencyDto } from './dto';
import { Agency } from './agency.entity';
import { AgencyService } from './agency.service';
import { PaginationDto } from '../../infra/shared/dto';
export declare class AgencyController {
    private readonly agencyService;
    constructor(agencyService: AgencyService);
    getData(route: string, query: PaginationDto): Promise<import("nestjs-typeorm-paginate").Pagination<Agency, import("nestjs-typeorm-paginate").IPaginationMeta>>;
    getMe(id: string): Promise<Agency>;
    saveData(data: CreateAgencyDto): Promise<Agency>;
    changeData(data: UpdateAgencyDto, id: string): Promise<import("typeorm").UpdateResult>;
    deleteData(id: string): Promise<import("typeorm").DeleteResult>;
}
