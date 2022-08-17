import {Router} from "express";
import { gerneRoute } from "./gerne-route";
import { publisherRoute } from "./publisher-route";
import { bookRoute } from "./book-route";
import { authorRouter } from "./author-route";
import { authRoute } from "./auth-route";
export const router = Router();
router.use('/gernes',gerneRoute)
router.use('/publishers',publisherRoute)
router.use('/books',bookRoute);
router.use('/authors',authorRouter)
router.use('',authRoute)