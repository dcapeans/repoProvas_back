import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Exam from "./Exam";
import Teacher from "./Teacher";

@Entity('subjects')
export default class Subject {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    @OneToMany(() => Exam, exam => exam.subject)
    exams: Exam[]

    @ManyToMany(() => Teacher, teacher => teacher.subjects)
    teachers: Teacher[];
}