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
exports.UsefulLinkController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const dto_1 = require("./dto");
const useful_link_service_1 = require("./useful-link.service");
const dto_2 = require("../../infra/shared/dto");
const route_decorator_1 = require("../../infra/shared/decorators/route.decorator");
const public_decorator_1 = require("../auth/decorators/public.decorator");
let UsefulLinkController = exports.UsefulLinkController = class UsefulLinkController {
    constructor(usefulLinkService) {
        this.usefulLinkService = usefulLinkService;
    }
    async getData(route, query) {
        return await this.usefulLinkService.getAll({ ...query, route });
    }
    async getMe(id) {
        return this.usefulLinkService.getOne(id);
    }
    async saveData(data) {
        return await this.usefulLinkService.create(data);
    }
    async changeData(data, id) {
        return await this.usefulLinkService.change(data, id);
    }
    async deleteData(id) {
        return await this.usefulLinkService.deleteOne(id);
    }
};
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('/'),
    (0, swagger_1.ApiOperation)({ summary: 'Method: returns all useful-link' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'The useful-link were returned successfully',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, route_decorator_1.Route)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_2.PaginationDto]),
    __metadata("design:returntype", Promise)
], UsefulLinkController.prototype, "getData", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Method: returns single useful-link by id' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'The useful-link was returned successfully',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsefulLinkController.prototype, "getMe", null);
__decorate([
    (0, common_1.Post)('/'),
    (0, swagger_1.ApiOperation)({ summary: 'Method: creates new useful-link' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The useful-link was created successfully',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateUsefulLinkDto]),
    __metadata("design:returntype", Promise)
], UsefulLinkController.prototype, "saveData", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Method: updating useful-link' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Useful-link was changed',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.UpdateUsefulLinkDto, String]),
    __metadata("design:returntype", Promise)
], UsefulLinkController.prototype, "changeData", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Method: deleting useful-link' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Useful-link was deleted',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsefulLinkController.prototype, "deleteData", null);
exports.UsefulLinkController = UsefulLinkController = __decorate([
    (0, swagger_1.ApiTags)('Useful-Link'),
    (0, common_1.Controller)('useful-link'),
    __metadata("design:paramtypes", [useful_link_service_1.UsefulLinkService])
], UsefulLinkController);
//# sourceMappingURL=useful-link.controller.js.map