import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getUsers(): Promise<{
        id: number;
        email: string;
        name: string | null;
        password: string;
    }[]>;
    getUser(id: number): Promise<{
        id: number;
        email: string;
        name: string | null;
        password: string;
    }>;
    createUser(user: CreateUserDto): Promise<{
        id: number;
        email: string;
        name: string | null;
        password: string;
    }>;
    deleteUser(id: string): Promise<{
        id: number;
        email: string;
        name: string | null;
        password: string;
    }>;
}
