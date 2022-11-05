import { Injectable } from '@nestjs/common';
import { NestService } from '../nest/nest.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private nestService: NestService,
        private jwtService: JwtService,
        ) {}

    async validateUser(email: string, senha: string){
      const user = await this.nestService.FindEmail(email);
      if (user && user.senha === senha) {
        const {id, email,senha} = user;
        return {id, email, senha};
      }
      return null;
    }

    async login(user:any) {
        const payload = { email: user.email, sub: user.id };
        return {
            acess_token: this.jwtService.sign(payload)
        };
    }
}
