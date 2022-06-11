import { FilterQuery } from 'mongoose';

interface BaseServiceModel<CollectionModel> {
  get(params: FilterQuery<CollectionModel>): Promise<CollectionModel | null>;
  getById(id: string): Promise<CollectionModel | null>;
  getPage(page: number, limit: number): Promise<CollectionModel[]>;
  getAll(): Promise<CollectionModel[]>;
  create(model: CollectionModel): Promise<CollectionModel>;
  update(model: CollectionModel): Promise<CollectionModel | null>;
  delete(id: string): Promise<void>;
}

export default BaseServiceModel;
