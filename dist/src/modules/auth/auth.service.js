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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const bcrypt = require("bcrypt");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const exceptions_1 = require("@nestjs/common/exceptions");
const config_1 = require("@nestjs/config");
const user_service_1 = require("../user/user.service");
let AuthService = exports.AuthService = class AuthService {
    constructor(userService, jwtService, configService) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async validateUserByEmailPassword(login, password) {
        const user = await this.userService.getByLogin(login);
        if (!user) {
            throw new exceptions_1.BadRequestException('Invalid login.');
        }
        const isPasswordSame = await this.comparePasswordWithHash(password, user.password);
        if (!isPasswordSame) {
            throw new exceptions_1.BadRequestException('Invalid password');
        }
        return user;
    }
    async validateUserById(userId) {
        const user = await this.userService.getOne(userId).catch(() => {
            throw new exceptions_1.BadRequestException('Valid token with non-existent user.');
        });
        return user;
    }
    async comparePasswordWithHash(password, hash) {
        const isSame = await bcrypt.compare(password, hash);
        return isSame;
    }
    getJWT(type, sub) {
        const payload = { sub };
        if (type === 'access') {
            return this.jwtService.sign(payload);
        }
        const jwtConfig = this.configService.getOrThrow('jwt');
        return this.jwtService.sign(payload, {
            secret: jwtConfig.refreshTokenSecret,
            expiresIn: jwtConfig.refreshTokenExpiration,
        });
    }
};
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map