import { Request, Response } from 'express';

import { CourseService, CourseServiceModel } from '@app/Services';
import { dbAndDependency } from '@app/DependencyInjection';

type Course = typeof CourseService;
const startDbAndDependency = dbAndDependency<CourseServiceModel, Course>;

export default {
  async getAll(_req: Request, res: Response) {
    const { db, service } = await startDbAndDependency(CourseService);
    const coursesList = await service.getAll();
    await db.disconnect();
    res.json(coursesList);
  },

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    const { db, service } = await startDbAndDependency(CourseService);
    const course = await service.getById(id);
    await db.disconnect();
    res.json(course);
  },

  async create(req: Request, res: Response) {
    const { db, service } = await startDbAndDependency(CourseService);
    const course = await service.create(req.body);
    await db.disconnect();
    res.json(course);
  },

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { db, service } = await startDbAndDependency(CourseService);
    const course = await service.update(id, req.body);
    await db.disconnect();
    res.json(course);
  },

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const { db, service } = await startDbAndDependency(CourseService);
    const course = await service.delete(id);
    await db.disconnect();
    res.json(course);
  }
};