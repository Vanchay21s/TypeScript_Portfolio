import { Request, Response } from "express";
import workService from "../service/workService";

export const workController = {
    async getAllWork(req: Request, res: Response){
        const result = await workService.getAll()
        res.json({
            message: "Find work successfully.",
            status: true,
            data: result
        })
    }
}