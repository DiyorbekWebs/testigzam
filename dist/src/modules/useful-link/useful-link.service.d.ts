import { Repository } from 'typeorm';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { UpdateUsefulLinkDto, CreateUsefulLinkDto } from './dto';
import { UsefulLink } from './useful-link.entity';
export declare class UsefulLinkService {
    private readonly usefulLinkRepository;
    constructor(usefulLinkRepository: Repository<UsefulLink>);
    getAll(options: IPaginationOptions): Promise<Pagination<UsefulLink>>;
    getOne(id: string): Promise<UsefulLink>;
    deleteOne(id: string): Promise<import("typeorm").DeleteResult>;
    change(value: UpdateUsefulLinkDto, id: string): Promise<import("typeorm").UpdateResult>;
    create(value: CreateUsefulLinkDto): Promise<UsefulLink>;
}
