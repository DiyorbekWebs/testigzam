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
exports.TerritorialManagementController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const dto_1 = require("./dto");
const territorial_management_service_1 = require("./territorial-management.service");
const dto_2 = require("../../infra/shared/dto");
const route_decorator_1 = require("../../infra/shared/decorators/route.decorator");
const public_decorator_1 = require("../auth/decorators/public.decorator");
let TerritorialManagementController = exports.TerritorialManagementController = class TerritorialManagementController {
    constructor(territorialManagementService) {
        this.territorialManagementService = territorialManagementService;
    }
    async getAll(route, query) {
        return await this.territorialManagementService.getAll({ ...query, route });
    }
    async getMe(id) {
        return this.territorialManagementService.getOne(id);
    }
    async saveData(data) {
        return await this.territorialManagementService.create(data);
    }
    async changeData(data, id) {
        return await this.territorialManagementService.change(data, id);
    }
    async deleteData(id) {
        return await this.territorialManagementService.deleteOne(id);
    }
};
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('/'),
    (0, swagger_1.ApiOperation)({ summary: 'Method: returns all territorial-management' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'The territorial-management were returned successfully',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, route_decorator_1.Route)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_2.PaginationDto]),
    __metadata("design:returntype", Promise)
], TerritorialManagementController.prototype, "getAll", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Method: returns single territorial-management by id' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'The territorial-management was returned successfully',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TerritorialManagementController.prototype, "getMe", null);
__decorate([
    (0, common_1.Post)('/'),
    (0, swagger_1.ApiOperation)({ summary: 'Method: creates new territorial-management' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The territorial-management was created successfully',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateTerritorialManagementDto]),
    __metadata("design:returntype", Promise)
], TerritorialManagementController.prototype, "saveData", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Method: updating territorial-management' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Territorial-management was changed',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.UpdateTerritorialManagementDto, String]),
    __metadata("design:returntype", Promise)
], TerritorialManagementController.prototype, "changeData", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Method: deleting territorial-management' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Territorial-management was deleted',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TerritorialManagementController.prototype, "deleteData", null);
exports.TerritorialManagementController = TerritorialManagementController = __decorate([
    (0, swagger_1.ApiTags)('Territorial-Management'),
    (0, common_1.Controller)('territorial-management'),
    __metadata("design:paramtypes", [territorial_management_service_1.TerritorialManagementService])
], TerritorialManagementController);
//# sourceMappingURL=territorial-management.controller.js.map