import { Controller, Param,Get, Body,Post } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { Comment } from './comment.entity';


@Controller('comments')
export class CommentsController {
    constructor(private readonly commentsService:CommentsService){ }
    
    @Get('user/:userId')
    async getCommentsByUserId(@Param('userId') userId:number){
        return await this.commentsService.getCommentsByUserId(userId);
    }

    @Get('tweet/:tweetId')
    async getCommentsByTweetId(@Param('tweetId') tweetId:number){
        return await this.commentsService.getCommentsByTweetId(tweetId);
    }

    @Post()
    async createComment(@Body() comment:Comment){
        return await this.commentsService.createComment(comment);
    }
}
