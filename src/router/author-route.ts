import AuthorController from "../controller/author-controller";
import { Router } from "express";

export const authorRouter = Router();

authorRouter.get('',AuthorController.getAll);
authorRouter.post('', AuthorController.addAuthor);
authorRouter.delete('/:id',AuthorController.deleteAuthor);
authorRouter.get('/:id',AuthorController.getAuthor);
authorRouter.put('/:id', AuthorController.updateAuthor);