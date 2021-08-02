import express from "express";
import cors from "cors";
import "reflect-metadata"
import connectDatabase from './database'

import * as SubjectController from './controllers/subjectController'
import * as TeacherController from './controllers/teacherController'
import * as ExamController from './controllers/examController'

export async function init(){
  await connectDatabase()
}

const app = express();
app.use(cors());
app.use(express.json());

app.get("/subjects", SubjectController.fetchSubjects);
app.get("/teachers", TeacherController.fetchTeachersBySubject);
app.post("/createExam", ExamController.createExam)

export default app;
