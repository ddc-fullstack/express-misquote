import {Request, Response} from 'express';
// DB
import {setActivationToken, setHash} from '../../utils/auth.utils';
import {Profile} from "../../utils/interfaces/Profile";
import {Status} from "../../utils/interfaces/status";
import MailComposer from "nodemailer/lib/mail-composer";
import {insertProfile} from "../../utils/profile/insertProfile";
const mailgun = require("mailgun-js")

// Interfaces (represent the DB model and types of the columns associated with a specific DB table)


export async function signupProfileController(request: Request, response: Response) {
	try {
		
		
		const {profileAtHandle, profileEmail, profilePhone, profilePassword} = request.body;
		const profileHash = await setHash(profilePassword);
		const profileActivationToken = setActivationToken();
		const profileAvatarUrl = "http://www.fillmurray.com/100/150"
		const basePath = `${request.protocol}://${request.get('host')}${request.originalUrl}/activation/${profileActivationToken}`
		
		const message = `<h2>Welcome to DDCTwitter.</h2>
<p>In order to start posting tweets of cats you must confirm your account </p>
<p><a href="${basePath}">${basePath}</a></p>
`
		
		const mailgunMessage = {
			from: `Mailgun Sandbox <postmaster@${process.env.MAILGUN_DOMAIN}>`,
			to: profileEmail,
			subject: "One step closer to Sticky Head -- Account Activation",
			text: 'Test email text',
			html: message
		}
		
		const profile: Profile = {
			profileId: null,
			profileActivationToken,
			profileAtHandle,
			profileAvatarUrl,
			profileEmail,
			profileHash,
			profilePhone
		};
		
		const result = await insertProfile(profile)
		
		const emailComposer: MailComposer = new MailComposer(mailgunMessage)
		
		 emailComposer.compile().build((error: any, message: Buffer) => {
			 const mg = mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN});
			 
			console.log(message.toString("ascii"))
			const compiledEmail = {
				to: profileEmail,
				message: message.toString("ascii")
			}
			
			const status: Status = {
				status: 200,
				message: "Profile successfully created please check you",
				data: null
			};
			 mg.messages().sendMime(compiledEmail, (sendError: any, body: any) => {
				 if (sendError) {
					 console.log(sendError);
					 return;
				 }
				 return response.json(status);
			 });
			

		})
		
	} catch (error) {
		const status: Status = {
			status: 400,
			message: error.message,
			data: null
		};
		
		return response.json(status);
	}
}