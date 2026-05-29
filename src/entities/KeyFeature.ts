import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Work } from "./Work";

@Entity("key_feature")
export class KeyFeature {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ type: "text", nullable: true })
  description: string;

  @ManyToOne(() => Work, (work) => work.feature, { onDelete: "CASCADE" })
  @JoinColumn({ name: "by_work" })
  by_work: Work;

  @CreateDateColumn()
  created_at: Date;
}