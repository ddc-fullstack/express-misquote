import {Router} from "express";
import {
	deleteMisquoteController,
	getAllMisquoteController,
	getMisquoteByMisquoteIdController,
	getMisquoteByMisquoteSubmitterController,
	postMisquoteController,
	putMisquoteController
} from "../controllers/misquote.contoller";
import {asyncValidatorController} from "../controllers/asyncValidator.controller";
import {misquoteIdValidator, misquoteValidator, putMisquoteIdValidator} from "../validators/misquote.validator";
import {check} from "express-validator";

const {checkSchema} = require("express-validator");

export const MisquoteRoute = Router()

MisquoteRoute.route("/")
	.get(getAllMisquoteController)
	.post(asyncValidatorController(checkSchema(misquoteValidator)), postMisquoteController)

MisquoteRoute.route("/:misquoteId")
	.get(asyncValidatorController(checkSchema(misquoteIdValidator)), getMisquoteByMisquoteIdController)
	.put(asyncValidatorController(checkSchema(putMisquoteIdValidator)), putMisquoteController)
	.delete(asyncValidatorController(checkSchema(misquoteIdValidator)), deleteMisquoteController)

MisquoteRoute.route("/misquoteSubmitter/:misquoteSubmitter")
	.get(
		asyncValidatorController(
			[check("misquoteSubmitter", "please check misquote submiiter and try again ")
				.isString()
				.notEmpty()
				.trim()
				.escape()
		]), getMisquoteByMisquoteSubmitterController)