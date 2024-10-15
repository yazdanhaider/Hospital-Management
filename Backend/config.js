import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 6005;

export const mongoDBUrl = process.env.DB_Url;