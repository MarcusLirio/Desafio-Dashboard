import { Module } from '@nestjs/common';
import { NestModule } from '../nest/nest.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt/jwt.strategy';
import {JwtModule} from  '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants } from './jwt/constants';

@Module({
  imports: [
    NestModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {expiresIn:'10min'},
    })
  ],

  providers: [
  AuthService, 
  LocalStrategy, 
  JwtStrategy
  ],

  controllers: [AuthController]
})
export class AuthModule {}
