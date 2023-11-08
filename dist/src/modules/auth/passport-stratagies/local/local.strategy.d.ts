import { AuthService } from '../../auth.service';
import { UserService } from '../../../user/user.service';
declare const LocalStrategy_base: new (...args: any[]) => any;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    private readonly userService;
    constructor(authService: AuthService, userService: UserService);
    validate(login: string, password: string): Promise<import("../../../user/user.entity").User>;
}
export {};
