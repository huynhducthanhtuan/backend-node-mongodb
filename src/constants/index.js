import dotenv from "dotenv";
dotenv.config();

export const MONGODB_URI = process.env.MONGODB_URI;
export const PORT = process.env.PORT || 4001;
export const NODE_ENV = process.env.NODE_ENV;
export const DEVELOPMENT_URL = `http://localhost:${PORT}`;
export const PRODUCTION_URL = process.env.PRODUCTION_URL;
export const HOST_URL =
	NODE_ENV === "development" ? DEVELOPMENT_URL : PRODUCTION_URL;
export const SWAGGER_URL = `${HOST_URL}/api-docs/`;

export const QUERY_LIMIT_ITEM = 20;
export const TRENDING_REDUCING_LIMIT_ITEM = 10;
