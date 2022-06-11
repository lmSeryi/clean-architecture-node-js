import BaseService from './BaseService.model';
import { UserModel } from 'Domain/Entities';

interface UserServiceModel extends BaseService<UserModel> {}

export default UserServiceModel;