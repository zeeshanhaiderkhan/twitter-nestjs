import { Tweet } from 'src/tweets/tweets.entity';
import {Entity,Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany} from 'typeorm';


@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    firstName:string;

    @Column()
    lastName:string;

    @Column()
    email:string;

    @Column()
    password:string;

    @Column()
    dob:Date;

    @Column()
    username:string;

    @Column({default:true})
    isActive:boolean;

    @ManyToMany(()=>User)
    @JoinTable({name:'follower'})
    followers:User[]

    @OneToMany(()=>Tweet,(tweet)=>tweet.created_by)
    tweets:Tweet[]
}