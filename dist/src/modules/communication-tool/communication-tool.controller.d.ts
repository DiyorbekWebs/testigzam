import { CreateCommunicationToolDto, UpdateCommunicationToolDto } from './dto';
import { CommunicationTool } from './communication-tool.entity';
import { CommunicationToolService } from './communication-tool.service';
import { PaginationDto } from '../../infra/shared/dto';
export declare class CommunicationToolController {
    private readonly communicationToolService;
    constructor(communicationToolService: CommunicationToolService);
    getData(route: string, query: PaginationDto): Promise<import("nestjs-typeorm-paginate").Pagination<CommunicationTool, import("nestjs-typeorm-paginate").IPaginationMeta>>;
    getMe(id: string): Promise<CommunicationTool>;
    saveData(data: CreateCommunicationToolDto): Promise<CommunicationTool>;
    changeData(data: UpdateCommunicationToolDto, id: string): Promise<import("typeorm").UpdateResult>;
    deleteData(id: string): Promise<import("typeorm").DeleteResult>;
}
