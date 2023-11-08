import { Repository } from 'typeorm';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { UpdateBannerDto, CreateBannerDto } from './dto';
import { Banner } from './banner.entity';
export declare class BannerService {
    private readonly bannerRepository;
    constructor(bannerRepository: Repository<Banner>);
    getAll(options: IPaginationOptions): Promise<Pagination<Banner>>;
    getOne(id: string): Promise<Banner>;
    getLeftBanner(options: IPaginationOptions): Promise<Pagination<Banner>>;
    getRightBanner(options: IPaginationOptions): Promise<Pagination<Banner>>;
    deleteOne(id: string): Promise<import("typeorm").DeleteResult>;
    change(value: UpdateBannerDto, id: string): Promise<import("typeorm").UpdateResult>;
    create(value: CreateBannerDto): Promise<Banner>;
}
