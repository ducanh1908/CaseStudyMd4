import { Request, Response } from "express";
declare class UserController {
    getAll(req: Request, res: Response): Promise<void>;
    Register(req: Request, res: Response): Promise<void>;
    loginUser(req: Request, res: Response): Promise<void>;
    showFormHome(req: Request, res: Response, next: any): Promise<Response<any, Record<string, any>>>;
    showForm(req: Request, res: Response, next: any): void;
}
declare const _default: UserController;
export default _default;
