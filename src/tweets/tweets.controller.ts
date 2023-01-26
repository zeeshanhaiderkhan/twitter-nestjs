import { Controller,Post} from '@nestjs/common';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { Tweet } from './tweets.entity';
import { TweetsService } from './tweets.service';

@Controller('tweets')
export class TweetsController {
    constructor(private readonly tweetsService:TweetsService){ }

    @Post()
    async insertTweet(@Body() tweet:Tweet){
        return await this.tweetsService.insert(tweet);
    }
}
