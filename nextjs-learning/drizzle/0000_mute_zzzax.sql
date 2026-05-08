CREATE TABLE "recipes" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(100) NOT NULL,
	"description" text,
	"subtitle" varchar(100) NOT NULL,
	"createdAt" timestamp DEFAULT current_timestamp NOT NULL,
	"updatedAt" timestamp DEFAULT current_timestamp NOT NULL,
	CONSTRAINT "recipes_title_unique" UNIQUE("title")
);
