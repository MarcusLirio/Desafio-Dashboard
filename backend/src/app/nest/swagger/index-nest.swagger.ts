import { NestEntity } from "../nest.entity";
import {OmitType, PartialType} from '@nestjs/swagger'

export class IndexNestSwagger extends PartialType(
        
        OmitType(NestEntity, 
        [
            'createdAt',
            'deletedAt',
            'updateAt'
        ])
) {}
