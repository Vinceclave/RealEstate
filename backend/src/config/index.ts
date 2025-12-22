import dotenv from 'dotenv';
dotenv.config();

export const config = {
    PORT: process.env.PORT,
    AI: {
        API_KEY: process.env.GEMINI_API_KEY,
        MODEL: process.env.GEMINI_MODEL,
        IMAGE_MODEL: process.env.GEMINI_IMAGE_MODEL,
    },
    FIREBASE: {
        PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
        PRIVATE_KEY: process.env.FIREBASE_PRIVATE_KEY,
        CLIENT_EMAIL: process.env.FIREBASE_CLIENT_EMAIL,
    }   
}