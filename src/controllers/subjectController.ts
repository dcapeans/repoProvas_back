import { Request, Response } from 'express'

import { getRepository } from 'typeorm'
import Subject from '../entities/Subject'

export async function fetchSubjects( req: Request, res: Response){
    try {
        const tasks = await getRepository(Subject).find()
        res.send(tasks).status(200)
    } catch (e) {
        console.log(e)
        res.sendStatus(500)
    }
}