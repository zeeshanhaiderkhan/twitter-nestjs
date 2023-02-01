import { Inject, Injectable } from '@nestjs/common';
import {  InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tweet } from './tweets.entity';
import { User } from 'src/users/user.entity';

@Injectable()
export class TweetsService {
    constructor(@InjectRepository(Tweet) private tweetsRepository:Repository<Tweet>,
     @InjectRepository(User) private usersRepository:Repository<User>){ }

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
        
        return await this.usersRepository.createQueryBuilder('user')
        .leftJoinAndMapMany('user.followers','user.followers','follower')
        .select(['user','follower'])
        .leftJoin('follower.tweets','tweet')
        .addSelect(['tweet'])
        .leftJoin('tweet.comments','comment')
        .addSelect(['comment'])
        .leftJoin('comment.created_by','comment_created_by')
        .addSelect(['comment_created_by'])
        .where('user.id = :id',{id}).printSql().orderBy('tweet.time','DESC')
        .getOne();

      // return await this.tweetsRepository.createQueryBuilder('tweet').leftJoinAndSelect('tweet.created_by','user').getMany();
        // return await this.tweetsRepository.createQueryBuilder('t1').leftJoinAndSelect('t1.created_by','user').leftJoinAndSelect('user.followers','follower').getMany();
       // return await this.tweetsRepository.createQueryBuilder("user").leftJoin('follower','users_followers','user.id=follower.user_1').getMany();
    }
}
