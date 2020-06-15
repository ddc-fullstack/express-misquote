import { Request, Response } from 'express';

// DB
import { connect } from '../database';
// Interfaces (represent the DB model and types of the columns associated with a specific DB table)

import { setActivationToken, setHash } from '../../utils/auth.utils';
import {Profile} from "../../utils/interfaces/Profile";
import {Status} from "../../utils/interfaces/status";
import {insertProfile} from "../../utils/profile/insertProfile";


export async function signupProfileController (request: Request, response: Response) {
	try {

		
		const { profileAtHandle, profileEmail, profilePhone, profilePassword } = request.body;
		console.log(request.body)
		const profileHash = await setHash(profilePassword);
		const profileActivationToken = setActivationToken();
		const profileAvatarUrl = "http://www.fillmurray.com/100/150"
		
		
		
		const profile : Profile = {
			profileId: null,
			profileActivationToken,
			profileAtHandle,
			profileAvatarUrl,
			profileEmail,
			profileHash,
			profilePhone
		};
		
		//const result = await insertProfile(profile)
		
		const status: Status = {
			status: 200,
			message:"hello world",
			data: null
		};
		
		return response.json(status);
		
	} catch (error) {
		const status : Status = {
			status: 400,
			message: error.message,
			data: null
		};
		
		return response.json(status);
	}
}