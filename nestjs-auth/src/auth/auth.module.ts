import { Module } from '@nestjs/common';
import { LoginController } from './login/login.controller';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategyService } from './jwt-strategy/jwt-strategy.service';

@Module({
  imports: [
    JwtModule.register({
      secret: 'abcd123456',
      signOptions: {
        expiresIn: '300s',
      },
    }),
  ],
  controllers: [LoginController, AuthController],
  providers: [AuthService, JwtStrategyService],
})
export class AuthModule {}
