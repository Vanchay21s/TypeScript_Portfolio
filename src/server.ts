import express from 'express';
import cors from 'cors';
import "reflect-metadata";
import { AppDataSource } from './config/data-source';
import dotenv from 'dotenv';
import { workRouter } from './routes/workRouter';
import { logger } from './middleware';
import { authRouter } from './routes/authRouter';
import { userRouter } from './routes/userRouter';
import { profileRouter } from './routes/profileRouter';
import { educationRouter } from './routes/educationRouter';
import { skillRouter } from './routes/skillRouter';
import { featureRouter } from './routes/featureRouter';
import { technologyRouter } from './routes/technologyRouter';
import { toolRouter } from './routes/toolRouter';
import path from 'path';
const app = express();
dotenv.config();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads")); //This lets the browser access images like: http://localhost:5000/uploads/image-17100022222.png
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// middleware
app.use(logger)
//  Router userRouter
app.use("/v1/auth", authRouter)
app.use("/v1/user", userRouter)
app.use("/v1/profile", profileRouter)
app.use("/v1/education", educationRouter)
app.use("/v1/skill", skillRouter)
app.use("/v1/work", workRouter)
app.use("/v1/feature", featureRouter)
app.use("/v1/technology", technologyRouter)
app.use("/v1/tool", toolRouter)

// Start server AFTER DB connection
AppDataSource.initialize()
  .then(() => {console.log("Database connected ✅ - server.ts:41");})
  .catch((error) => {console.error("Database connection failed ❌ - server.ts:42", error);});
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}/apidocumentation  server.js:46 - server.ts:44`);
  console.log(`✅ Server is running on http://localhost:${PORT}/v1  server.js:47 - server.ts:45`);
  console.log(`✅ Server is running on http://localhost:${PORT}/  server.js:48 - server.ts:46`);
});
