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
exports.TerritorialDivisionController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const dto_1 = require("./dto");
const territorial_division_service_1 = require("./territorial-division.service");
const dto_2 = require("../../infra/shared/dto");
const route_decorator_1 = require("../../infra/shared/decorators/route.decorator");
const public_decorator_1 = require("../auth/decorators/public.decorator");
let TerritorialDivisionController = exports.TerritorialDivisionController = class TerritorialDivisionController {
    constructor(territorialDivisionService) {
        this.territorialDivisionService = territorialDivisionService;
    }
    async getAll(route, query) {
        return await this.territorialDivisionService.getAll({ ...query, route });
    }
    async getMe(id) {
        return this.territorialDivisionService.getOne(id);
    }
    async saveData(data) {
        return await this.territorialDivisionService.create(data);
    }
    async changeData(data, id) {
        return await this.territorialDivisionService.change(data, id);
    }
    async deleteData(id) {
        return await this.territorialDivisionService.deleteOne(id);
    }
};
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('/'),
    (0, swagger_1.ApiOperation)({ summary: 'Method: returns all territorial-division' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'The territorial-division were returned successfully',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, route_decorator_1.Route)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_2.PaginationDto]),
    __metadata("design:returntype", Promise)
], TerritorialDivisionController.prototype, "getAll", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Method: returns single territorial-division by id' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'The territorial-division was returned successfully',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TerritorialDivisionController.prototype, "getMe", null);
__decorate([
    (0, common_1.Post)('/'),
    (0, swagger_1.ApiOperation)({ summary: 'Method: creates new territorial-division' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The territorial-division was created successfully',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateTerritorialDivisionDto]),
    __metadata("design:returntype", Promise)
], TerritorialDivisionController.prototype, "saveData", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Method: updating territorial-division' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Territorial-division was changed',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.UpdateTerritorialDivisionDto, String]),
    __metadata("design:returntype", Promise)
], TerritorialDivisionController.prototype, "changeData", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Method: deleting territorial-division' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Territorial-division was deleted',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TerritorialDivisionController.prototype, "deleteData", null);
exports.TerritorialDivisionController = TerritorialDivisionController = __decorate([
    (0, swagger_1.ApiTags)('Territorial-Division'),
    (0, common_1.Controller)('territorial-division'),
    __metadata("design:paramtypes", [territorial_division_service_1.TerritorialDivisionService])
], TerritorialDivisionController);
//# sourceMappingURL=territorial-division.controller.js.map