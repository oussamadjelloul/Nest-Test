import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getUsers() {
    return this.prisma.user.findMany();
  }

  async getUser(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async createUser(name: string, email: string) {
    return this.prisma.user.create({ data: { name, email } });
  }

  async deleteUser(id: string) {
    const idUSer = parseInt(id);
    return this.prisma.user.delete({ where: { id: idUSer } });
  }
  async findOne(email: string) {
    return this.prisma.user.findUnique({ where: { email: email } });
  }
}
