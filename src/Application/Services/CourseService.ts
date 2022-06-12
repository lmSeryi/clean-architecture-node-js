import { Service } from 'typedi';

import { CourseServiceModel } from './index';
import { CourseModel } from '@domain/Entities';
import { FilterQuery } from 'mongoose';
import { CourseRepositoryModel, CourseRepository } from '@infra/index';

@Service()
export default class CourseService implements CourseServiceModel {
  readonly #courseRepository: CourseRepositoryModel;
  constructor(
    courseRepository: CourseRepository
  ) {
    this.#courseRepository = courseRepository;
  }

  async create(model: CourseModel): Promise<CourseModel> {
    return this.#courseRepository.create(model);
  }

  async delete(id: string): Promise<void> {
    await this.#courseRepository.delete(id);
  }

  async get(params: FilterQuery<CourseModel>): Promise<CourseModel | null> {
    return this.#courseRepository.get(params);
  }

  async getById(id: string): Promise<CourseModel | null> {
    return this.#courseRepository.getById(id);
  }

  async getAll(): Promise<CourseModel[]> {
    return this.#courseRepository.getAll();
  }

  async update(id: string, model: CourseModel): Promise<CourseModel | null> {
    return this.#courseRepository.update(id, model);
  }

  async getPage(page: number, limit: number): Promise<CourseModel[]> {
    return this.#courseRepository.getPage(page, limit);
  }

}