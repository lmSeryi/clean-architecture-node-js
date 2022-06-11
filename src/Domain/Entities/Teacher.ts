import { Schema, model } from 'mongoose';
import type { TeacherModel } from "./Models";

const teacherSchema = new Schema<TeacherModel>({
    name: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
}, {
    timestamps: true,
});

export default model<TeacherModel>('Teacher', teacherSchema);
