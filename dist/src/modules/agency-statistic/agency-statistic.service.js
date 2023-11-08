"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgencyStatisticService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const agency_statistic_entity_1 = require("./agency-statistic.entity");
const typeorm_2 = require("@nestjs/typeorm");
let AgencyStatisticService = exports.AgencyStatisticService = class AgencyStatisticService {
    constructor(agencyStatisticRepository) {
        this.agencyStatisticRepository = agencyStatisticRepository;
    }
    async getData() {
        const data = await this.agencyStatisticRepository.find();
        if (!data.length) {
            return {};
        }
        const statistic = data[0];
        const totalCount = statistic.rejected + statistic.solved + statistic.uderReview;
        const solvedPercantage = Math.round((statistic.solved / totalCount) * 100);
        const rejectedPercantage = Math.round((statistic.rejected / totalCount) * 100);
        const underReviewPercantage = Math.round((statistic.uderReview / totalCount) * 100);
        return { ...statistic, totalCount, solvedPercantage, rejectedPercantage, underReviewPercantage };
    }
    async deleteOne(id) {
        const response = await this.agencyStatisticRepository.delete(id).catch(() => {
            throw new common_1.NotFoundException('data not found');
        });
        return response;
    }
    async change(value, id) {
        const response = await this.agencyStatisticRepository.update({ id }, value);
        return response;
    }
    async create(value) {
        const dataExist = await this.agencyStatisticRepository.find();
        if (dataExist.length) {
            throw new common_1.BadRequestException("Data already exist");
        }
        const data = this.agencyStatisticRepository.create(value);
        return await this.agencyStatisticRepository.save(data);
    }
};
exports.AgencyStatisticService = AgencyStatisticService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(agency_statistic_entity_1.AgencyStatistic)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], AgencyStatisticService);
//# sourceMappingURL=agency-statistic.service.js.map