"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TerritorialManagementModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const territorial_management_entity_1 = require("./territorial-management.entity");
const territorial_management_service_1 = require("./territorial-management.service");
const territorial_management_controller_1 = require("./territorial-management.controller");
let TerritorialManagementModule = exports.TerritorialManagementModule = class TerritorialManagementModule {
};
exports.TerritorialManagementModule = TerritorialManagementModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([territorial_management_entity_1.TerritorialManagement])],
        controllers: [territorial_management_controller_1.TerritorialManagementController],
        providers: [territorial_management_service_1.TerritorialManagementService],
        exports: [territorial_management_service_1.TerritorialManagementService],
    })
], TerritorialManagementModule);
//# sourceMappingURL=territorial-management.module.js.map