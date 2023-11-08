"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatisticModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const statistic_entity_1 = require("./statistic.entity");
const statistic_service_1 = require("./statistic.service");
const statistic_controller_1 = require("./statistic.controller");
let StatisticModule = exports.StatisticModule = class StatisticModule {
};
exports.StatisticModule = StatisticModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([statistic_entity_1.Statistic])],
        controllers: [statistic_controller_1.StatisticController],
        providers: [statistic_service_1.StatisticService],
        exports: [statistic_service_1.StatisticService],
    })
], StatisticModule);
//# sourceMappingURL=statistic.module.js.map