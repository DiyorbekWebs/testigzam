import { ReturnUserDto } from './index';
declare class JwtPayloadDto {
    sub: string;
    login: string;
    constructor(user: ReturnUserDto);
}
export default JwtPayloadDto;
