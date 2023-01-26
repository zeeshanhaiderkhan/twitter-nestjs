import {Column, PrimaryGeneratedColumn,Entity,CreateDateColumn, ManyToOne, OneToOne} from 'typeorm';
import { Tweet } from '../tweets.entity';
import { User } from 'src/users/user.entity';

@Entity()
export class Comment{
    @PrimaryGeneratedColumn()
    id:number;

    @ManyToOne(()=>User,(user)=>user.id)
    created_by:User;

    @Column()
    text:string;

    @CreateDateColumn()
    created_at:Date;

    @OneToOne(()=>Tweet,(tweet)=>tweet.created_by)
    tweet:Tweet;

}