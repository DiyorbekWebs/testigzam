import { UserRoleType } from '../../../infra/shared/type';
declare class UpdateUserDto {
    readonly avatar: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly login: string;
    readonly password: string;
    readonly role: UserRoleType;
    readonly filial: string;
    readonly email: string;
    readonly phone: string;
}
export default UpdateUserDto;
