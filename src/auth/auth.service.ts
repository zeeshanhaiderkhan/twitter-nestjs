import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {

    constructor(@InjectRepository(User) private usersRepository:Repository<User> ){ }

    async  loginUser(user:User):Promise<User>{
        return await this.usersRepository.findOneBy(user);
    }
}
