import { AppDataSource } from "../config/data-source"
import { Work } from "../entities/Work"

export const workService = {
    async getAll(page: number, limit: number){
        const skip = (page - 1) * limit;
        const repo = () => AppDataSource.getRepository(Work)
        try{
            const [work, total] = await repo()
                                        .createQueryBuilder("work")
                                        .leftJoinAndSelect("work.image","image")
                                        .leftJoinAndSelect("work.technology", "technology")
                                        .leftJoinAndSelect("technology.tool", "tool")
                                        .leftJoinAndSelect("work.feature","feature")
                                        .take(limit)
                                        .skip(skip)
                                        .orderBy("work.created_at", "DESC")
                                        .getManyAndCount();
            return {
                pagination: {
                    total,
                    page,
                    limit,
                    totalPage: Math.ceil(total/limit)
                },
                data: work,
            }
        }catch(err){
            console.error("Error:: - workService.ts:29", err)
        }
    }
}
