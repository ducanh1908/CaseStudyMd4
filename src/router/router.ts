import {Router} from "express";
import { gerneRoute } from "./gerne-route";
import { publisherRoute } from "./publisher-route";
import { bookRoute } from "./book-route"
import { authorRouter } from "./author-route";
import { authRoute } from "./auth-route";
import RoleController from "../controller/role-controller";
import { cartdetailRoute } from "./cartdetail-route";
export const router = Router();
router.use('/gernes',gerneRoute)
router.use('/publishers',publisherRoute)
router.use('/books',bookRoute);
router.use('/authors',authorRouter)
router.use('/roles', RoleController.getAll)
router.use('',authRoute)
router.use('/cartdetails',cartdetailRoute)
