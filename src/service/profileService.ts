import { Repository } from "typeorm";
import { AppDataSource } from "../config/data-source";
import { Profile } from "../entities/Profile";
import { profileDTO } from "../schema/profileSchema";
import { email } from "zod";

const repo = AppDataSource.getRepository(Profile);
export const profileService = {
  async create(dto: profileDTO) {
    const user = repo.create({
      fullname: dto.fullname,
      username: dto.username,
      image: dto.image.filename,
      email: dto.email,
      phone: dto.phone,
      address: dto.address,
      about: dto.about,
      date: dto.date,
    });
    return await repo.save(user);
  },
  // get profile
  async find() {
    const profile = await repo.find({
      select: {
        fullname: true,
        username: true,
        image: true,
        email: true,
        phone: true,
        address: true,
        about: true,
        date: true,
      },
      order: { created_at: "DESC" },
    });
    if (!profile) {
      throw new Error("Profile not Found...");
    }
    return profile;
  },
  // get profile -------------------
  async findOne(id: number) {
    const profile = await repo.findOne({
      select: {
        fullname: true,
        username: true,
        image: true,
        email: true,
        phone: true,
        address: true,
        about: true,
        date: true,
      },
      where: { id: id },
    });
    if (!profile) {
      throw new Error("Profile not found...!");
    }
    return profile;
  },
  // update profile -----------------------------------
  async updateOne(id: number, dto: profileDTO) {
    const emailExist = await repo.findOne({
      where: { email: dto.email},
    });
    if (emailExist && emailExist.id !== id) {
      throw new Error("Email already exists");
    }
    const profile = await repo.update(
      { id: id },
      {
        fullname: dto.fullname,
        username: dto.username,
        image: dto.image.filename,
        email: dto.email,
        phone: dto.phone,
        address: dto.address,
        about: dto.about,
        date: dto.date,
      },
    );
    if (profile.affected === 0) {
      throw new Error("User not found...!");
    }
    const result = await repo.findOne({
      select: {
        fullname: true,
        username: true,
        image: true,
        email: true,
        phone: true,
        address: true,
        about: true,
        date: true,
      },
      where: { id: id },
    });
    return result;
  },
};
