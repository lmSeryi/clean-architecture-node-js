import BaseService from './BaseService.model';
import { UserModel } from '@domain/Entities';

interface UserServiceModel extends BaseService<UserModel> {}

export default UserServiceModel;
