import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("profile")
export class Profile {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    fullname: string
    @Column({nullable: true })
    username: string
    @Column()
    image: string
    @Column()
    phone: string
    @Column({unique: true,})
    email: string
    @Column({type: "text"})
    address: string
    @Column("text")
    about: string
    @Column()
    dateStart: Date
    @Column()
    dateEnd: Date
    @CreateDateColumn()
    created_at: Date;
}