import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { KeyFeature } from "./KeyFeature";
import { Technology } from "./Technology";

@Entity("work")
export class Work {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  position: string;
  @Column()
  image: string;
  @Column()
  github: string;
  @Column()
  demo: string;
  @Column() 
  framework: string;
  @Column("text")
  description: string;
  @CreateDateColumn()
  created_at: Date;
  @OneToMany(() => KeyFeature, (feature) => feature.by_work)
  feature: KeyFeature[];
  @OneToMany(() => Technology, (tech) => tech.by_work)
  technology: Technology[];
}