"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const config_2 = require("../config");
const auth_module_1 = require("./modules/auth/auth.module");
const user_module_1 = require("./modules/user/user.module");
const information_module_1 = require("./modules/information/information.module");
const document_module_1 = require("./modules/document/document.module");
const vacancy_module_1 = require("./modules/vacancy/vacancy.module");
const management_module_1 = require("./modules/management/management.module");
const interactive_service_module_1 = require("./modules/interactive-service/interactive-service.module");
const gallery_module_1 = require("./modules/gallery/gallery.module");
const agency_module_1 = require("./modules/agency/agency.module");
const banner_module_1 = require("./modules/banner/banner.module");
const communication_tool_module_1 = require("./modules/communication-tool/communication-tool.module");
const statistic_module_1 = require("./modules/statistic/statistic.module");
const useful_link_module_1 = require("./modules/useful-link/useful-link.module");
const territorial_division_module_1 = require("./modules/territorial-division/territorial-division.module");
const territorial_management_module_1 = require("./modules/territorial-management/territorial-management.module");
const agency_statistic_module_1 = require("./modules/agency-statistic/agency-statistic.module");
const agency_veteran_module_1 = require("./modules/agency-veteran/agency-veteran.module");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [config_2.default],
                cache: true,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => configService.get('database'),
                inject: [config_1.ConfigService],
            }),
            auth_module_1.AuthModule,
            agency_module_1.AgencyModule,
            agency_statistic_module_1.AgencyStatisticModule,
            agency_veteran_module_1.AgencyVeteranModule,
            banner_module_1.BannerModule,
            communication_tool_module_1.CommunicationToolModule,
            document_module_1.DocumentModule,
            gallery_module_1.GalleryModule,
            interactive_service_module_1.InteractiveServiceModule,
            management_module_1.ManagementModule,
            information_module_1.InformationModule,
            statistic_module_1.StatisticModule,
            territorial_division_module_1.TerritorialDivisionModule,
            territorial_management_module_1.TerritorialManagementModule,
            useful_link_module_1.UsefulLinkModule,
            user_module_1.UserModule,
            vacancy_module_1.VacancyModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map