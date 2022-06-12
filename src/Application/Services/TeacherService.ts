import { Service } from 'typedi';

import { TeacherServiceModel } from './';
import { TeacherModel } from '@domain/Entities';
import { FilterQuery } from 'mongoose';
import { TeacherRepositoryModel, TeacherRepository } from '@infra/index';

@Service()
export default class TeacherService implements TeacherServiceModel {
  readonly #teacherRepository: TeacherRepositoryModel;
  constructor(
      teacherRepository: TeacherRepository
  ) {
    this.#teacherRepository = teacherRepository;
  }

  async create(model: TeacherModel): Promise<TeacherModel> {
    return this.#teacherRepository.create(model);
  }

  async delete(id: string): Promise<void> {
    await this.#teacherRepository.delete(id);
  }

  async get(params: FilterQuery<TeacherModel>): Promise<TeacherModel | null> {
    return this.#teacherRepository.get(params);
  }

  async getById(id: string): Promise<TeacherModel | null> {
    return this.#teacherRepository.getById(id);
  }

  async getAll(): Promise<TeacherModel[]> {
    return this.#teacherRepository.getAll();
  }

  async update(id: string, model: TeacherModel): Promise<TeacherModel | null> {
    return this.#teacherRepository.update(id, model);
  }

  async getPage(page: number, limit: number): Promise<TeacherModel[]> {
    return this.#teacherRepository.getPage(page, limit);
  }

}