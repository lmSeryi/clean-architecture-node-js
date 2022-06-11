import type { Document } from 'mongoose';
import type { StudentModel, TeacherModel } from ".";

interface CourseModel extends Document {
    name: string;
    description: string;
    teacher: TeacherModel;
    students: StudentModel[];
}

export default CourseModel;
