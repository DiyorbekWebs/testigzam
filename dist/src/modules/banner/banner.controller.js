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
exports.BannerController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const dto_1 = require("./dto");
const banner_service_1 = require("./banner.service");
const dto_2 = require("../../infra/shared/dto");
const route_decorator_1 = require("../../infra/shared/decorators/route.decorator");
const public_decorator_1 = require("../auth/decorators/public.decorator");
let BannerController = exports.BannerController = class BannerController {
    constructor(bannerService) {
        this.bannerService = bannerService;
    }
    async getData(route, query) {
        return await this.bannerService.getAll({ ...query, route });
    }
    async getAdditionalPages(route, query) {
        return await this.bannerService.getRightBanner({ ...query, route });
    }
    async getAnnouncements(route, query) {
        return await this.bannerService.getLeftBanner({ ...query, route });
    }
    async getMe(id) {
        return await this.bannerService.getOne(id);
    }
    async saveData(data) {
        return await this.bannerService.create(data);
    }
    async changeData(data, id) {
        return await this.bannerService.change(data, id);
    }
    async deleteData(id) {
        return await this.bannerService.deleteOne(id);
    }
};
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('/'),
    (0, swagger_1.ApiOperation)({ summary: 'Method: returns all banners' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'The banners were returned successfully',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, route_decorator_1.Route)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_2.PaginationDto]),
    __metadata("design:returntype", Promise)
], BannerController.prototype, "getData", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('/right'),
    (0, swagger_1.ApiOperation)({ summary: 'Method: returns right banners' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'The right banners was returned successfully',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, route_decorator_1.Route)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_2.PaginationDto]),
    __metadata("design:returntype", Promise)
], BannerController.prototype, "getAdditionalPages", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('/left'),
    (0, swagger_1.ApiOperation)({ summary: 'Method: returns left banners' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'The left banners was returned successfully',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, route_decorator_1.Route)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_2.PaginationDto]),
    __metadata("design:returntype", Promise)
], BannerController.prototype, "getAnnouncements", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Method: returns single banner by id' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'The banner was returned successfully',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BannerController.prototype, "getMe", null);
__decorate([
    (0, common_1.Post)('/'),
    (0, swagger_1.ApiOperation)({ summary: 'Method: creates new banner' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The banner was created successfully',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateBannerDto]),
    __metadata("design:returntype", Promise)
], BannerController.prototype, "saveData", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Method: updating banner' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Banner was changed',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.UpdateBannerDto, String]),
    __metadata("design:returntype", Promise)
], BannerController.prototype, "changeData", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Method: deleting banner' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Banner was deleted',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BannerController.prototype, "deleteData", null);
exports.BannerController = BannerController = __decorate([
    (0, swagger_1.ApiTags)('Banner'),
    (0, common_1.Controller)('banner'),
    __metadata("design:paramtypes", [banner_service_1.BannerService])
], BannerController);
//# sourceMappingURL=banner.controller.js.map