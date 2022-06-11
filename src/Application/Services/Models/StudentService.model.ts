import BaseService from './BaseService.model';
import { StudentModel } from 'Domain/Entities';

interface StudentServiceModel extends BaseService<StudentModel> {}

export default StudentServiceModel;