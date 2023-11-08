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
exports.ManagementController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const dto_1 = require("./dto");
const management_service_1 = require("./management.service");
const dto_2 = require("../../infra/shared/dto");
const route_decorator_1 = require("../../infra/shared/decorators/route.decorator");
const public_decorator_1 = require("../auth/decorators/public.decorator");
let ManagementController = exports.ManagementController = class ManagementController {
    constructor(managementService) {
        this.managementService = managementService;
    }
    async getManagement(route, query) {
        return await this.managementService.getManagement({ ...query, route });
    }
    async getCentralApparatus(route, query) {
        return await this.managementService.getCentralApparatus({ ...query, route });
    }
    async getMe(id) {
        return this.managementService.getOne(id);
    }
    async saveData(data) {
        return await this.managementService.create(data);
    }
    async changeData(data, id) {
        return await this.managementService.change(data, id);
    }
    async deleteData(id) {
        return await this.managementService.deleteOne(id);
    }
};
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('/management'),
    (0, swagger_1.ApiOperation)({ summary: 'Method: returns all managements' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'The managements were returned successfully',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, route_decorator_1.Route)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_2.PaginationDto]),
    __metadata("design:returntype", Promise)
], ManagementController.prototype, "getManagement", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('/central-apparatus'),
    (0, swagger_1.ApiOperation)({ summary: 'Method: returns all central-apparatus' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'The central-apparatus were returned successfully',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, route_decorator_1.Route)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_2.PaginationDto]),
    __metadata("design:returntype", Promise)
], ManagementController.prototype, "getCentralApparatus", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Method: returns single management by id' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'The management was returned successfully',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ManagementController.prototype, "getMe", null);
__decorate([
    (0, common_1.Post)('/'),
    (0, swagger_1.ApiOperation)({ summary: 'Method: creates new management' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The management was created successfully',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateManagementDto]),
    __metadata("design:returntype", Promise)
], ManagementController.prototype, "saveData", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Method: updating management' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Management was changed',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.UpdateManagementDto, String]),
    __metadata("design:returntype", Promise)
], ManagementController.prototype, "changeData", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Method: deleting management' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Management was deleted',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ManagementController.prototype, "deleteData", null);
exports.ManagementController = ManagementController = __decorate([
    (0, swagger_1.ApiTags)('Management'),
    (0, common_1.Controller)('management'),
    __metadata("design:paramtypes", [management_service_1.ManagementService])
], ManagementController);
//# sourceMappingURL=management.controller.js.map