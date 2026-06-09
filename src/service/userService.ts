import { ILike } from "typeorm";
import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User";
import { UserRole } from "../entities/UserRole";
import { changeRoleDTO, updateUserDTO, userDTO } from "../schema/userSchema";
import bcrypt from "bcrypt";
import { any } from "zod";

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
  // get user -------------------
  async getUser(page: number, limit: number, search: string) {
    const offset = (page - 1) * limit;

    const getSearch: any = {};
    if (search) {
      getSearch.username = ILike(`%${search}%`);
    }
    const [user, total] = await repo.findAndCount({
      select: {
        id: true,
        username: true,
        email: true,
        role: true,
        password: true,
        created_at: true,
      },
      // where: getSearch,
      skip: offset,
      take: limit,
      order: { created_at: "DESC" },
    });
    console.log(user);
    if (!user) {
      throw new Error("User not Found...");
    }
    return {
      pagination: {
        total,
        page,
        limit,
        total_page: Math.ceil(total / limit),
      },
      data: user,
    };
  },
  // get user -------------------
  async findOne(id: number) {
    const user = await repo.findOne({
      select: {
        id: true,
        username: true,
        email: true,
        password: false,
        role: true,
        created_at: true,
      },
      where: { id: id },
    });
    if (!user) {
      throw new Error("User not found...!");
    }
    return user;
  },
  // delete user
  async deleteOne(id: number){
    const user = await repo.findOne({
      select: {
        id: true,
        username: true,
        email: true,
        password: false,
        role: true,
        created_at: true,
      },
      where: { id: id },
    })
    if (!user) {
      throw new Error("User not found...!");
    }
    await repo.delete(id)
    return user
  },
  // update user -----------------------------------
  async updateOne(id: number, dto: updateUserDTO) {
    const user = await repo.update(
      { id: id },
      {
        username: dto.username,
        email: dto.email,
      },
      
    );
    console.log(user)
    if (user.affected === 0) {
      throw new Error("User not found...!");
    }
    const result = await repo.findOne({
      select: {
        id: true,
        username: true,
        email: true,
        password: false,
        role: true,
        created_at: true,
      },
      where: { id: id },
    });
    return result
  },
  async changeRole(id: number, role: changeRoleDTO){
    const user = await repo.update(
      {id: id},
      {role: role.role}
    ) 
    if (user.affected === 0) {
      throw new Error("User not found...!");
    }
    const result = await repo.findOne({
      select: {
        id: true,
        username: true,
        email: true,
        password: false,
        role: true,
        created_at: true,
      },
      where: { id: id },
    });
    return result
  },
  // Filter by name  --------------
  async filterByName(page: number, limit: number, search: string){
    const offset = (page - 1) * limit;
  console.log({
    page,
    limit,
    search,
    offset
  });
    const getSearch: any = {};
    if (search) {
      getSearch.username = ILike(`%${search}%`);
    }
    const [user, total] = await repo.findAndCount({
      select: {
        id: true,
        username: true,
        email: true,
        role: true,
        password: true,
        created_at: true,
      },
      where: getSearch,
      skip: offset,
      take: limit,
      order: { created_at: "DESC" },
    });
    console.log(user);
    if (!user) {
      throw new Error("User not Found...");
    }
    return {
      pagination: {
        total,
        page,
        limit,
        total_page: Math.ceil(total / limit),
      },
      data: user,
    };
  },
};