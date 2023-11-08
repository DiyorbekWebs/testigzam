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
exports.AgencyVeteranService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
const agency_veteran_entity_1 = require("./agency-veteran.entity");
const typeorm_2 = require("@nestjs/typeorm");
let AgencyVeteranService = exports.AgencyVeteranService = class AgencyVeteranService {
    constructor(agencyVeteranRepository) {
        this.agencyVeteranRepository = agencyVeteranRepository;
    }
    async getAll(options) {
        return (0, nestjs_typeorm_paginate_1.paginate)(this.agencyVeteranRepository, options, {});
    }
    async getOne(id) {
        const data = await this.agencyVeteranRepository
            .findOne({
            where: { id },
        })
            .catch(() => {
            throw new common_1.NotFoundException('data not found');
        });
        return data;
    }
    async deleteOne(id) {
        const response = await this.agencyVeteranRepository.delete(id).catch(() => {
            throw new common_1.NotFoundException('data not found');
        });
        return response;
    }
    async change(value, id) {
        const data = await this.agencyVeteranRepository.update(id, value);
        return data;
    }
    async create(value) {
        const data = this.agencyVeteranRepository.create(value);
        return await this.agencyVeteranRepository.save(data);
    }
};
exports.AgencyVeteranService = AgencyVeteranService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(agency_veteran_entity_1.AgencyVeteran)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], AgencyVeteranService);
//# sourceMappingURL=agency-veteran.service.js.map