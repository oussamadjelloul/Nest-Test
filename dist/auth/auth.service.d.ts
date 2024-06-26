import { UserService } from '../user/user.service';
export declare class AuthService {
    private usersService;
    jwtService: any;
    constructor(usersService: UserService);
    signIn(email: string, pass: string): Promise<any>;
}
