import express from 'express';
import cors from 'cors';
import "reflect-metadata";
import { AppDataSource } from './config/data-source';
import dotenv from 'dotenv';
import { workRoute } from './route/workRoute';
import { logger } from './middleware';
const app = express();
dotenv.config();
const PORT = process.env.PORT;

app.use(cors());
// middleware
app.use(logger)
//  Router 
app.use("/v1/work", workRoute)
// Start server AFTER DB connection
AppDataSource.initialize()
  .then(() => {console.log("Database connected ✅ - server.ts:19");})
  .catch((error) => {console.error("Database connection failed ❌ - server.ts:20", error);});

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}/apidocumentation  server.js:46 - server.ts:23`);
  console.log(`✅ Server is running on http://localhost:${PORT}/v1  server.js:47 - server.ts:24`);
  console.log(`✅ Server is running on http://localhost:${PORT}/  server.js:48 - server.ts:25`);
});
