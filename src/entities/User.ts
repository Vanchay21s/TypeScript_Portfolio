import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";
import { UserRole } from "./UserRole";

@Entity({ name: "user" })
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: "varchar", length: 255 })
  username: string;
  @Column({ type: "varchar", length: 255, unique: true })
  email: string;
  @Column({ type: "varchar", length: 255 })
  password: string;
  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.USER,
  })
  role: UserRole;
  @CreateDateColumn()
  created_at: Date;
}