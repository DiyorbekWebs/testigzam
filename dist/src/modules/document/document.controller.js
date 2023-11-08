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
exports.DocumentController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const dto_1 = require("./dto");
const document_service_1 = require("./document.service");
const dto_2 = require("../../infra/shared/dto");
const route_decorator_1 = require("../../infra/shared/decorators/route.decorator");
const public_decorator_1 = require("../auth/decorators/public.decorator");
let DocumentController = exports.DocumentController = class DocumentController {
    constructor(documentService) {
        this.documentService = documentService;
    }
    async getRegulatoryDoc(route, query) {
        return await this.documentService.getRegulatoryDocument({ ...query, route });
    }
    async getOnlineCreditDoc(route, query) {
        return await this.documentService.getOnlineCreditDocument({ ...query, route });
    }
    async getSubsidyDoc(route, query) {
        return await this.documentService.getSubsidyDocument({ ...query, route });
    }
    async getOpenDoc(route, query) {
        return await this.documentService.getOpenDocument({ ...query, route });
    }
    async getMe(id) {
        return this.documentService.getOne(id);
    }
    async saveData(data) {
        return await this.documentService.create(data);
    }
    async changeData(data, id) {
        return await this.documentService.change(data, id);
    }
    async deleteData(id) {
        return await this.documentService.deleteOne(id);
    }
};
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('/regulatory'),
    (0, swagger_1.ApiOperation)({ summary: 'Method: returns all regulatory documents' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'The regulatory documents were returned successfully',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, route_decorator_1.Route)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_2.PaginationDto]),
    __metadata("design:returntype", Promise)
], DocumentController.prototype, "getRegulatoryDoc", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('/online-credit'),
    (0, swagger_1.ApiOperation)({ summary: 'Method: returns all online-credit documents' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'The online-credit documents were returned successfully',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, route_decorator_1.Route)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_2.PaginationDto]),
    __metadata("design:returntype", Promise)
], DocumentController.prototype, "getOnlineCreditDoc", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('/subsidy'),
    (0, swagger_1.ApiOperation)({ summary: 'Method: returns all subsidy documents' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'The subsidy documents were returned successfully',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, route_decorator_1.Route)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_2.PaginationDto]),
    __metadata("design:returntype", Promise)
], DocumentController.prototype, "getSubsidyDoc", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('/open-data'),
    (0, swagger_1.ApiOperation)({ summary: 'Method: returns all open documents' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'The open documents were returned successfully',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, route_decorator_1.Route)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_2.PaginationDto]),
    __metadata("design:returntype", Promise)
], DocumentController.prototype, "getOpenDoc", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Method: returns single document by id' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'The document was returned successfully',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DocumentController.prototype, "getMe", null);
__decorate([
    (0, common_1.Post)('/'),
    (0, swagger_1.ApiOperation)({ summary: 'Method: creates new document' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The document was created successfully',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateDocumentDto]),
    __metadata("design:returntype", Promise)
], DocumentController.prototype, "saveData", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Method: updating document' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Document was changed',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.UpdateDocumentDto, String]),
    __metadata("design:returntype", Promise)
], DocumentController.prototype, "changeData", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Method: deleting document' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Document was deleted',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DocumentController.prototype, "deleteData", null);
exports.DocumentController = DocumentController = __decorate([
    (0, swagger_1.ApiTags)('Document'),
    (0, common_1.Controller)('document'),
    __metadata("design:paramtypes", [document_service_1.DocumentService])
], DocumentController);
//# sourceMappingURL=document.controller.js.map