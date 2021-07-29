import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Exam from "./Exam";

@Entity('teachers')
export default class Teacher {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    @OneToMany(() => Exam, exam => exam.teacher)
    exams: Exam[]
}