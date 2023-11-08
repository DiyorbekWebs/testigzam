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
exports.InformationController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const dto_1 = require("./dto");
const information_service_1 = require("./information.service");
const dto_2 = require("../../infra/shared/dto");
const route_decorator_1 = require("../../infra/shared/decorators/route.decorator");
const public_decorator_1 = require("../auth/decorators/public.decorator");
let InformationController = exports.InformationController = class InformationController {
    constructor(informationService) {
        this.informationService = informationService;
    }
    async getData(route, query) {
        return await this.informationService.getAll({ ...query, route });
    }
    async getNews(route, query) {
        return await this.informationService.getNews({ ...query, route });
    }
    async getBreakingNews(route, query) {
        return await this.informationService.getBreakingNews({ ...query, route });
    }
    async getEvents(route, query) {
        return await this.informationService.getEvents({ ...query, route });
    }
    async getAnnouncements(route, query) {
        return await this.informationService.getAnnouncement({ ...query, route });
    }
    async getAdditionalPages(route, query) {
        return await this.informationService.getAdditionalPage({ ...query, route });
    }
    async getMe(id) {
        return await this.informationService.getOne(id);
    }
    async saveData(data) {
        return await this.informationService.create(data);
    }
    async changeData(data, id) {
        return await this.informationService.change(data, id);
    }
    async deleteData(id) {
        return await this.informationService.deleteOne(id);
    }
};
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('/'),
    (0, swagger_1.ApiOperation)({ summary: 'Method: returns all information' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'The inormation were returned successfully',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, route_decorator_1.Route)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_2.PaginationDto]),
    __metadata("design:returntype", Promise)
], InformationController.prototype, "getData", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('/news'),
    (0, swagger_1.ApiOperation)({ summary: 'Method: returns news' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'The news was returned successfully',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, route_decorator_1.Route)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_2.PaginationDto]),
    __metadata("design:returntype", Promise)
], InformationController.prototype, "getNews", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('/breaking-news'),
    (0, swagger_1.ApiOperation)({ summary: 'Method: returns breaking-news' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'The breaking-news was returned successfully',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, route_decorator_1.Route)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_2.PaginationDto]),
    __metadata("design:returntype", Promise)
], InformationController.prototype, "getBreakingNews", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('/events'),
    (0, swagger_1.ApiOperation)({ summary: 'Method: returns events' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'The events was returned successfully',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, route_decorator_1.Route)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_2.PaginationDto]),
    __metadata("design:returntype", Promise)
], InformationController.prototype, "getEvents", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('/announcements'),
    (0, swagger_1.ApiOperation)({ summary: 'Method: returns announcements' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'The announcements was returned successfully',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, route_decorator_1.Route)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_2.PaginationDto]),
    __metadata("design:returntype", Promise)
], InformationController.prototype, "getAnnouncements", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('/additional-pages'),
    (0, swagger_1.ApiOperation)({ summary: 'Method: returns additional-pages' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'The additional-pages was returned successfully',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, route_decorator_1.Route)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_2.PaginationDto]),
    __metadata("design:returntype", Promise)
], InformationController.prototype, "getAdditionalPages", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Method: returns single information by id' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'The information was returned successfully',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InformationController.prototype, "getMe", null);
__decorate([
    (0, common_1.Post)('/'),
    (0, swagger_1.ApiOperation)({ summary: 'Method: creates new information' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The information was created successfully',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateInformationDto]),
    __metadata("design:returntype", Promise)
], InformationController.prototype, "saveData", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Method: updating information' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Information was changed',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.UpdateInformationDto, String]),
    __metadata("design:returntype", Promise)
], InformationController.prototype, "changeData", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Method: deleting information' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Information was deleted',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InformationController.prototype, "deleteData", null);
exports.InformationController = InformationController = __decorate([
    (0, swagger_1.ApiTags)('Information'),
    (0, common_1.Controller)('information'),
    __metadata("design:paramtypes", [information_service_1.InformationService])
], InformationController);
//# sourceMappingURL=information.controller.js.map