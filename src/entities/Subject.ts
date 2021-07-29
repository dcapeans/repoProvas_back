import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Exam from "./Exam";

@Entity('subjects')
export default class Subject {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    @OneToMany(() => Exam, exam => exam.subject)
    exams: Exam[]
}