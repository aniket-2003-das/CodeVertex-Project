import express from 'express';
import dotenv from "dotenv"
import passport from 'passport';
import cookieSession from 'cookie-session';
import connectToMongoDB from './db/connectToMongoDB.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'
// import passportStrategy from "../backend/googleAuth/passport.js"


const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(
	cookieSession({
		name: "session",
		keys: ["cyberwolve"],
		maxAge: 24 * 60 * 60 * 100,
	})
);
app.use(passport.initialize());
app.use(passport.session());
app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "GET,POST,PUT,DELETE",
		credentials: true,
	})
);

import authRoute from './routes/auth.route.js';
import userRouter from './routes/user.route.js'
import googleAuthRoute from './routes/googleAuth.route.js'


app.use("/api/auth", authRoute)
app.use("/api/user", userRouter)
app.use("/api/auth", googleAuthRoute);


app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`listening on port ${PORT}`)
})