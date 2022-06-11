import BaseService from './BaseService.model';
import { CourseModel } from 'Domain/Entities';

interface CourseServiceModel extends BaseService<CourseModel> {}

export default CourseServiceModel;