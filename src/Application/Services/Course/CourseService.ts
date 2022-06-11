import { CourseServiceModel } from '../index';
import { Course, CourseModel } from 'Domain/Entities';

export default class CourseService implements CourseServiceModel {

  async create(model: CourseModel): Promise<CourseModel> {
    return new Course(model).save();
  }

  async delete(id: string): Promise<void> {
    await Course.deleteOne({ _id: id }).exec();
  }

  async get(id: string): Promise<CourseModel | null> {
    return Course.findById(id).exec();
  }

  async getAll(): Promise<CourseModel[]> {
    return Course.find().exec();
  }

  async update(model: CourseModel): Promise<CourseModel | null> {
    return Course.findByIdAndUpdate(model._id, model).exec();
  }

  async getPage(page: number, limit: number): Promise<CourseModel[]> {
    return Course.find().skip((page - 1) * limit).limit(limit).exec();
  }

}