import { Module } from '@nestjs/common';
import { TweetsService } from './tweets.service';
import { TweetsController } from './tweets.controller';
import { Tweet } from './tweets.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './comments/comment.entity';
import { CommentsController } from './comments/comments.controller';
import { CommentsService } from './comments/comments.service';

@Module({
  imports:[TypeOrmModule.forFeature([
    Tweet,
    Comment
  ])],
  providers: [TweetsService, CommentsService,],
  controllers: [TweetsController, CommentsController],
  
})
export class TweetsModule {}
