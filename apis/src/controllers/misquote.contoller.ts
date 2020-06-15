import {NextFunction, Request, Response} from "express";
import {Status} from "../../utils/interfaces/status";
import {Misquote} from "../../utils/interfaces/misquote";
import {insertMisquote} from "../../utils/misquote/insertMisquote";
import {selectAllMisquotes} from "../../utils/misquote/selectAllMisquotes";
import {selectMisquoteByMisquoteId} from "../../utils/misquote/selectMisquoteByMisquoteId";
import {updateMisquote} from "../../utils/misquote/updateMisquote";
import {deleteMisquote} from "../../utils/misquote/deleteMisquote";
import {selectMisquoteByMisquoteSubmitter} from "../../utils/misquote/selectMisquoteByMisquoteSubmitter";
import {validationResult} from "express-validator";


export async function getAllMisquoteController(request: Request, response: Response, nextFunction: NextFunction) {
	try {
		const data = await selectAllMisquotes()
		console.log(data)
		const status: Status = {status: 200, data, message: null}
		return response.json(status)
	} catch (error) {
		console.log(error)
	}
}

export async function getMisquoteByMisquoteIdController(request: Request, response: Response, nextFunction: NextFunction) {
	try {
		console.log(request.params)
		const {misquoteId} = request.params;
		const data = await selectMisquoteByMisquoteId(misquoteId);
		const status: Status = {status: 200, data, message: null}
		return response.json(status)
	} catch (error) {
		console.log(error)
	}
}
export async function postMisquoteController(request: Request, response: Response, nextFunction: NextFunction) {
	try {
		const {misquoteAttribution, misquoteContent, misquoteSubmitter} = request.body
		const misquote: Misquote = {misquoteId: null, misquoteAttribution, misquoteContent, misquoteSubmitter}
		const result = await insertMisquote(misquote)
		return response.json({status: 200, data: null, message: result})
	} catch (error) {
		console.log(error)
	}
}

export async function putMisquoteController(request: Request, response: Response, nextFunction: NextFunction) {
	try {
		const {misquoteAttribution, misquoteContent, misquoteSubmitter} = request.body
		const {misquoteId} = request.params;
		const misquote: Misquote = {misquoteId, misquoteAttribution, misquoteContent, misquoteSubmitter}
		const result = await updateMisquote(misquote)
		return response.json({status: 200, data: null, message: result})
	} catch (error) {
		console.log(error)
	}
}

export async function deleteMisquoteController(request: Request, response: Response, nextFunction: NextFunction) {
	try {
		console.log(request.params)
		const {misquoteId} = request.params;
		const data = await deleteMisquote(misquoteId)
		const status: Status = {status: 200, data, message: null}
		return response.json(status)
	} catch (error) {
		console.log(error)
	}
}

export async function getMisquoteByMisquoteSubmitterController(request: Request, response: Response, nextFunction: NextFunction) {
	try {
		const {misquoteSubmitter} = request.params;
		console.log("misquoteSubmitters type",typeof misquoteSubmitter)
		console.log("misquoteSubmitter", misquoteSubmitter)
		const data = await selectMisquoteByMisquoteSubmitter(misquoteSubmitter);
		const status: Status = {status: 200, data, message: null}
		return response.json(status)
	} catch (error) {
		console.log(error)
	}
}
