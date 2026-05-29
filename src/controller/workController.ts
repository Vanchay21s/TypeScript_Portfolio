import { Request, Response } from "express";
import workService from "../service/workService";

export const workController = {
    async getAllWork(req: Request<{
        page: number, 
        limit: number
    }>, res: Response){
        const page = parseInt(req.query.page as string) 
        const limit = parseInt(req.query.limit as string)
        console.log(page, limit, 'asdadasdad - workController.ts:11')
        const result = await workService.getAll(page, limit)
        if(!result || result === null){
            return res.json({
                message: "Not found work!.",
                status: false
            })
        }
        return res.json({
            message: "Find work successfully.",
            status: true,
            data: result
        })
    }
}