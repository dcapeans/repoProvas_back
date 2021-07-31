import express from "express";
import cors from "cors";
import "reflect-metadata"
import connectDatabase from './database'

import * as SubjectController from './controllers/subjectController'

export async function init(){
  await connectDatabase()
}

const app = express();
app.use(cors());
app.use(express.json());

app.get("/subjects", SubjectController.fetchSubjects);

export default app;
