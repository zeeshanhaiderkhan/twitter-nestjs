import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './comment.entity';
import { User } from 'src/users/user.entity';
@Injectable()
export class CommentsService {
    constructor(@InjectRepository(Comment) private commentsRepository: Repository<Comment>){ }

    async createComment(comment:Comment){
       // return await this.commentsRepository.createQueryBuilder("comment").insert().values([comment]);
       return await this.commentsRepository.insert(comment);
    }

    async getCommentsByUserId(userId:number){
        return await this.commentsRepository.createQueryBuilder("comment").where("comment.created_by = :id",{id:userId}).execute();   
    }

    
    async getCommentsByTweetId(tweetId:number){
        return await this.commentsRepository.createQueryBuilder("comment").where("comment.tweetId = :id",{id:tweetId}).getMany();
    }

}
