import { Service } from 'typedi';

import { FilterQuery } from 'mongoose';
import { UserRepositoryModel } from './index';
import { User, UserModel } from '@domain/Entities';

@Service()
export default class UserRepository implements UserRepositoryModel {

	async create(model: UserModel): Promise<UserModel> {
		return new User(model).save();
	}

	async delete(id: string): Promise<void> {
		await User.deleteOne({ _id: id }).exec();
	}

	async get(params: FilterQuery<UserModel>): Promise<UserModel | null> {
		return User.findOne(params).exec();
	}

	async getById(id: string): Promise<UserModel | null> {
		return User.findById(id).exec();
	}

	async getAll(): Promise<UserModel[]> {
		return User.find().exec();
	}

	async update(id: string, model: UserModel): Promise<UserModel | null> {
		return User.findByIdAndUpdate(id, model).exec();
	}

	async getPage(page: number, limit: number): Promise<UserModel[]> {
		return User.find().skip((page - 1) * limit).limit(limit).exec();
	}

}