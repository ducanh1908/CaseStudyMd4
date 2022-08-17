

import {Router} from "express";
import GerneController from "../controller/gerne-controller";

export const gerneRoute = Router();
gerneRoute.get('', GerneController.getAll);
gerneRoute.post('', GerneController.updateGerne)
gerneRoute.delete('/:id', GerneController.deleteGerne);
gerneRoute.get('/:id', GerneController.getGerne)
gerneRoute.put('/:id', GerneController.updateGerne)