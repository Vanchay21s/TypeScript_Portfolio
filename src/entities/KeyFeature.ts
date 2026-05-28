import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Work } from "./Work";

@Entity("key_feature")
export class KeyFeature {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ type: "text", nullable: true })
  description: string;

  @ManyToOne(() => Work, (work) => work.features, { onDelete: "CASCADE" })
  @JoinColumn({ name: "by_work" })
  work: Work;

  @CreateDateColumn()
  created_at: Date;
}