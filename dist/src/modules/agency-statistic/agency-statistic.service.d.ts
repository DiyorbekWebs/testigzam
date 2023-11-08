import { Repository } from 'typeorm';
import { UpdateAgencyStatisticDto, CreateAgencyStatisticDto } from './dto';
import { AgencyStatistic } from './agency-statistic.entity';
export declare class AgencyStatisticService {
    private readonly agencyStatisticRepository;
    constructor(agencyStatisticRepository: Repository<AgencyStatistic>);
    getData(): Promise<{}>;
    deleteOne(id: string): Promise<import("typeorm").DeleteResult>;
    change(value: UpdateAgencyStatisticDto, id: string): Promise<import("typeorm").UpdateResult>;
    create(value: CreateAgencyStatisticDto): Promise<AgencyStatistic>;
}
