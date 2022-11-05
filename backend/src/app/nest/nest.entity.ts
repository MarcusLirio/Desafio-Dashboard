
import { ApiProperty } from "@nestjs/swagger";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity({name: 'nest'}) 
export class NestEntity {
    
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty()
    id: string;
    
    @Column()
    @ApiProperty()
    nome: string;
    
    @Column()
    @ApiProperty()
    email: string;
    
    @Column()
    @ApiProperty()
    celular: string;
    
    @Column({type:'json'})
    @ApiProperty()
    sexo: string;
    
    @Column()
    @ApiProperty()
    endereco: string;
    
    @Column()
    @ApiProperty()
    senha: string;
    
    @Column({name:'valor_acerto_mensal', type:'decimal'})
    @ApiProperty()
    valoracertomensal: string;
    
    @Column({name:'tipo_de_contrato', type:'json'})
    @ApiProperty()
    tipodecontrato: string;
    
    @CreateDateColumn({name:'created_at'})
    @ApiProperty()
    createdAt: string;
    
    @UpdateDateColumn({name:'update_at'})
    @ApiProperty()
    updateAt: string;
    
    @DeleteDateColumn({name:'deleted_at'})
    @ApiProperty()
    deletedAt: string;

    constructor(nest?: Partial<NestEntity>){
        this.id = nest?.id;
        this.nome = nest?.nome;
        this.email = nest?.email;
        this.celular= nest?.celular;
        this.sexo = nest?.sexo;
        this.endereco = nest?.endereco;
        this.senha= nest?.senha;
        this.valoracertomensal = nest?.valoracertomensal;
        this.tipodecontrato = nest?.tipodecontrato;
        this.createdAt = nest?.createdAt;
        this.updateAt = nest?.updateAt;
        this.deletedAt = nest?.deletedAt;
    }
}