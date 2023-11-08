import { FindOptionsWhere, Repository } from 'typeorm';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { User } from './user.entity';
import { CreateUserDto, UpdateUserDto } from './dto';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    getAll(options: IPaginationOptions, where?: FindOptionsWhere<User>): Promise<Pagination<User>>;
    getByLogin(login: string): Promise<User>;
    getOne(id: string): Promise<User>;
    deleteOne(id: string): Promise<import("typeorm").DeleteResult>;
    change(value: UpdateUserDto, id: string): Promise<import("typeorm").UpdateResult>;
    create(data: CreateUserDto): Promise<User>;
}
