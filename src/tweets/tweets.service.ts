import { Injectable } from '@nestjs/common';
import {  InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tweet } from './tweets.entity';

@Injectable()
export class TweetsService {
    constructor(@InjectRepository(Tweet) private tweetsRepository:Repository<Tweet>){ }

    async insert(tweet:Tweet){
        return await this.tweetsRepository.insert(tweet);

    }
}
