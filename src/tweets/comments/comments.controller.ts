import { Controller, Param,Get } from '@nestjs/common';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
    constructor(private readonly commentsService:CommentsService){ }
    
    @Get(':userId')
    async getCommentsByUserId(@Param('userId') userId:number){
        return await this.commentsService.getCommentsByUserId(userId);
    }
    
}
