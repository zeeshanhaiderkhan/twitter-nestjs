import { Controller,Get,Param, Body,Post} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { NotFoundException } from '@nestjs/common/exceptions';
import { Delete, Put } from '@nestjs/common/decorators';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService:UsersService){ }

    @Get(':id')
    async getUser(@Param('id') id:number){
        const user:User = await this.usersService.findOne(id);
        if(user){
            return user;
        }
        else{
            throw new NotFoundException;
        }
    }

    @Post()
    async addUser(@Body() user:User){
        return  await this.usersService.insert(user);
    }

    @Get()
    async getUsers(){
        return await this.usersService.findAll();
    }

    @Put(':id')
    async updateUser(@Param('id') id:number, @Body() user:User){
        
        return await this.usersService.update(id,user);
    }

    @Delete()
    async deleteUser(@Param('id') id:number){
        return await this.usersService.remove(id);
    }

    @Post(':userId/follow/:toFollowId')
    async followUser(@Param() params:any){
        return await this.usersService.followUser(
            params.userId,
            params.toFollowId
        )
    }

    
}
