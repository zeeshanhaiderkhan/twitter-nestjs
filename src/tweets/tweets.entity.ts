import {Entity,Column,PrimaryGeneratedColumn,OneToMany,JoinColumn,ManyToOne, OneToOne} from 'typeorm';
import { Comment } from './comments/comment.entity';
import { User } from 'src/users/user.entity';


@Entity()
export class Tweet{
    @PrimaryGeneratedColumn()
    id:number;

    @OneToOne(()=>User,(user)=>user.id)
    created_by:User;

    @Column()
    text:string;

    @Column()
    time:Date;

    @OneToMany(()=>Comment,(comment)=>comment.created_by)
    comments:Comment[]
    

}