import { User } from '../../user/user.entity';
declare class ReturnUser {
    name: string;
    login: string;
    id: string;
    constructor(user: User);
}
export default ReturnUser;
