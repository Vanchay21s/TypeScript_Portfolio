import { email } from "zod";
import bcrypt from "bcrypt";
import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User";
import { registerDTO } from "../schema/userSchema";
import { create } from "node:domain";

const repo = AppDataSource.getRepository(User);
export const authService = {
  async singup(dto: registerDTO) {
    // check if user exists..
    const existUser = await repo.findOne({
      where: { email: dto.email },
    });
    if (existUser) {
      throw new Error("User already exists.");
    }
    // 
    const passwordHash = await bcrypt.hash(dto.password, 10)
    // create new enitity
    const auth = repo.create({
        username: dto.username,
        email: dto.email,
        password: passwordHash
    })
    // insert to db
    await repo.save(auth)
    // remove password for return
    const {password, ...safeUser} = auth
    return safeUser
  },
  async login() {},
};
