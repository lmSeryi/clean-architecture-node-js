import { Service } from 'typedi';

import { FilterQuery } from 'mongoose';
import { UserServiceModel } from './index';
import { UserModel } from '@domain/Entities';
import { UserRepositoryModel, UserRepository } from '@infra/index';

@Service()
export default class UserService implements UserServiceModel {
  readonly #userRepository: UserRepositoryModel;
  constructor(
    userRepository: UserRepository
  ) {
    this.#userRepository = userRepository;
  }

  async create(model: UserModel): Promise<UserModel> {
    return this.#userRepository.create(model);
  }

  async delete(id: string): Promise<void> {
    await this.#userRepository.delete(id);
  }

  async get(params: FilterQuery<UserModel>): Promise<UserModel | null> {
    return this.#userRepository.get(params);
  }

  async getById(id: string): Promise<UserModel | null> {
    return this.#userRepository.getById(id);
  }

  async getAll(): Promise<UserModel[]> {
    return this.#userRepository.getAll();
  }

  async update(id: string, model: UserModel): Promise<UserModel | null> {
    return this.#userRepository.update(id, model);
  }

  async getPage(page: number, limit: number): Promise<UserModel[]> {
    return this.#userRepository.getPage(page, limit);
  }

}