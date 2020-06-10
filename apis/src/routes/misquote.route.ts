import {Router} from "express";
import {
	getAllMisquoteController, getMisquoteByMisquoteIdController,
	postMisquoteController
} from "../controllers/misquote.contoller";

export const MisquoteRoute = Router()

MisquoteRoute.route("/")
  .get(getAllMisquoteController)
	.post(postMisquoteController)

MisquoteRoute.route("/:misquoteId")
	.get(getMisquoteByMisquoteIdController)
//.put(udpateMisquote)
//.delete(deleteMisquote)


MisquoteRoute.route("/misquoteFoo/:misquoteFoo")


