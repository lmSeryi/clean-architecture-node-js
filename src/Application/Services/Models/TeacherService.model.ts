import BaseService from './BaseService.model';
import { TeacherModel } from '@domain/Entities';

interface TeacherServiceModel extends BaseService<TeacherModel> {}

export default TeacherServiceModel;