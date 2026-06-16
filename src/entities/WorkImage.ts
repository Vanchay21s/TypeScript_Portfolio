import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Education } from "./Education";
import { Work } from "./Work";

@Entity("image_work")
export class WorkImage {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  originalname: string;
  @Column()
  filename: string;
  @Column()
  path: string;
  @Column()
  size: number;
  @Column()
  encoding: string;

  @ManyToOne(() => Work, (by_work) => by_work.image, { onDelete: "CASCADE" })
  @JoinColumn({ name: "by_work" })
  by_work: Work;

  @CreateDateColumn()
  created_at: Date;
}
