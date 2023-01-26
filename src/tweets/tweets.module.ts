import { Module } from '@nestjs/common';
import { TweetsService } from './tweets.service';
import { TweetsController } from './tweets.controller';
import { Tweet } from './tweets.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './comments/comment.entity';

@Module({
  imports:[TypeOrmModule.forFeature([
    Tweet,
    Comment
  ])],
  providers: [TweetsService,],
  controllers: [TweetsController],
  
})
export class TweetsModule {}
