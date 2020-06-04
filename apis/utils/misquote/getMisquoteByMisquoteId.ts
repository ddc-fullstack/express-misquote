import {Misquote} from "../interfaces/misquote";
import {connect} from "../../src/database";

async function getMisquoteByMisquoteId(misquoteId : string) : Misquote | undefined {
    try {
    const mysqlConnection = await connect();

    const mySqlQuery = 'SELECT BIN_TO_UUID(misquoteId) as misquoteId, misquoteAttribution, misquoteContent, misquoteSubmitter FROM misquote WHERE misquoteId = UUID_TO_BIN(:misquoteId)'

    const [rows] =  await mysqlConnection.execute(mySqlQuery, misquoteId)
    
    return rows
    } catch (error) {
        console.log(error)
        return undefined
    }
}

getMisquoteByMisquoteId("uuid")