import { Repository } from "typeorm"
import { AppDataSource } from "../config/data-source"
import { Profile } from "../entities/Profile"


const repos = () => AppDataSource.getRepository(Profile);
const profileService = {
    async create(
        fullname: str
    ){   
    },
}