import {NextFunction, Request, Response} from 'express';

const {validationResult} = require('express-validator');

export const asyncValidatorController = (validations: any) => {
  return async (request: Request, response: Response, next: NextFunction) => {
    console.log(request.body)
    await Promise.all(validations.map((validation: any) => validation.run(request)));
    
    const errors = validationResult(request);
    console.log(errors)
    if (errors.isEmpty()) {
      return next();
    }
    
    response.json({status: 418, data: null, message: errors.array()[0].msg});
  };
};