import {Router} from "express";
import {
	deleteMisquoteController,
	getAllMisquoteController,
	getMisquoteByMisquoteIdController,
	getMisquoteByMisquoteSubmitterController,
	postMisquoteController,
	putMisquoteController
} from "../controllers/misquote.contoller";
import {deleteMisquote} from "../../utils/misquote/deleteMisquote";

export const MisquoteRoute = Router()

MisquoteRoute.route("/")
	.get(getAllMisquoteController)
	.post(postMisquoteController)

MisquoteRoute.route("/:misquoteId")
	.get(getMisquoteByMisquoteIdController)
	.put(putMisquoteController)
	.delete(deleteMisquoteController)

MisquoteRoute.route("/misquoteSubmitter/:misquoteSubmitter").get(getMisquoteByMisquoteSubmitterController)