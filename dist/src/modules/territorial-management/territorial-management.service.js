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
exports.TerritorialManagementService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
const territorial_management_entity_1 = require("./territorial-management.entity");
const typeorm_2 = require("@nestjs/typeorm");
let TerritorialManagementService = exports.TerritorialManagementService = class TerritorialManagementService {
    constructor(territorialManagementRepository) {
        this.territorialManagementRepository = territorialManagementRepository;
    }
    async getOne(id) {
        const data = await this.territorialManagementRepository
            .findOne({
            where: { id },
        })
            .catch(() => {
            throw new common_1.NotFoundException('data not found');
        });
        return data;
    }
    async getAll(options) {
        return (0, nestjs_typeorm_paginate_1.paginate)(this.territorialManagementRepository, options, {});
    }
    async deleteOne(id) {
        const response = await this.territorialManagementRepository.delete(id).catch(() => {
            throw new common_1.NotFoundException('data not found');
        });
        return response;
    }
    async change(value, id) {
        const response = await this.territorialManagementRepository.update({ id }, value);
        return response;
    }
    async create(value) {
        const data = await this.territorialManagementRepository.createQueryBuilder()
            .insert()
            .into(territorial_management_entity_1.TerritorialManagement)
            .values(value)
            .returning("id")
            .execute();
        return data;
    }
};
exports.TerritorialManagementService = TerritorialManagementService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(territorial_management_entity_1.TerritorialManagement)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], TerritorialManagementService);
//# sourceMappingURL=territorial-management.service.js.map