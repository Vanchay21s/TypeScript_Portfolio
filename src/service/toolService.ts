import { AppDataSource } from "../config/data-source";
import { TechnologyTool } from "../entities/TechnologyTool";
import { toolDTO } from "../schema/toolSchema";

const repo = AppDataSource.getRepository(TechnologyTool);
export const toolService = {
  async create(dto: toolDTO) {
    const tool = repo.create({
      name: dto.name,
      by_technology: { id: dto.by_technology },
    });
    return await repo.save(tool);
  },
  // get tool
  async find() {
    const tool = await repo.find({
      relations: {
        by_technology: true,
      },
      select: {
        id: true,
        name: true,
        by_technology: { id: true, name: true },
        created_at: true,
      },
      order: { created_at: "DESC" },
    });
    if (!tool) {
      throw new Error("tool not Found...");
    }
    return tool;
  },
  // get tool -------------------
  async findOne(id: number) {
    const tool = await repo.findOne({
      relations: {
        by_technology: true,
      },
      select: {
        id: true,
        name: true,
        by_technology: { id: true, name: true },
        created_at: true,
      },
      where: { id: id },
    });
    if (!tool) {
      throw new Error("tool not found...!");
    }
    return tool;
  },
  // delete technology----------------------
  async deleteOne(id: number) {
    const tool = await repo.findOne({
      select: {
        id: true,
        name: true,
        by_technology: { id: true, name: true },
        created_at: true,
      },
      where: { id: id },
    });
    if (!tool) {
      throw new Error("tool not found...!");
    }
    await repo.delete(id);
    return tool;
  },
};
