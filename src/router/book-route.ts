import { Router } from "express";
import BookController from "../controller/book-controller";

export const bookRoute = Router();
bookRoute.get('',BookController.getAll);
bookRoute.post('', BookController.addBook)
bookRoute.delete('/:id', BookController.deleteBook)
bookRoute.get('/:id', BookController.getBook)
bookRoute.put('/:id', BookController.updateBook)