import BaseService from './BaseRepository.model';
import { UserModel } from '@domain/Entities';

interface UserRepositoryModel extends BaseService<UserModel> {}

export default UserRepositoryModel;
