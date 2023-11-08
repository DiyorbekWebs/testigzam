import { UserRoleEnum } from 'src/infra/shared/enum';
export declare const ROLES_KEY = "ROLES_KEY";
export declare const Roles: (...roles: UserRoleEnum[]) => import("@nestjs/common").CustomDecorator<string>;
