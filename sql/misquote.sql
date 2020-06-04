DROP TABLE IF EXISTS misquote;

CREATE TABLE misquote (
	misquoteId BINARY(16) NOT NULL,
	misquoteAttribution VARCHAR(64) NOT NULL,
	misquoteContent VARCHAR(255) NOT NULL,
	misquoteSubmitter VARCHAR(64) NOT NULL,
	PRIMARY KEY(misquoteId)
);