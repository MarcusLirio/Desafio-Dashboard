import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NestController } from './nest.controller';
import { NestEntity } from './nest.entity';
import { NestService } from './nest.service';

@Module({
  imports:[TypeOrmModule.forFeature([NestEntity])],
  controllers: [NestController],
  providers: [NestService],
  exports: [NestService]
})
export class NestModule {}
