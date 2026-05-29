import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Work } from "./Work";
import { TechnologyTool } from "./TechnologyTool";

@Entity("technology")
export class Technology {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Work, (work) => work.technology, { onDelete: "CASCADE" })
  @JoinColumn({ name: "by_work" })
  by_work: Work;

  @OneToMany(() => TechnologyTool, (tool) => tool.by_technology)
  tool: TechnologyTool[];

  @CreateDateColumn()
  created_at: Date;
}