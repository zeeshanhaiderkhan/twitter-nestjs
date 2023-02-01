import { Injectable } from '@nestjs/common';
import { Inject } from '@nestjs/common/decorators/core/inject.decorator';
import { InjectRepository } from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>
    ){}

    findAll(){
        return this.usersRepository.find();
    }

    async insert(user:User){
        return await this.usersRepository.insert(user);

    }

    async findOne(id:number){
        return await this.usersRepository.findOneBy({ id });
    }

    async update(id:number,user:User){
        return await this.usersRepository.update(id,user);
    }

    async remove(id){
        return await  this.usersRepository.remove(id);
    }
    
    //userId, the one who is following
    //toFollowId, the other user, which is being followed
    async followUser(userId:number,toFollowId:number){
        return await this.usersRepository.createQueryBuilder("user").relation(User,"followers").of(userId).add(toFollowId);
    }

    

}
