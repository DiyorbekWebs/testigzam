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
exports.InformationService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
const information_entity_1 = require("./information.entity");
const typeorm_2 = require("@nestjs/typeorm");
const enum_1 = require("../../infra/shared/enum");
let InformationService = exports.InformationService = class InformationService {
    constructor(informationRepository) {
        this.informationRepository = informationRepository;
    }
    async getAll(options, where) {
        return (0, nestjs_typeorm_paginate_1.paginate)(this.informationRepository, options, {});
    }
    async getOne(id) {
        const data = await this.informationRepository
            .findOne({
            where: { id },
        })
            .catch(() => {
            throw new common_1.NotFoundException('data not found');
        });
        return data;
    }
    async getNews(options) {
        return (0, nestjs_typeorm_paginate_1.paginate)(this.informationRepository, options, {
            where: {
                type: enum_1.InformationTypeEnum.NEWS
            }
        });
    }
    async getBreakingNews(options) {
        return (0, nestjs_typeorm_paginate_1.paginate)(this.informationRepository, options, {
            where: {
                type: enum_1.InformationTypeEnum.BREAKING_NEWS
            }
        });
    }
    async getEvents(options) {
        return (0, nestjs_typeorm_paginate_1.paginate)(this.informationRepository, options, {
            where: {
                type: enum_1.InformationTypeEnum.EVENT
            }
        });
    }
    async getAnnouncement(options) {
        return (0, nestjs_typeorm_paginate_1.paginate)(this.informationRepository, options, {
            where: {
                type: enum_1.InformationTypeEnum.ANNOUNCEMENT
            }
        });
    }
    async getAdditionalPage(options) {
        return (0, nestjs_typeorm_paginate_1.paginate)(this.informationRepository, options, {
            where: {
                type: enum_1.InformationTypeEnum.ADDITIONAL_PAGE
            }
        });
    }
    async deleteOne(id) {
        const response = await this.informationRepository.delete(id).catch(() => {
            throw new common_1.NotFoundException('data not found');
        });
        return response;
    }
    async change(value, id) {
        const data = await this.informationRepository.update(id, value);
        return data;
    }
    async create(value) {
        const data = this.informationRepository.create(value);
        return await this.informationRepository.save(data);
    }
};
exports.InformationService = InformationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(information_entity_1.Information)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], InformationService);
//# sourceMappingURL=information.service.js.map