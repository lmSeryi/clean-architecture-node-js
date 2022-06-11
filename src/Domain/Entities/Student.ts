import { Schema, model } from 'mongoose';
import type { StudentModel } from "./Models";

const studentSchema = new Schema<StudentModel>({
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

export default model<StudentModel>('Student', studentSchema);
