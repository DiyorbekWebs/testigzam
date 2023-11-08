import { ConfigService } from '@nestjs/config';
import { AuthService } from '../../auth.service';
export declare const REFRESH_TOKEN_USER = "refresh_token_user";
declare const RefreshTokenUserStrategy_base: new (...args: any[]) => any;
export declare class RefreshTokenUserStrategy extends RefreshTokenUserStrategy_base {
    private readonly authService;
    constructor(authService: AuthService, configService: ConfigService);
    validate(payload: {
        sub: string;
    }): Promise<import("../../../user/user.entity").User>;
}
export {};
