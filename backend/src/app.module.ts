import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NestModule } from './app/nest/nest.module';
import { AuthModule } from './app/auth/auth.module';


@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      inject: [ConfigService],
      useFactory:(configService: ConfigService) => 
        ({
          type: 'postgres',
          host: configService.get('DB_HOST', 'localhost'),
          port: Number(configService.get('DB_PORT', 5432)),
          username: configService.get('DB_USERNAME', 'postgres'),
          password: configService.get('DB_PASSWORD', '1234'),
          database: configService.get('DB_DATABASE', 'nest'),
          entities: [__dirname + '/**/*.entity{.js,.ts}'], 
          synchronize: true, 
        }),
        
    }),
    NestModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
