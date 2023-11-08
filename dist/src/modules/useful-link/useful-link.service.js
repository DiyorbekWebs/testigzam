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
exports.UsefulLinkService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
const useful_link_entity_1 = require("./useful-link.entity");
const typeorm_2 = require("@nestjs/typeorm");
let UsefulLinkService = exports.UsefulLinkService = class UsefulLinkService {
    constructor(usefulLinkRepository) {
        this.usefulLinkRepository = usefulLinkRepository;
    }
    async getAll(options) {
        return (0, nestjs_typeorm_paginate_1.paginate)(this.usefulLinkRepository, options, {});
    }
    async getOne(id) {
        const data = await this.usefulLinkRepository
            .findOne({
            where: { id },
        })
            .catch(() => {
            throw new common_1.NotFoundException('data not found');
        });
        return data;
    }
    async deleteOne(id) {
        const response = await this.usefulLinkRepository.delete(id).catch(() => {
            throw new common_1.NotFoundException('data not found');
        });
        return response;
    }
    async change(value, id) {
        const data = await this.usefulLinkRepository.update(id, value);
        return data;
    }
    async create(value) {
        const data = this.usefulLinkRepository.create(value);
        return await this.usefulLinkRepository.save(data);
    }
};
exports.UsefulLinkService = UsefulLinkService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(useful_link_entity_1.UsefulLink)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UsefulLinkService);
//# sourceMappingURL=useful-link.service.js.map