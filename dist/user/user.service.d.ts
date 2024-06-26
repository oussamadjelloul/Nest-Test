import { PrismaService } from '../prisma/prisma.service';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
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
    createUser(name: string, email: string): Promise<{
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
    findOne(email: string): Promise<{
        id: number;
        email: string;
        name: string | null;
        password: string;
    }>;
}
