"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgencyStatisticModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const agency_statistic_entity_1 = require("./agency-statistic.entity");
const agency_statistic_service_1 = require("./agency-statistic.service");
const agency_statistic_controller_1 = require("./agency-statistic.controller");
let AgencyStatisticModule = exports.AgencyStatisticModule = class AgencyStatisticModule {
};
exports.AgencyStatisticModule = AgencyStatisticModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([agency_statistic_entity_1.AgencyStatistic])],
        controllers: [agency_statistic_controller_1.AgencyStatisticController],
        providers: [agency_statistic_service_1.AgencyStatisticService],
        exports: [agency_statistic_service_1.AgencyStatisticService],
    })
], AgencyStatisticModule);
//# sourceMappingURL=agency-statistic.module.js.map