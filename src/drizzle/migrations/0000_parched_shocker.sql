CREATE TABLE "pricing_plans" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"price" integer NOT NULL,
	"features" json NOT NULL,
	"cta" text NOT NULL,
	"popular" boolean DEFAULT false
);
