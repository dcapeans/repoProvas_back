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

    @Column()
    link: string

    @Column()
    category_id: number

    @ManyToOne(() => Category, category => category.exams)
    category: Category

    @Column()
    subject_id: number

    @ManyToOne(() => Subject, subject => subject.exams)
    subject: Subject

    @Column()
    teacher_id: number

    @ManyToOne(() => Teacher, teacher => teacher.exams)
    teacher: Teacher
}