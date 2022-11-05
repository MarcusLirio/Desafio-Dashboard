import { Controller, Get, Post, Put, Delete, Body, Param, ParseUUIDPipe, HttpCode, HttpStatus,  Request, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateNestDto } from '../nest/dto/create-nest.dto';
import { UpdateNestDto } from './dto/update-nest.dto';
import { BadRequestSwagger } from '../nest/helpers/swagger/bad-request.swagger';
import { JwtAuthGuard } from '../auth/jwt/jwt-auth.guard';

import { NestService } from './nest.service';
import { IndexNestSwagger } from './swagger/index-nest.swagger';

@Controller('api/v1/nest')
@ApiTags('Nest')
export class NestController {
    constructor(private readonly nestService: NestService){}
    
    @UseGuards(JwtAuthGuard)
    @Get()
    @ApiOperation({ summary: 'Listar todas as tarefas'})
    @ApiResponse({ status: 200, description: 'Listado todas as tarefas'})
    @ApiResponse({ 
        status: 400,
         description: 'Não foi possivel listar as tarefas => bad request',
         type: IndexNestSwagger,
         isArray: true
        })
    async index() {
        return await this.nestService.findAll();
    }
    
    @Post()
    @ApiOperation({ summary: 'Criar novas tarefas'})
    @ApiResponse({ status: 200, description: 'Tarefa criada'})
    @ApiResponse({ 
        status: 400,
        description: 'Não foi possivel criar tarefa => bad request',
        type: BadRequestSwagger
        })
    async create(@Body() body: CreateNestDto) {
        return await this.nestService.create(body);
    }
    
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    @ApiOperation({ summary: 'Listar tarefa por id'})
    @ApiResponse({ status: 200, description: 'Tarefa listada'})
    @ApiResponse({ status: 400, description: 'Não foi possivel trazer a tarefa => bad request'})
    async show(@Param('id', new ParseUUIDPipe()) id:string) {
        return await this.nestService.findOne(id);  
    }
    
    @UseGuards(JwtAuthGuard)
    @Put(':id')
    @ApiOperation({ summary: 'Atualizar as tarefas por id'})
    @ApiResponse({ status: 200, description: 'Tarefa Atualizada'})
    @ApiResponse({ 
        status: 400, 
        description: 'Não foi possivel atualizar => bad request',
        type: BadRequestSwagger
    })
    async update(@Param('id', new ParseUUIDPipe()) id:string, @Body() body: UpdateNestDto) {
        return await this.nestService.update(id,body);
    }
    
    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({ summary: 'Deletar as tarefas por id'})
    @ApiResponse({ status: 200, description: 'Tarefa excluida'})
    @ApiResponse({ status: 400, description: 'Não foi possivel achar a tarefa'})
    async destroy(@Param('id', new ParseUUIDPipe()) id:string) {
        await this.nestService.delete(id);
    }   
}

