import { AppDataSource } from "../config/data-source"
import { Work } from "../entities/Work"

const workService = {
    async getAll(){
        const repo = () => AppDataSource.getRepository(Work)
        try{
            const work = await repo().find({
                relations: {
                    features: true,
                    technologies: {
                        tools: true
                    }
                },
                order: {
                    created_at: "DESC"
                }
            })
            return work
        }catch(err){
            console.error("ERROR:: - workService.ts:21", err)
        }
    }
}
 export default workService;