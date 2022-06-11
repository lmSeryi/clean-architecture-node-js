import { Schema, model } from 'mongoose';
import type { CourseModel } from './Models';

const courseSchema = new Schema<CourseModel>({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    teacher: {
        type: Schema.Types.ObjectId,
        ref: 'Teacher',
    },
    students: [{
        type: Schema.Types.ObjectId,
        ref: 'Student',
    }],
}, {
    timestamps: true,
});

export default model<CourseModel>('Course', courseSchema);
