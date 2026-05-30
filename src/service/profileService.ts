import { Repository } from "typeorm"
import { AppDataSource } from "../config/data-source"
import { Profile } from "../entities/Profile"



const profileService = {
    async create(
        fullname: string,
        username: string,
        image: string,
        phone: string,
        email: string,
        address: string,
        about: string,
        date: Date,
    ){
        try {
            const repos = () => AppDataSource.getRepository(Profile);
            const profile = await repos().save({
                fullname: fullname,
                username: username,
                image: image,
                phone: phone,
                email: email,
                address: address,
                about: about,
                date: date,

            })
            return profile
        } catch (err: any) {
            console.error(`Error: ${err} - profileService.ts:33`)
        }
       
    },
}