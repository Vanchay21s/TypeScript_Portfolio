import { AppDataSource } from "../config/data-source";
import { KeyFeature } from "../entities/KeyFeature";
import { featureDTO } from "../schema/featureSchema";

const repo = AppDataSource.getRepository(KeyFeature);
export const featureService = {
  async create(dto: featureDTO) {
    const feature = repo.create({
      name: dto.name,
      description: dto.description,
      by_work: {id: dto.by_work}
    });
    return await repo.save(feature);
  },
  // get feature
  async find() {
    const feature = await repo.find({
      select: {
        id: true,
        name: true,
        description: true,
        by_work: {id: true, name: true},
        created_at: true
      },
      order: { created_at: "DESC" },
    });
    if (!feature) {
      throw new Error("feature not Found...");
    }
    return feature;
  },
  // get feature -------------------
  async findOne(id: number) {
    const feature = await repo.findOne({
      select: {
        id: true,
        name: true,
        description: true,
        by_work: {id: true, name: true},
        created_at: true
      },
      where: { id: id },
    });
    if (!feature) {
      throw new Error("feature not found...!");
    }
    return feature;
  },
  // delete ----------------------
  async deleteOne(id: number) {
    const feature = await repo.findOne({
      select: {
        id: true,
        name: true,
        description: true,
        by_work: {id: true, name: true},
        created_at: true
      },
      where: { id: id },
    });
    if (!feature) {
      throw new Error("feature not found...!");
    }
    await repo.delete(id);
    return feature;
  },
};
