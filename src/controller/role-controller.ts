import { Role } from "../model/role"
import { Request, Response } from "express";
 class RoleController{


    getAll = async (req:Request,res:Response)=>{
    let roles = await Role.find();
    res.status(200).json(roles);
    }
}
export  default new RoleController()
