import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

//typeorm
import {TypeOrmModule} from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TweetsModule } from './tweets/tweets.module';

//entity imports


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'127.0.0.1',
      port:3306,
      username:'root',
      password:'',
      database:'twitter_db',
      autoLoadEntities:true,
      synchronize:true,

    }),
    UsersModule,
    AuthModule,
    TweetsModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
