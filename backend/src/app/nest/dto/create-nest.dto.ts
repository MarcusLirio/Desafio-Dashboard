import { ApiProperty } from "@nestjs/swagger";
import { IsIn, IsNotEmpty } from "class-validator";
import { Double } from "typeorm";

export class CreateNestDto {
    @IsNotEmpty() 
    @ApiProperty()
    nome: string;
   
    @IsNotEmpty() 
    @ApiProperty()
    email: string;
      
    @IsNotEmpty()
    @ApiProperty()
    celular: string;
    
    @IsNotEmpty() 
    @ApiProperty()
    sexo: string;
      
    @IsNotEmpty()
    @ApiProperty()
    endereco: string;
   
    @IsNotEmpty() 
    @ApiProperty()
    senha: string;
      
    @IsNotEmpty()
    @ApiProperty()
    valoracertomensal: string;
   
    @IsNotEmpty() 
    @ApiProperty()
    tipodecontrato: string;
      
}