import {CreateDateColumn, Entity,Column,PrimaryGeneratedColumn,OneToMany,JoinColumn,ManyToOne, OneToOne} from 'typeorm';
import { Comment } from './comments/comment.entity';
import { User } from 'src/users/user.entity';


@Entity()
export class Tweet{
    @PrimaryGeneratedColumn()
    id:number;

    @ManyToOne(()=>User,(user)=>user.id)
    created_by:User;

    @Column()
    text:string;

    @CreateDateColumn()
    time:Date;

    
    @OneToMany(()=>Comment,(comment)=>comment.created_by)
    comments:Comment[]
    

}