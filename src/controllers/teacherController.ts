import { Request, Response } from 'express'

import { getRepository } from 'typeorm'
import Subject from '../entities/Subject'

export async function fetchTeachersBySubject(req: Request, res: Response){
    try {
        const subjectWithTeachers = await getRepository(Subject)
        .createQueryBuilder("subjects")
        .leftJoinAndSelect("subjects.teachers", "teachers")
        .getMany();

        res.send(subjectWithTeachers).status(200)
    } catch (e) {
        console.log(e)
        res.sendStatus(500)
    }
}