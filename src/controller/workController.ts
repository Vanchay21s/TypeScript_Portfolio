import { Request, Response } from "express";
import workService from "../service/workService";

export const workController = {
    async getAllWork(req: Request<{
        page: number, 
        limit: number
    }>, res: Response){
        const page = Number(req.query.page)
        const limit = Number(req.query.limit)
        console.log(page, limit, 'asdadasdad - workController.ts:11')
        const result = await workService.getAll({page: page, limit: limit})
        // if(!result || result === null){
        //     return res.json({
        //         message: "Not found work!.",
        //         status: false
        //     })
        // }
        return res.json({
            message: "Find work successfully.",
            status: true,
            data: result
        })
    }
}