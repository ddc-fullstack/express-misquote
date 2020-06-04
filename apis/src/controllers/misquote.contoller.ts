import {NextFunction, Request, Response} from "express";
import {Status} from "../../utils/interfaces/status";
import {getAllMisquotes} from "../../utils/misquote/getAllMisquotes";


export async function getAllMisquoteController(request: Request, response: Response, nextFunction: NextFunction) {
  try {
    const data = await getAllMisquotes()
    console.log(data)
    const status: Status = {status: 200, data, message: null}
    return response.json(status)
  } catch (error) {
    console.log(error)
    
  }
  
}