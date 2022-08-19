import { Request, Response } from "express";
declare class AuthorController {
    getAll: (req: Request, res: Response) => Promise<void>;
    addAuthor: (req: Request, res: Response) => Promise<void>;
    deleteAuthor: (req: Request, res: Response) => Promise<void>;
    getAuthor: (req: Request, res: Response) => Promise<void>;
    updateAuthor: (req: Request, res: Response) => Promise<void>;
}
declare const _default: AuthorController;
export default _default;
