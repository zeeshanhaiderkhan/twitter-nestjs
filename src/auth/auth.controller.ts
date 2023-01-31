import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import {Get,Post,Body, HttpException, HttpStatus} from "@nestjs/common";
import { User } from 'src/users/user.entity';
import { HttpCode } from '@nestjs/common/decorators';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){ }

    @HttpCode(HttpStatus.OK)
    @Post()
    async loginUser(@Body() user:User){
        
        const userData:User = await this.authService.loginUser(user);
        console.log(userData)
        if(!userData){
        
            throw new HttpException({
                message:"Invalid User Credentials! Login Failed!",
                statusCode:HttpStatus.UNAUTHORIZED
            },HttpStatus.UNAUTHORIZED)
        }
        return userData;
    }
}
