import type { Document } from 'mongoose'
import type { PersonModel } from ".";

interface StudentModel extends Document, PersonModel {}

export default StudentModel;
