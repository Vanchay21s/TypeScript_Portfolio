import { email } from "zod";
import bcrypt from "bcrypt";
import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User";
import { loginDTO, registerDTO } from "../schema/userSchema";
import { generateToken } from "../util/jwt";

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
    const passwordHash = await bcrypt.hash(dto.password, 10);
    // create new enitity
    const auth =  repo.create({
      username: dto.username,
      email: dto.email,
      password: passwordHash,
    });
    // insert to db
    await repo.save(auth);
    // remove password for return
    const { password, ...safeUser } = auth;
    return safeUser;
  },
  async login(dto: loginDTO) {
    const user = await repo.findOne({
      where: { email: dto.email },
    });
    if (!user) throw new Error("User not found!");

    const match = await bcrypt.compare(dto.password, user.password);
    if (!match) throw new Error("Wrong password");
    const token = generateToken(user);

    const {password, ...safeUser} = user
    return { safeUser, token };
  },
};
