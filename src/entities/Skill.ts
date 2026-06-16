import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("skill ")
export class Skill {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    name: string
    @Column({
        type: "decimal",
        precision: 5,
        scale: 2
    })
    rating: number
    @Column()
    logo_url: string
    @CreateDateColumn()
    created_at: Date;
}