import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User";
import { UserRole } from "../entities/UserRole";
import { userDTO } from "../schema/userSchema";
import bcrypt from "bcrypt";

const repo = AppDataSource.getRepository(User);
export const userService = {
  async creat(dto: userDTO) {
    const exists_email = await repo.findOne({
      where: { email: dto.email },
    });
    if (exists_email) {
      throw new Error("Email alreay exists...");
    }
    const passwordhash = await bcrypt.hash(dto.password, 10);
    const user = repo.create({
      username: dto.username,
      email: dto.email,
      password: passwordhash,
      role: dto.role as UserRole,
    });
    await repo.save(user);
    const { password, ...result } = user;
    return result;
  },
};
