import BaseService from './BaseRepository.model';
import { CourseModel } from '@domain/Entities';

interface CourseRepositoryModel extends BaseService<CourseModel> {}

export default CourseRepositoryModel;