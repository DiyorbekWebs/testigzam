import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UserService } from '../user/user.service';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    private readonly configService;
    constructor(userService: UserService, jwtService: JwtService, configService: ConfigService);
    validateUserByEmailPassword(login: string, password: string): Promise<import("../user/user.entity").User>;
    validateUserById(userId: string): Promise<import("../user/user.entity").User>;
    comparePasswordWithHash(password: string, hash: string): Promise<boolean>;
    getJWT(type: 'access' | 'refresh', sub: string): string;
}
