"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InteractiveServiceModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const interactive_service_entity_1 = require("./interactive-service.entity");
const interactive_service_service_1 = require("./interactive-service.service");
const interactive_service_controller_1 = require("./interactive-service.controller");
let InteractiveServiceModule = exports.InteractiveServiceModule = class InteractiveServiceModule {
};
exports.InteractiveServiceModule = InteractiveServiceModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([interactive_service_entity_1.InteractiveService])],
        controllers: [interactive_service_controller_1.InteractiveServiceController],
        providers: [interactive_service_service_1.InteractiveServiceService],
        exports: [interactive_service_service_1.InteractiveServiceService],
    })
], InteractiveServiceModule);
//# sourceMappingURL=interactive-service.module.js.map