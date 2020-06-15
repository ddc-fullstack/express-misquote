import { Router } from 'express';
import { signupProfileController } from '../controllers/sign-up.controller';
import {asyncValidatorController} from "../controllers/asyncValidator.controller";
import {signupValidator} from "../validators/sign-up.validator";


const { checkSchema } = require('express-validator');

export const signupRouter = Router();

signupRouter.route('/')
	.post(asyncValidatorController(checkSchema(signupValidator)), signupProfileController);

