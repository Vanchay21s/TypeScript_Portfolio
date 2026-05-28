import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Work } from "./Work";
import { TechnologyTool } from "./TechnologyTool";

@Entity("technology")
export class Technology {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Work, (work) => work.technologies, { onDelete: "CASCADE" })
  @JoinColumn({ name: "by_work" })
  work: Work;

  @OneToMany(() => TechnologyTool, (tool) => tool.technology)
  tools: TechnologyTool[];

  @CreateDateColumn()
  created_at: Date;
}