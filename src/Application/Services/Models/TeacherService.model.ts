import BaseService from './BaseService.model';
import { TeacherModel } from 'Domain/Entities';

interface TeacherServiceModel extends BaseService<TeacherModel> {}

export default TeacherServiceModel;