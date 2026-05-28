import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Technology } from "./Technology";

@Entity("technology_tool")
export class TechnologyTool {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Technology, (tech) => tech.tools, { onDelete: "CASCADE" })
  @JoinColumn({ name: "by_technology" })
  technology: Technology;

  @CreateDateColumn()
  created_at: Date;
}