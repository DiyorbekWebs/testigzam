import { Response } from 'express';
import { AuthService } from './auth.service';
import { LoginDto } from './dto';
import { User } from '../user/user.entity';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login({ user }: {
        user: User;
    }, response: Response, _: LoginDto): Promise<{
        accessToken: string;
        refreshToken: string;
        user: User;
    }>;
    logout(response: Response): Promise<void>;
    refresh({ user }: {
        user: User;
    }, response: Response): Promise<void>;
}
