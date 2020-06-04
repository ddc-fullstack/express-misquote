import {Router} from "express";
import {getAllMisquoteController} from "../controllers/misquote.contoller";

export const MisquoteRoute = Router()

MisquoteRoute.route("/")
    .get(getAllMisquoteController)
