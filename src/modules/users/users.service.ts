import { Injectable } from '@nestjs/common';
import { User, UserRole } from './entities/user.entity';
import { PrismaService } from '../../common/prisma/prisma.service';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: '1',
      email: 'ayeaye@gmail.com',
      password: '12345678',
      role: UserRole.INSTRUCTOR,
    },
    {
      id: '2',
      email: 'john.doe@gmail.com',
      password: '87654321',
      role: UserRole.INSTRUCTOR,
    },
    {
      id: '3',
      email: 'jane.smith@gmail.com',
      password: 'password123',
      role: UserRole.STUDENT,
    },
    {
      id: '4',
      email: 'bob.johnson@gmail.com',
      password: 'password456',
      role: UserRole.ADMIN,
    },
    {
      id: '5',
      email: 'aungaung@gmail.com',
      password: '12345678',
      role: UserRole.STUDENT,
    },
  ];

  constructor(private prisma: PrismaService) {}

  findAll(): User[] {
    return this.users;
    // async findAll() {
    //   return this.prisma.user.findMany();
  }
}
