import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Exam from "./Exam";
import Subject from "./Subject";

@Entity('teachers')
export default class Teacher {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    @OneToMany(() => Exam, exam => exam.teacher)
    exams: Exam[]

    @ManyToMany(() => Subject, subject => subject.teachers)
    @JoinTable()
    subjects: Subject[]
}