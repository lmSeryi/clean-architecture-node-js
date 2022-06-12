import BaseService from './BaseService.model';
import { CourseModel } from '@domain/Entities';

interface CourseServiceModel extends BaseService<CourseModel> {}

export default CourseServiceModel;