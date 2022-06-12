import { Request, Response } from 'express';

import { StudentService, StudentServiceModel } from '@app/Services';

import { dbAndDependency } from '@app/DependencyInjection';

type Student = typeof StudentService;
const startDbAndDependency = dbAndDependency<StudentServiceModel, Student>;

export default {
  async getAll(_req: Request, res: Response) {
    const { db, service } = await startDbAndDependency(StudentService);
    const studentsList = await service.getAll();
    await db.disconnect();
    res.json(studentsList);
  },

  async getById(req: Request, res: Response) {
    const { db, service } = await startDbAndDependency(StudentService);
    const student = await service.getById(req.params.id);
    await db.disconnect();
    res.json(student);
  },

  async create(req: Request, res: Response) {
    const { db, service } = await startDbAndDependency(StudentService);
    const student = await service.create(req.body);
    await db.disconnect();
    res.json(student);
  },

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { db, service } = await startDbAndDependency(StudentService);
    const student = await service.update(id, req.body);
    await db.disconnect();
    res.json(student);
  },

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const { db, service } = await startDbAndDependency(StudentService);
    const student = await service.delete(id);
    await db.disconnect();
    res.json(student);
  }
}