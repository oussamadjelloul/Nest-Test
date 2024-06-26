import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiBody } from '@nestjs/swagger';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getUsers() {
    return this.userService.getUsers();
  }

  @Get(':id')
  async getUser(@Param('id') id: number) {
    return this.userService.getUser(id);
  }

  @ApiBody({
    type: CreateUserDto,
    examples: {
      exemple: { value: { email: 'string', name: 'string' } },
    },
  })
  @Post()
  async createUser(@Body() user: CreateUserDto) {
    return this.userService.createUser(user.name, user.email);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }
}
