import { AppDataSource } from "../config/data-source";
import { KeyFeature } from "../entities/KeyFeature";
import { Technology } from "../entities/Technology";
import { featureDTO } from "../schema/featureSchema";
import { technologyDTO } from "../schema/technologySchema";

const repo = AppDataSource.getRepository(Technology);
export const technologyService = {
  async create(dto: technologyDTO) {
    const technology = repo.create({
      name: dto.name,
      by_work: {id: dto.by_work}
    });
    return await repo.save(technology);
  },
  // get technology
  async find() {
    const technology = await repo.find({
      relations: {
        by_work: true,
      },
      select: {
        id: true,
        name: true,
        by_work: {id: true, name: true},
        created_at: true
      },
      order: { created_at: "DESC" },
    });
    if (!technology) {
      throw new Error("technology not Found...");
    }
    return technology;
  },
  // get technology -------------------
  async findOne(id: number) {
    const technology = await repo.findOne({
      select: {
        id: true,
        name: true,
        by_work: {id: true, name: true},
        created_at: true
      },
      where: { id: id },
    });
    if (!technology) {
      throw new Error("technology not found...!");
    }
    return technology;
  },
  // delete technology----------------------
  async deleteOne(id: number) {
    const technology = await repo.findOne({
      select: {
        id: true,
        name: true,
        by_work: {id: true, name: true},
        created_at: true
      },
      where: { id: id },
    });
    if (!technology) {
      throw new Error("technology not found...!");
    }
    await repo.delete(id);
    return technology;
  },
};
