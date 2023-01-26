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

    async getTweetsByUserId(userId:number){
        return await this.tweetsRepository.createQueryBuilder("tweet").where("tweet.created_by = :id",{id:userId}).execute();
         
    }
    
}
