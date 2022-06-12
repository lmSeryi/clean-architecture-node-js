import BaseService from './BaseRepository.model';
import { StudentModel } from '@domain/Entities';

interface StudentRepositoryModel extends BaseService<StudentModel> {}

export default StudentRepositoryModel;