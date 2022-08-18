import AuthorController from "../controller/author-controller";
import { Router } from "express";
import { auth } from "../middleware/auth-middleware";

export const authorRouter = Router();
authorRouter.use(auth)
authorRouter.get('',AuthorController.getAll);
authorRouter.post('', AuthorController.addAuthor);
authorRouter.delete('/:id',AuthorController.deleteAuthor);
authorRouter.get('/detail/:id',AuthorController.getAuthor);
authorRouter.put('/:id', AuthorController.updateAuthor);
authorRouter.get('/search',AuthorController.searchAuthor);