import type { Document } from 'mongoose';
import type { PersonModel } from ".";

interface TeacherModel extends Document, PersonModel {}

export default TeacherModel;
