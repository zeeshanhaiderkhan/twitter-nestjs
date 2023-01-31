import { Injectable } from '@nestjs/common';
import {  InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tweet } from './tweets.entity';

@Injectable()
export class TweetsService {
    constructor(@InjectRepository(Tweet) private tweetsRepository:Repository<Tweet>){ }

    async create(tweet:Tweet){
        return await this.tweetsRepository.insert(tweet);
    }

    //userId refers to user tweet posted by
    async getTweetsByUserId(userId:number){
        return await this.tweetsRepository.createQueryBuilder("tweet").where("tweet.created_by = :id",{id:userId}).execute();
         
    }
    
    //id refers to tweet id
    async getTweetById(id:number){
        return await this.tweetsRepository.findOneBy({id});
    }

    async getTweetsOfFollowing(id:number){
        return await this.tweetsRepository.createQueryBuilder('follower').getMany();
       // return await this.tweetsRepository.createQueryBuilder("user").leftJoin('follower','users_followers','user.id=follower.user_1').getMany();
    }
}
