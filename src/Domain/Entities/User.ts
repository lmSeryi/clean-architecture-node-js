import { Schema, model } from 'mongoose';
import type { UserModel } from "./Models";

const UserSchema = new Schema<UserModel>({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
});

export default model<UserModel>('User', UserSchema);
