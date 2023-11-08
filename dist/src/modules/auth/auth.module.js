"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const user_module_1 = require("../user/user.module");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const config_1 = require("@nestjs/config");
const access_token_user_strategy_1 = require("./passport-stratagies/access-token-user/access-token-user.strategy");
const local_strategy_1 = require("./passport-stratagies/local/local.strategy");
const refresh_token_user_strategy_1 = require("./passport-stratagies/refresh-token-user/refresh-token-user.strategy");
let AuthModule = exports.AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            user_module_1.UserModule,
            passport_1.PassportModule,
            jwt_1.JwtModule.registerAsync({
                useFactory: (configService) => {
                    const jwtConfig = configService.getOrThrow('jwt');
                    return {
                        secret: jwtConfig.accessTokenSecret,
                        signOptions: { expiresIn: jwtConfig.accessTokenExpiration },
                    };
                },
                inject: [config_1.ConfigService],
            }),
        ],
        providers: [
            auth_service_1.AuthService,
            access_token_user_strategy_1.AccessTokenUserStrategy,
            local_strategy_1.LocalStrategy,
            refresh_token_user_strategy_1.RefreshTokenUserStrategy,
        ],
        controllers: [auth_controller_1.AuthController],
        exports: [auth_service_1.AuthService],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map