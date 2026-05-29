import { AppDataSource } from "../config/data-source"
import { Work } from "../entities/Work"

const workService = {
    async getAll(page: number, limit: number){
        const skip = (page - 1) * limit
        const repo = () => AppDataSource.getRepository(Work)
        try{
            const [work, total] = await repo().findAndCount({
                relations: {
                    features: true,
                    technologies: {
                        tools: true
                    }
                },
                order: {
                    created_at: "DESC"
                },
                skip,
                take: limit
            })
            return {
                data: work,
                pagination: {
                    total,
                    page,
                    limit,
                    totalPage: Math.ceil(total/limit)
                }
            }
        }catch(err){
            console.error("ERROR:: - workService.ts:32", err)
        }
    }
}
 export default workService;