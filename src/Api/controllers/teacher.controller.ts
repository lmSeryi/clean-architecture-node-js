import { Request, Response } from 'express';

import { TeacherService, TeacherServiceModel } from '@app/Services';
import { dbAndDependency } from '@app/DependencyInjection';

type Teacher = typeof TeacherService;
const startDbAndDependency = dbAndDependency<TeacherServiceModel, Teacher>;

export default {
  async getAll(_req: Request, res: Response) {
    const { service, db } = await startDbAndDependency(TeacherService);
    const teachersList = await service.getAll();
    await db.disconnect();
    res.json(teachersList);
  },

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    const { service, db } = await startDbAndDependency(TeacherService);
    const teacher = await service.getById(id);
    await db.disconnect();
    res.json(teacher);
  },

  async create(req: Request, res: Response) {
    const { service, db } = await startDbAndDependency(TeacherService);
    const teacher = await service.create(req.body);
    await db.disconnect();
    res.json(teacher);
  },

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { service, db } = await startDbAndDependency(TeacherService);
    const teacher = await service.update(id, req.body);
    await db.disconnect();
    res.json(teacher);
  },

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const { service, db } = await startDbAndDependency(TeacherService);
    const teacher = await service.delete(id);
    await db.disconnect();
    res.json(teacher);
  }
};