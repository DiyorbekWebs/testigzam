import { FindOptionsWhere, Repository } from 'typeorm';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { UpdateInteractiveServiceDto, CreateInteractiveServiceDto } from './dto';
import { InteractiveService } from './interactive-service.entity';
export declare class InteractiveServiceService {
    private readonly interactiveServiceRepository;
    constructor(interactiveServiceRepository: Repository<InteractiveService>);
    getAll(options: IPaginationOptions, where?: FindOptionsWhere<InteractiveService>): Promise<Pagination<InteractiveService>>;
    getOne(id: string): Promise<InteractiveService>;
    deleteOne(id: string): Promise<import("typeorm").DeleteResult>;
    change(value: UpdateInteractiveServiceDto, id: string): Promise<import("typeorm").UpdateResult>;
    create(value: CreateInteractiveServiceDto): Promise<InteractiveService>;
}
