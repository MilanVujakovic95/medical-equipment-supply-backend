import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaService } from './shared/utilities/prisma/prisma.service';
import { UsersModule } from './modules/users/users.module';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        UsersModule,
        AuthModule,
    ],
    controllers: [AppController],
    providers: [AppService, PrismaService],
})
export class AppModule {}
