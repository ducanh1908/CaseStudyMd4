import { NextFunction, Request, Response } from "express";
import { Book } from "../model/book";

class BookController{
    getAll= async (req: Request, res: Response) => {
        let books = await Book.find().populate('gerne','name').populate('publisher','name');
        res.status(200).json(books);

    }
    addBook = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let book = req.body;
            book = await Book.create(book);
            let newBook = await Book.findById(book._id).populate('gerne', 'name').populate('publisher','name');
            res.status(201).json(newBook);
        }catch (error){
            next(error);
        }
    }

    deleteBook = async (req: Request, res: Response, next: NextFunction) => {
        let id = req.params.id;
        try {
            let book = await Book.findById(id);
            if (!book) {
                res.status(404).json();
            } else {
                book.delete();
                res.status(204).json();
            }
        } catch (error) {
            next(error);
        }
    }

    getBook = async (req: Request, res: Response, next: NextFunction) => {
        let id = req.params.id;
        try {
            let book = await Book.findById(id).populate('gerne', 'name').populate('publisher','name');
            if (!book) {
                res.status(404).json();
            } else {
                res.status(200).json(book);
            }
        } catch (error) {
            next(error)
        }
    }

    updateBook = async (req: Request, res: Response) => {
        let id = req.params.id;
        let book = await Book.findById(id);
        if (!book) {
            res.status(404).json();
        } else {
            let data = req.body;
            await Book.findOneAndUpdate({
                _id: id
            }, data);
            data._id = id;
            book = await Book.findById(id).populate('gerne','name').populate('publisher','name');
            res.status(200).json(book);
        }
    }

}
export default new BookController();