import ReturnUserDto from './return-user.dto';
declare class ValidateUserDto {
    message: string;
    body: ReturnUserDto | null;
    constructor(message: string, body: ReturnUserDto | null);
}
export default ValidateUserDto;
