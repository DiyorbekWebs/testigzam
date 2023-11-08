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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_service_1 = require("./auth.service");
const dto_1 = require("./dto");
const public_decorator_1 = require("./decorators/public.decorator");
const local_auth_guard_1 = require("./passport-stratagies/local/local-auth.guard");
const access_token_user_strategy_1 = require("./passport-stratagies/access-token-user/access-token-user.strategy");
const refresh_token_user_guard_1 = require("./passport-stratagies/refresh-token-user/refresh-token-user.guard");
const refresh_token_user_strategy_1 = require("./passport-stratagies/refresh-token-user/refresh-token-user.strategy");
const accessTokenOptions = {
    secure: true,
    sameSite: 'none',
    maxAge: 31536000000,
};
const refreshTokenOptions = {
    ...accessTokenOptions,
    httpOnly: true,
};
let AuthController = exports.AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async login({ user }, response, _) {
        const accessToken = this.authService.getJWT('access', user.id);
        const refreshToken = this.authService.getJWT('refresh', user.id);
        response.cookie(access_token_user_strategy_1.ACCESS_TOKEN_USER, accessToken, accessTokenOptions);
        response.cookie(refresh_token_user_strategy_1.REFRESH_TOKEN_USER, refreshToken, refreshTokenOptions);
        return { accessToken, refreshToken, user };
    }
    async logout(response) {
        response.clearCookie(access_token_user_strategy_1.ACCESS_TOKEN_USER, accessTokenOptions);
        response.clearCookie(refresh_token_user_strategy_1.REFRESH_TOKEN_USER, refreshTokenOptions);
    }
    async refresh({ user }, response) {
        const accessToken = this.authService.getJWT('access', user.id);
        const refreshToken = this.authService.getJWT('refresh', user.id);
        response.cookie(access_token_user_strategy_1.ACCESS_TOKEN_USER, accessToken, accessTokenOptions);
        response.cookie(refresh_token_user_strategy_1.REFRESH_TOKEN_USER, refreshToken, refreshTokenOptions);
    }
};
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    (0, common_1.Post)('/login'),
    (0, common_1.HttpCode)(200),
    (0, swagger_1.ApiNoContentResponse)({
        description: 'New access, refresh tokens have been saved.',
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Something went wrong from FE' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('/logout'),
    (0, common_1.HttpCode)(200),
    (0, swagger_1.ApiNoContentResponse)({
        description: 'The user was logged out successfully',
    }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Unauthorized Request' }),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.UseGuards)(refresh_token_user_guard_1.RefreshTokenUserGuard),
    (0, common_1.Post)('/refresh'),
    (0, common_1.HttpCode)(200),
    (0, swagger_1.ApiNoContentResponse)({
        description: 'New access, refresh tokens have been saved.',
    }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Unauthorized Request' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refresh", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)('Auth'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map