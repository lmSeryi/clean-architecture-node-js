import BaseService from './BaseRepository.model';
import { TeacherModel } from '@domain/Entities';

interface TeacherRepositoryModel extends BaseService<TeacherModel> {}

export default TeacherRepositoryModel;