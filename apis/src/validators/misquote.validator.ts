export const misquoteValidator = {
	misquoteContent: {
		isLength: {
			errorMessage: "Misquote Content is to long",
			options: { min:1,max: 255}
		},
		trim: true,
		escape: true
	}, misquoteSubmitter: {
		isLength: {
			errorMessage: "the name provided for submitter of this misquote is to long",
			options: {min:1,max:64}
		},
		trim: true,
		escape: true
	},
	misquoteAttribution: {
		isLength: {
			errorMessage: "the name provided for the attribution of this misquote is to long",
			options: {min:1,max:64}
		},
		trim: true,
		escape: true
	}
}

export const misquoteIdValidator = {
	misquoteId:{
		isUUID: {
			errorMessage: "please provide a valid misquoteId"
		},
		trim:true,
		in: ["params"]
	}
}

export const putMisquoteIdValidator = {
	...misquoteIdValidator,
	...misquoteValidator
}

