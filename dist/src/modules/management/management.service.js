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
exports.ManagementService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
const management_entity_1 = require("./management.entity");
const typeorm_2 = require("@nestjs/typeorm");
const enum_1 = require("../../infra/shared/enum");
let ManagementService = exports.ManagementService = class ManagementService {
    constructor(managementRepository) {
        this.managementRepository = managementRepository;
    }
    async getOne(id) {
        const data = await this.managementRepository
            .findOne({
            where: { id },
        })
            .catch(() => {
            throw new common_1.NotFoundException('data not found');
        });
        return data;
    }
    async getManagement(options) {
        return (0, nestjs_typeorm_paginate_1.paginate)(this.managementRepository, options, {
            where: {
                type: enum_1.ManagementEnum.MANAGEMENT
            }
        });
    }
    async getCentralApparatus(options) {
        return (0, nestjs_typeorm_paginate_1.paginate)(this.managementRepository, options, {
            where: {
                type: enum_1.ManagementEnum.CENTRAL_APPARATUS
            }
        });
    }
    async deleteOne(id) {
        const response = await this.managementRepository.delete(id).catch(() => {
            throw new common_1.NotFoundException('data not found');
        });
        return response;
    }
    async change(value, id) {
        const response = await this.managementRepository.update({ id }, value);
        return response;
    }
    async create(value) {
        const data = this.managementRepository.create(value);
        return await this.managementRepository.save(data);
    }
};
exports.ManagementService = ManagementService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(management_entity_1.Management)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ManagementService);
//# sourceMappingURL=management.service.js.map