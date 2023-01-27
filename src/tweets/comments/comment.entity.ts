import {Column, PrimaryGeneratedColumn,Entity,CreateDateColumn, ManyToOne, OneToOne, JoinTable, JoinColumn} from 'typeorm';
import { Tweet } from '../tweets.entity';
import { User } from 'src/users/user.entity';

@Entity()
export class Comment{
    @PrimaryGeneratedColumn()
    id:number;

    
    @ManyToOne(()=>User,(user)=>user.id)
    created_by:User[];

    @Column()
    text:string;

    @CreateDateColumn()
    created_at:Date;

    @JoinColumn()
    @ManyToOne(()=>Tweet,(tweet)=>tweet.id)
    tweet:Tweet[];

}