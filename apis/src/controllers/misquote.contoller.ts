import {NextFunction, Request, Response} from "express";
import {Status} from "../../utils/interfaces/status";
import {Misquote} from "../../utils/interfaces/misquote";
import {insertMisquote} from "../../utils/misquote/insertMisquote";
import {selectAllMisquotes} from "../../utils/misquote/selectAllMisquotes";
import {selectMisquoteByMisquoteId} from "../../utils/misquote/selectMisquoteByMisquoteId";


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

		const {misquoteFoo} = request.params;

		const data = await selectMisquoteByMisquoteId(misquoteFoo);
		console.log(data)
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