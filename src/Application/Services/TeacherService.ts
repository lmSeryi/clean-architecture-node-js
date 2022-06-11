import { TeacherServiceModel } from './';
import { Teacher, TeacherModel } from 'Domain/Entities';
import { FilterQuery } from 'mongoose';

export default class TeacherService implements TeacherServiceModel {

  async create(model: TeacherModel): Promise<TeacherModel> {
    return new Teacher(model).save();
  }

  async delete(id: string): Promise<void> {
    await Teacher.deleteOne({ _id: id }).exec();
  }

  async get(params: FilterQuery<TeacherModel>): Promise<TeacherModel | null> {
    return Teacher.findOne(params).exec();
  }

  async getById(id: string): Promise<TeacherModel | null> {
    return Teacher.findById(id).exec();
  }

  async getAll(): Promise<TeacherModel[]> {
    return Teacher.find().exec();
  }

  async update(model: TeacherModel): Promise<TeacherModel | null> {
    return Teacher.findByIdAndUpdate(model._id, model).exec();
  }

  async getPage(page: number, limit: number): Promise<TeacherModel[]> {
    return Teacher.find().skip((page - 1) * limit).limit(limit).exec();
  }

}