import {Router} from "express";
import { gerneRoute } from "./gerne-route";
import { publisherRoute } from "./publisher-route";
import { bookRoute } from "./book-route";


export const router = Router();
router.use('/gerne',gerneRoute)
router.use('/publisher',publisherRoute)
router.use('/book',bookRoute)