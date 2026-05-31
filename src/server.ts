import express from 'express';
import cors from 'cors';
import "reflect-metadata";
import { AppDataSource } from './config/data-source';
import dotenv from 'dotenv';
import { workRoute } from './routes/workRoute';
import { logger } from './middleware';
import { authRouter } from './routes/authRouter';
const app = express();
dotenv.config();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// middleware
app.use(logger)
//  Router 
app.use("/v1/auth", authRouter)
app.use("/v1/work", workRoute)
// Start server AFTER DB connection
AppDataSource.initialize()
  .then(() => {console.log("Database connected ✅ - server.ts:23");})
  .catch((error) => {console.error("Database connection failed ❌ - server.ts:24", error);});
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}/apidocumentation  server.js:46 - server.ts:26`);
  console.log(`✅ Server is running on http://localhost:${PORT}/v1  server.js:47 - server.ts:27`);
  console.log(`✅ Server is running on http://localhost:${PORT}/  server.js:48 - server.ts:28`);
});
