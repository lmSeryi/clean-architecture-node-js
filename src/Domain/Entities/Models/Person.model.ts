import type { Document } from 'mongoose';
import type { UserModel } from ".";

interface PersonModel extends Document {
    name: string;
    lastName: string;
    age: number;
    user: UserModel;
}

export default PersonModel;
