import BaseService from './BaseService.model';
import { StudentModel } from '@domain/Entities';

interface StudentServiceModel extends BaseService<StudentModel> {}

export default StudentServiceModel;