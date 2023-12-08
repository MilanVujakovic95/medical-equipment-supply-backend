import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/shared/utilities/prisma/prisma.service';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}

    create(createUserDto: CreateUserDto) {
        return this.prisma.user.create({ data: createUserDto });
    }

    findAll() {
        return this.prisma.user.findMany();
    }

    findOne(
        userWhereUniqueInput: Prisma.UserWhereUniqueInput,
    ): Promise<User | null> {
        return this.prisma.user.findUnique({
            where: userWhereUniqueInput,
        });
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return this.prisma.user.update({ where: { id }, data: updateUserDto });
    }

    remove(id: number) {
        return this.prisma.user.delete({ where: { id } });
    }
}
