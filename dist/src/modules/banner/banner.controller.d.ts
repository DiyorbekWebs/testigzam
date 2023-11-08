import { CreateBannerDto, UpdateBannerDto } from './dto';
import { Banner } from './banner.entity';
import { BannerService } from './banner.service';
import { PaginationDto } from '../../infra/shared/dto';
export declare class BannerController {
    private readonly bannerService;
    constructor(bannerService: BannerService);
    getData(route: string, query: PaginationDto): Promise<import("nestjs-typeorm-paginate").Pagination<Banner, import("nestjs-typeorm-paginate").IPaginationMeta>>;
    getAdditionalPages(route: string, query: PaginationDto): Promise<import("nestjs-typeorm-paginate").Pagination<Banner, import("nestjs-typeorm-paginate").IPaginationMeta>>;
    getAnnouncements(route: string, query: PaginationDto): Promise<import("nestjs-typeorm-paginate").Pagination<Banner, import("nestjs-typeorm-paginate").IPaginationMeta>>;
    getMe(id: string): Promise<Banner>;
    saveData(data: CreateBannerDto): Promise<Banner>;
    changeData(data: UpdateBannerDto, id: string): Promise<import("typeorm").UpdateResult>;
    deleteData(id: string): Promise<import("typeorm").DeleteResult>;
}
