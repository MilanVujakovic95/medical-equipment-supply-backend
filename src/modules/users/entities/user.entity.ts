import { ApiProperty } from '@nestjs/swagger';
import { User, UserRole } from '@prisma/client';
import { Exclude, Expose } from 'class-transformer';

export class UserEntity implements User {
    constructor(partial: Partial<UserEntity>) {
        Object.assign(this, partial);
    }

    @ApiProperty()
    id: number;

    @ApiProperty()
    email: string;

    @Exclude()
    password: string;

    @ApiProperty()
    companyId: number;

    @ApiProperty()
    firstName: string;

    @ApiProperty()
    lastName: string;

    @ApiProperty()
    country: string;

    @ApiProperty()
    city: string;

    @ApiProperty()
    phone: string;

    @ApiProperty()
    occupation: string;

    @ApiProperty()
    companyInfo: string;

    @ApiProperty()
    role: UserRole;

    @ApiProperty()
    verified: boolean;

    @ApiProperty()
    passwordChanged: boolean;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

    @Expose()
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
