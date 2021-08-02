import { Request, Response } from 'express'

import { getConnection } from 'typeorm'
import Exam from '../entities/Exam'

export async function createExam( req: Request, res: Response){
    try {
        const { name, link, teacher_id, subject_id, category_id } = req.body
        console.log(req.body)
        await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Exam)
        .values([
            { name: name, link: link, category_id: category_id, subject_id: subject_id, teacher_id: teacher_id }
        ])
    .execute();
    res.sendStatus(201)
    } catch (e) {
        console.log(e)
        res.sendStatus(500)
    }
}