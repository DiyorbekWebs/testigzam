import { CreateUsefulLinkDto, UpdateUsefulLinkDto } from './dto';
import { UsefulLink } from './useful-link.entity';
import { UsefulLinkService } from './useful-link.service';
import { PaginationDto } from '../../infra/shared/dto';
export declare class UsefulLinkController {
    private readonly usefulLinkService;
    constructor(usefulLinkService: UsefulLinkService);
    getData(route: string, query: PaginationDto): Promise<import("nestjs-typeorm-paginate").Pagination<UsefulLink, import("nestjs-typeorm-paginate").IPaginationMeta>>;
    getMe(id: string): Promise<UsefulLink>;
    saveData(data: CreateUsefulLinkDto): Promise<UsefulLink>;
    changeData(data: UpdateUsefulLinkDto, id: string): Promise<import("typeorm").UpdateResult>;
    deleteData(id: string): Promise<import("typeorm").DeleteResult>;
}
