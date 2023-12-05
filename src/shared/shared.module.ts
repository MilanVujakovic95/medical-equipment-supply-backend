import { Module } from '@nestjs/common';
import { PasswordService } from './utilities/password.service';

@Module({
    providers: [PasswordService],
    exports: [PasswordService],
})
export class SharedModule {}
