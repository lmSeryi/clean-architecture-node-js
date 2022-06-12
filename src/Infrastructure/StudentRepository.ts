import { Service } from 'typedi';

import { StudentRepositoryModel } from '.';
import { Student, StudentModel } from '@domain/Entities';
import { FilterQuery } from 'mongoose';

@Service()
export default class StudentRepository implements StudentRepositoryModel {

	async create(model: StudentModel): Promise<StudentModel> {
		return new Student(model).save();
	}

	async delete(id: string): Promise<void> {
		await Student.deleteOne({ _id: id }).exec();
	}

	async get(params: FilterQuery<StudentModel>): Promise<StudentModel | null> {
		return Student.findOne(params).exec();
	}

	async getById(id: string): Promise<StudentModel | null> {
		return Student.findById(id).exec();
	}

	async getAll(): Promise<StudentModel[]> {
		return Student.find().exec();
	}

	async update(id: string, model: StudentModel): Promise<StudentModel | null> {
		return Student.findByIdAndUpdate(id, model).exec();
	}

	async getPage(page: number, limit: number): Promise<StudentModel[]> {
		return Student.find().skip((page - 1) * limit).limit(limit).exec();
	}

}