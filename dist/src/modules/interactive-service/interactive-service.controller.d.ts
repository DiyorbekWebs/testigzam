import { UpdateResult } from 'typeorm';
import { CreateInteractiveServiceDto, UpdateInteractiveServiceDto } from './dto';
import { InteractiveService } from './interactive-service.entity';
import { InteractiveServiceService } from './interactive-service.service';
import { PaginationDto } from '../../infra/shared/dto';
export declare class InteractiveServiceController {
    private readonly interactiveServiceServiceService;
    constructor(interactiveServiceServiceService: InteractiveServiceService);
    getData(route: string, query: PaginationDto): Promise<import("nestjs-typeorm-paginate").Pagination<InteractiveService, import("nestjs-typeorm-paginate").IPaginationMeta>>;
    getMe(id: string): Promise<InteractiveService>;
    saveData(data: CreateInteractiveServiceDto): Promise<InteractiveService>;
    changeData(data: UpdateInteractiveServiceDto, id: string): Promise<UpdateResult>;
    deleteData(id: string): Promise<import("typeorm").DeleteResult>;
}
