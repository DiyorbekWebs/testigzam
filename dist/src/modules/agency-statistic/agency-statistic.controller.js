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
exports.AgencyStatisticController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const dto_1 = require("./dto");
const agency_statistic_service_1 = require("./agency-statistic.service");
const public_decorator_1 = require("../auth/decorators/public.decorator");
let AgencyStatisticController = exports.AgencyStatisticController = class AgencyStatisticController {
    constructor(agencyStatisticService) {
        this.agencyStatisticService = agencyStatisticService;
    }
    async getaAll() {
        return await this.agencyStatisticService.getData();
    }
    async saveData(data) {
        return await this.agencyStatisticService.create(data);
    }
    async changeData(data, id) {
        return await this.agencyStatisticService.change(data, id);
    }
    async deleteData(id) {
        return await this.agencyStatisticService.deleteOne(id);
    }
};
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('/'),
    (0, swagger_1.ApiOperation)({ summary: 'Method: returns agency statistic' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'The agency statistic were returned successfully',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AgencyStatisticController.prototype, "getaAll", null);
__decorate([
    (0, common_1.Post)('/'),
    (0, swagger_1.ApiOperation)({ summary: 'Method: creates new agency statistic' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The agency statistic was created successfully',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateAgencyStatisticDto]),
    __metadata("design:returntype", Promise)
], AgencyStatisticController.prototype, "saveData", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Method: updating agency statistic' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Agency statistic was changed',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.UpdateAgencyStatisticDto, String]),
    __metadata("design:returntype", Promise)
], AgencyStatisticController.prototype, "changeData", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Method: deleting agency statistic' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Agency statistic was deleted',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AgencyStatisticController.prototype, "deleteData", null);
exports.AgencyStatisticController = AgencyStatisticController = __decorate([
    (0, swagger_1.ApiTags)('Agency-Statistic'),
    (0, common_1.Controller)('agency-statistic'),
    __metadata("design:paramtypes", [agency_statistic_service_1.AgencyStatisticService])
], AgencyStatisticController);
//# sourceMappingURL=agency-statistic.controller.js.map