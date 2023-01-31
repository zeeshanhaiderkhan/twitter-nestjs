import { Controller,Post,Param,Get} from '@nestjs/common';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { Tweet } from './tweets.entity';
import { TweetsService } from './tweets.service';

@Controller('tweets')
export class TweetsController {
    constructor(private readonly tweetsService:TweetsService){ }

    //is this a good design, without param? and hitting the endpoint
    @Post()
    async insertTweet(@Body() tweet:Tweet){
        return await this.tweetsService.create(tweet);
    }

    @Get('/:userId')
    async getTweetsByUserId(@Param('userId') userId:number){
        return await this.tweetsService.getTweetsByUserId(userId);
    }
    
    @Get('/followers/:id')
    async getTweetsOfFollowing(@Param('id') id:number){
        return await this.tweetsService.getTweetsOfFollowing(id);
    }


}
