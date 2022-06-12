import { CourseRepositoryModel } from './index';
import { Course, CourseModel } from '@domain/Entities';
import { FilterQuery } from 'mongoose';
import { Service } from 'typedi';

@Service()
export default class CourseRepository implements CourseRepositoryModel {

	async create(model: CourseModel): Promise<CourseModel> {
		return new Course(model).save();
	}

	async delete(id: string): Promise<void> {
		await Course.deleteOne({ _id: id }).exec();
	}

	async get(params: FilterQuery<CourseModel>): Promise<CourseModel | null> {
		return Course.findOne(params).exec();
	}

	async getById(id: string): Promise<CourseModel | null> {
		return Course.findById(id).exec();
	}

	async getAll(): Promise<CourseModel[]> {
		return Course.find().exec();
	}

	async update(id: string, model: CourseModel): Promise<CourseModel | null> {
		return Course.findByIdAndUpdate(id, model).exec();
	}

	async getPage(page: number, limit: number): Promise<CourseModel[]> {
		return Course.find().skip((page - 1) * limit).limit(limit).exec();
	}

}