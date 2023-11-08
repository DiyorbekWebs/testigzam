import { ConfigService } from '@nestjs/config';
import { AuthService } from '../../auth.service';
export declare const ACCESS_TOKEN_USER = "access_token_user";
declare const AccessTokenUserStrategy_base: new (...args: any[]) => any;
export declare class AccessTokenUserStrategy extends AccessTokenUserStrategy_base {
    private readonly authService;
    constructor(authService: AuthService, configService: ConfigService);
    validate(payload: {
        sub: string;
    }): Promise<import("../../../user/user.entity").User>;
}
export {};
