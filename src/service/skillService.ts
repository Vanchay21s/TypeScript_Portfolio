import { AppDataSource } from "../config/data-source";
import { Skill } from "../entities/Skill";
import { skillDTO } from "../schema/skillSchema";

const repo = AppDataSource.getRepository(Skill);
export const skillService = {
  // create skil ------------
  async create(dto: skillDTO) {
    const skill = repo.create({
      name: dto.name,
      rating: dto.rating,
      logo_url: dto.logo_url,
    });
    return await repo.save(skill);
  },

  // find skill ------------
  async find() {
    const skill = await repo.find({
      select: {
        id: true,
        name: true,
        rating: true,
        logo_url: true,
        created_at: true,
      },
      order: { created_at: "DESC" },
    });
    return skill;
  },
  // findOne
  async findOne(id: number) {
    const skill = await repo.findOne({
      select: {
        id: true,
        name: true,
        rating: true,
        logo_url: true,
        created_at: true,
      },
      where: { id: id },
    });
    if (!skill) {
      throw new Error("skill not found...!");
    }
    return skill;
  },

  // update one 
  async updateOne(id: number, dto: skillDTO) {
    console.log("Serviec skill OK")
    const education = await repo.update(
      { id: id },
      {
        name: dto.name,
        rating: dto.rating,
        logo_url: dto.logo_url,
      },
    );
    if (education.affected === 0) {
      throw new Error("Skill's not found...!");
    }
    console.log("Skill Updated - skillService-updateONE")
    return await repo.findOne({
      select: {
        id: true,
        name: true,
        rating: true,
        logo_url: true,
        created_at: true,
      },
      where: { id: id },
    });
  },
  async deleteOne(id: number) {
    const skill = await repo.findOne({
      select: {
        id: true,
        name: true,
        logo_url: true,
        rating: true,
        created_at: true,
      },
      where: { id: id },
    });
    if (!skill) {
      throw new Error("Skill's not found...!");
    }
    await repo.delete(id);
    return skill 
},
};
