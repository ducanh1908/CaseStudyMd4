import { Gerne } from "../model/gerne";
import { Request, Response } from "express";

class GerneController{
    getAll = async (req: Request, res : Response) =>{
        let gernes = await Gerne.find();
        res.status(200).json(gernes);
    }
    addGerne = async(req: Request, res: Response)=>{
        let gerne = req.body;
        gerne = await Gerne.create(gerne);
        res.status(200).json(gerne);
    }
    deleteGerne = async (req: Request, res: Response) => {
        let id = req.params.id
        let gerne = await Gerne.findById(id);
        if(!gerne) {
            res.status(404).json();
        }
        gerne?.delete();
        res.status(204).json();
    }
    getGerne = async(req: Request, res: Response)=>{
        let id = req.params.id;
        let gerne = await Gerne.findById(id);
        if(!gerne) {
            res.status(404).json()
        }
        res.status(200).json(gerne);
    }
    updateGerne =  async(req: Request, res: Response)=>{
        console.log(req.body)
        let id = req.params.id;
        let gerne = await Gerne.findById(id);
        if(!gerne) {
            res.status(404).json()
        }
        else {
            let data = req.body;
            let newGerne = await Gerne.findByIdAndUpdate({_id:id}, data);
            res.status(200).json(newGerne);
        }
    }
}

export default new GerneController();