import { UserRoleType } from '../../infra/shared/type';
export declare class User {
    id: string;
    avatar: string;
    firstName: string;
    lastName: string;
    login: string;
    email: string;
    phone: string;
    password: string;
    role: UserRoleType;
    createdAt: string;
    hashPassword(password: string): Promise<void>;
    isPasswordValid(password: string): Promise<boolean>;
}
