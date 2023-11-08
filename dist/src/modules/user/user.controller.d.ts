import { UpdateResult } from 'typeorm';
import { CreateUserDto, UpdateUserDto } from './dto';
import { User } from './user.entity';
import { UserService } from './user.service';
import { PaginationDto } from '../../infra/shared/dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getData(route: string, query: PaginationDto): Promise<import("nestjs-typeorm-paginate").Pagination<User, import("nestjs-typeorm-paginate").IPaginationMeta>>;
    getMe(id: string): Promise<User>;
    saveData(data: CreateUserDto): Promise<User>;
    changeData(data: UpdateUserDto, id: string): Promise<UpdateResult>;
    deleteData(id: string): Promise<import("typeorm").DeleteResult>;
}
