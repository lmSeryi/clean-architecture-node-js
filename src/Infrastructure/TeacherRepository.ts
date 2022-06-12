import { Service } from 'typedi';

import { TeacherRepositoryModel } from './';
import { Teacher, TeacherModel } from '@domain/Entities';
import { FilterQuery } from 'mongoose';

@Service()
export default class TeacherRepository implements TeacherRepositoryModel {

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

  async update(id: string, model: TeacherModel): Promise<TeacherModel | null> {
    return Teacher.findByIdAndUpdate(id, model).exec();
  }

  async getPage(page: number, limit: number): Promise<TeacherModel[]> {
    return Teacher.find().skip((page - 1) * limit).limit(limit).exec();
  }

}