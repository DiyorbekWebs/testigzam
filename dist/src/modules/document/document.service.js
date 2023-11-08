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
exports.DocumentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
const document_entity_1 = require("./document.entity");
const typeorm_2 = require("@nestjs/typeorm");
const enum_1 = require("../../infra/shared/enum");
let DocumentService = exports.DocumentService = class DocumentService {
    constructor(documentRepository) {
        this.documentRepository = documentRepository;
    }
    async getAll(options) {
        return (0, nestjs_typeorm_paginate_1.paginate)(this.documentRepository, options, {});
    }
    async getOne(id) {
        const data = await this.documentRepository
            .findOne({
            where: { id },
        })
            .catch(() => {
            throw new common_1.NotFoundException('data not found');
        });
        return data;
    }
    async getRegulatoryDocument(options) {
        return (0, nestjs_typeorm_paginate_1.paginate)(this.documentRepository, options, {
            where: {
                type: enum_1.DocumentTypeEnum.REGULATORY
            }
        });
    }
    async getOpenDocument(options) {
        return (0, nestjs_typeorm_paginate_1.paginate)(this.documentRepository, options, {
            where: {
                type: enum_1.DocumentTypeEnum.OPEN
            }
        });
    }
    async getSubsidyDocument(options) {
        return (0, nestjs_typeorm_paginate_1.paginate)(this.documentRepository, options, {
            where: {
                type: enum_1.DocumentTypeEnum.SUBSIDY
            }
        });
    }
    async getOnlineCreditDocument(options) {
        return (0, nestjs_typeorm_paginate_1.paginate)(this.documentRepository, options, {
            where: {
                type: enum_1.DocumentTypeEnum.ONLINE_CREDIT
            }
        });
    }
    async deleteOne(id) {
        const response = await this.documentRepository.delete(id).catch(() => {
            throw new common_1.NotFoundException('data not found');
        });
        return response;
    }
    async change(value, id) {
        const response = await this.documentRepository.update({ id }, value);
        return response;
    }
    async create(value) {
        const data = this.documentRepository.create(value);
        return await this.documentRepository.save(data);
    }
};
exports.DocumentService = DocumentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(document_entity_1.Document)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], DocumentService);
//# sourceMappingURL=document.service.js.map