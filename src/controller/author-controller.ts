import { Author } from "../model/author";
import { Request, Response } from "express";

class AuthorController{
    getAll = async (req: Request, res : Response) =>{
        let authors = await Author.find();
        res.status(200).json(authors);
    }
    addAuthor = async(req: Request, res: Response)=>{
        let author = req.body;
        author = await Author.create(author);
        res.status(200).json(author);
    }
    deleteAuthor = async (req: Request, res: Response) => {
        let id = req.params.id
        let author = await Author.findById(id);
        if(!author) {
            res.status(404).json();
        }
        author?.delete();
        res.status(204).json();
    }
    getAuthor = async(req: Request, res: Response)=>{
        let id = req.params.id;
        let author = await Author.findById(id);
        if(!author) {
            res.status(404).json()
        }
        res.status(200).json(author);
    }
    updateAuthor =  async(req: Request, res: Response)=>{
        console.log(req.body)
        let id = req.params.id;
        let author = await Author.findById(id);
        if(!author) {
            res.status(404).json()
        }
        else {
            let data = req.body;
            let newAuthor = await Author.findByIdAndUpdate({_id:id}, data);
            res.status(200).json(newAuthor);
        }
    }
}

export default new AuthorController();