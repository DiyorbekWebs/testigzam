import { FindOptionsWhere, Repository } from 'typeorm';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { UpdateInformationDto, CreateInformationDto } from './dto';
import { Information } from './information.entity';
export declare class InformationService {
    private readonly informationRepository;
    constructor(informationRepository: Repository<Information>);
    getAll(options: IPaginationOptions, where?: FindOptionsWhere<Information>): Promise<Pagination<Information>>;
    getOne(id: string): Promise<Information>;
    getNews(options: IPaginationOptions): Promise<Pagination<Information>>;
    getBreakingNews(options: IPaginationOptions): Promise<Pagination<Information>>;
    getEvents(options: IPaginationOptions): Promise<Pagination<Information>>;
    getAnnouncement(options: IPaginationOptions): Promise<Pagination<Information>>;
    getAdditionalPage(options: IPaginationOptions): Promise<Pagination<Information>>;
    deleteOne(id: string): Promise<import("typeorm").DeleteResult>;
    change(value: UpdateInformationDto, id: string): Promise<import("typeorm").UpdateResult>;
    create(value: CreateInformationDto): Promise<Information>;
}
