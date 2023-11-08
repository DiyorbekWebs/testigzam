import { CreateInformationDto, UpdateInformationDto } from './dto';
import { Information } from './information.entity';
import { InformationService } from './information.service';
import { PaginationDto } from '../../infra/shared/dto';
export declare class InformationController {
    private readonly informationService;
    constructor(informationService: InformationService);
    getData(route: string, query: PaginationDto): Promise<import("nestjs-typeorm-paginate").Pagination<Information, import("nestjs-typeorm-paginate").IPaginationMeta>>;
    getNews(route: string, query: PaginationDto): Promise<import("nestjs-typeorm-paginate").Pagination<Information, import("nestjs-typeorm-paginate").IPaginationMeta>>;
    getBreakingNews(route: string, query: PaginationDto): Promise<import("nestjs-typeorm-paginate").Pagination<Information, import("nestjs-typeorm-paginate").IPaginationMeta>>;
    getEvents(route: string, query: PaginationDto): Promise<import("nestjs-typeorm-paginate").Pagination<Information, import("nestjs-typeorm-paginate").IPaginationMeta>>;
    getAnnouncements(route: string, query: PaginationDto): Promise<import("nestjs-typeorm-paginate").Pagination<Information, import("nestjs-typeorm-paginate").IPaginationMeta>>;
    getAdditionalPages(route: string, query: PaginationDto): Promise<import("nestjs-typeorm-paginate").Pagination<Information, import("nestjs-typeorm-paginate").IPaginationMeta>>;
    getMe(id: string): Promise<Information>;
    saveData(data: CreateInformationDto): Promise<Information>;
    changeData(data: UpdateInformationDto, id: string): Promise<import("typeorm").UpdateResult>;
    deleteData(id: string): Promise<import("typeorm").DeleteResult>;
}
