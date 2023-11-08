import { ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
declare const AccessTokenUserGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class AccessTokenUserGuard extends AccessTokenUserGuard_base {
    private readonly reflector;
    constructor(reflector: Reflector);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | import("rxjs").Observable<boolean>;
}
export {};
