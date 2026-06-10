import { Repository } from "typeorm";
import { AppDataSource } from "../config/data-source";
import { Profile } from "../entities/Profile";
import { profileDTO } from "../schema/profileSchema";

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
    })
    return await repo.save(user)
  },
};
