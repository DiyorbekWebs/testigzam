import { Repository } from 'typeorm';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { UpdateCommunicationToolDto, CreateCommunicationToolDto } from './dto';
import { CommunicationTool } from './communication-tool.entity';
export declare class CommunicationToolService {
    private readonly communicationToolRepository;
    constructor(communicationToolRepository: Repository<CommunicationTool>);
    getAll(options: IPaginationOptions): Promise<Pagination<CommunicationTool>>;
    getOne(id: string): Promise<CommunicationTool>;
    deleteOne(id: string): Promise<import("typeorm").DeleteResult>;
    change(value: UpdateCommunicationToolDto, id: string): Promise<import("typeorm").UpdateResult>;
    create(value: CreateCommunicationToolDto): Promise<CommunicationTool>;
}
