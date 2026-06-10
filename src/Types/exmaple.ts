import { UserRole } from "../entities/UserRole";
export interface iUser {
  id: number;
  username: string;
  email: string;
  role: UserRole;
  created_at: Date;
}
