import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { EducationDegres } from "./EducationDegres";

@Entity("education")
export class Education {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    name: string
    @Column()
    major: string
    @Column()
    gpa: string
    @Column({type: "date"})
    date_start: Date
    @Column({type: "date"})
    date_end: Date
    @Column({ type: "text", nullable: true })
    logo: string | null

    @OneToMany(
        () => EducationDegres, 
        (degres) => degres.by_education
    )
    degres: EducationDegres[]

    @CreateDateColumn()
    created_at: Date
}