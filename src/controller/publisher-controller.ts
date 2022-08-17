import { Publisher } from "../model/publisher";
import { Request, Response } from "express";

class PublisherController{
    getAll = async (req: Request, res : Response) =>{
        let publishers = await Publisher.find();
        res.status(200).json(publishers);
    }
    addPublisher = async(req: Request, res: Response)=>{
        let publisher = req.body;
        publisher = await Publisher.create(Publisher);
        res.status(200).json(Publisher);
    }
    deletePublisher = async (req: Request, res: Response) => {
        let id = req.params.id
        let publisher = await Publisher.findById(id);
        if(!publisher) {
            res.status(404).json();
        }
        publisher?.delete();
        res.status(204).json();
    }
    getPublisher = async(req: Request, res: Response)=>{
        let id = req.params.id;
        let publisher = await Publisher.findById(id);
        if(!publisher) {
            res.status(404).json()
        }
        res.status(200).json(publisher);
    }
    updatePublisher =  async(req: Request, res: Response)=>{
        console.log(req.body)
        let id = req.params.id;
        let publisher = await Publisher.findById(id);
        if(!publisher) {
            res.status(404).json()
        }
        else {
            let data = req.body;
            let newPublisher = await Publisher.findByIdAndUpdate({_id:id}, data);
            res.status(200).json(newPublisher);
        }
    }
}

export default new PublisherController();