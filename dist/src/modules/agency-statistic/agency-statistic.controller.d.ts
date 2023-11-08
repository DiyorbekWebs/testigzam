import { UpdateResult } from 'typeorm';
import { CreateAgencyStatisticDto, UpdateAgencyStatisticDto } from './dto';
import { AgencyStatistic } from './agency-statistic.entity';
import { AgencyStatisticService } from './agency-statistic.service';
export declare class AgencyStatisticController {
    private readonly agencyStatisticService;
    constructor(agencyStatisticService: AgencyStatisticService);
    getaAll(): Promise<{}>;
    saveData(data: CreateAgencyStatisticDto): Promise<AgencyStatistic>;
    changeData(data: UpdateAgencyStatisticDto, id: string): Promise<UpdateResult>;
    deleteData(id: string): Promise<import("typeorm").DeleteResult>;
}
