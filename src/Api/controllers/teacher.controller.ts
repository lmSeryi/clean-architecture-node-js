import { Request, Response } from 'express';

import { DatabaseModel } from 'Infrastructure/Models';
import Database from 'Infrastructure/Database';

import { TeacherService, TeacherServiceModel } from 'Application/Services';

export default {
  async getAll(_req: Request, res: Response) {
    const db: DatabaseModel = new Database();
    await db.connectToDb();
    const teacherService: TeacherServiceModel = new TeacherService();
    const teachersList = await teacherService.getAll();
    await db.disconnect();
    res.json(teachersList);
  },

  async getById(req: Request, res: Response) {
    const db: DatabaseModel = new Database();
    await db.connectToDb();
    const teacherService: TeacherServiceModel = new TeacherService();
    const teacher = await teacherService.getById(req.params.id);
    await db.disconnect();
    res.json(teacher);
  },

  async create(req: Request, res: Response) {
    const db: DatabaseModel = new Database();
    await db.connectToDb();
    const teacherService: TeacherServiceModel = new TeacherService();
    const teacher = await teacherService.create(req.body);
    await db.disconnect();
    res.json(teacher);
  },

  async update(req: Request, res: Response) {
    const db: DatabaseModel = new Database();
    await db.connectToDb();
    const teacherService: TeacherServiceModel = new TeacherService();
    const teacher = await teacherService.update(req.body);
    await db.disconnect();
    res.json(teacher);
  },

  async delete(req: Request, res: Response) {
    const db: DatabaseModel = new Database();
    await db.connectToDb();
    const teacherService: TeacherServiceModel = new TeacherService();
    const teacher = await teacherService.delete(req.params.id);
    await db.disconnect();
    res.json(teacher);
  }
}