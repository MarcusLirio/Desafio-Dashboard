import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNestDto } from '../nest/dto/create-nest.dto';
import { UpdateNestDto } from './dto/update-nest.dto';
import { NestEntity } from './nest.entity';

@Injectable()
export class NestService {
    
    constructor(
      @InjectRepository(NestEntity)
      private readonly nestRepository: Repository<NestEntity> 
    ){}

    async findAll() {
        return await this.nestRepository.find();
    }

    async findOne(id: string) {
      try{
          return await this.nestRepository.findOneById(id);
      } catch (error)
      {
          throw new NotFoundException(error.message); 
      }
    }

    async create(data: CreateNestDto) 
    {
        return await this.nestRepository.save(this.nestRepository.create(data));
    }

    async update(id: string, data: UpdateNestDto) {
        const nest = await this.findOne(id);

        this.nestRepository.merge(nest, data);
        return await this.nestRepository.save(nest);
    }

    async FindEmail(email: string){
        return this.nestRepository.findOne({where: {email}});
      }
      
    async delete(id: string) {
        await this.findOne(id);
        
        await this.nestRepository.softDelete(id);
    }
}
