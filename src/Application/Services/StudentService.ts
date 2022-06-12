import { Service } from 'typedi';

import { StudentServiceModel } from '.';
import { Student, StudentModel } from '@domain/Entities';
import { FilterQuery } from 'mongoose';
import { StudentRepositoryModel, StudentRepository } from '@infra/index';

@Service()
export default class StudentService implements StudentServiceModel {
  readonly #studentRepository: StudentRepositoryModel;
  constructor(
    studentRepository: StudentRepository
  ) {
    this.#studentRepository = studentRepository;
  }

  async create(model: StudentModel): Promise<StudentModel> {
    return this.#studentRepository.create(model);
  }

  async delete(id: string): Promise<void> {
    await this.#studentRepository.delete(id);
  }

  async get(params: FilterQuery<StudentModel>): Promise<StudentModel | null> {
    return this.#studentRepository.get(params);
  }

  async getById(id: string): Promise<StudentModel | null> {
    return this.#studentRepository.getById(id);
  }

  async getAll(): Promise<StudentModel[]> {
    return this.#studentRepository.getAll();
  }

  async update(id: string, model: StudentModel): Promise<StudentModel | null> {
    return this.#studentRepository.update(id, model);
  }

  async getPage(page: number, limit: number): Promise<StudentModel[]> {
    return this.#studentRepository.getPage(page, limit);
  }

}