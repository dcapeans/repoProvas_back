import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Category from './Category'
import Subject from './Subject'
import Teacher from './Teacher'

@Entity('exams')
export default class Exam {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    @ManyToOne(() => Category, category => category.exams)
    category: Category

    @ManyToOne(() => Subject, subject => subject.exams)
    subject: Subject

    @ManyToOne(() => Teacher, teacher => teacher.exams)
    teacher: Teacher
}