import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Education } from "./Education";


@Entity("education_degres")
export class EducationDegres {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    originalname: string
    @Column()
    filename: string
    @Column()
    path: string
    @Column()
    size: number
    @Column()
    encoding: string

    @ManyToOne(
        () => Education,
        (education) => education.degres,
        {onDelete: "CASCADE"}
    )
    @JoinColumn({name: "by_education"})
    by_education: Education

    @CreateDateColumn()
    created_at: Date
}