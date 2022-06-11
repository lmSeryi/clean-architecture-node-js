import { Request, Response } from 'express';

import { DatabaseModel } from 'Infrastructure/Models';
import Database from 'Infrastructure/Database';

import { CourseService, CourseServiceModel } from 'Application/Services';

export default {
  async getAll(_req: Request, res: Response) {
    const db: DatabaseModel = new Database();
    await db.connectToDb();
    const courseService: CourseServiceModel = new CourseService();
    const coursesList = await courseService.getAll();
    await db.disconnect();
    res.json(coursesList);
  },

  async getById(req: Request, res: Response) {
    const db: DatabaseModel = new Database();
    await db.connectToDb();
    const courseService: CourseServiceModel = new CourseService();
    const course = await courseService.getById(req.params.id);
    await db.disconnect();
    res.json(course);
  },

  async create(req: Request, res: Response) {
    const db: DatabaseModel = new Database();
    await db.connectToDb();
    const courseService: CourseServiceModel = new CourseService();
    const course = await courseService.create(req.body);
    await db.disconnect();
    res.json(course);
  },

  async update(req: Request, res: Response) {
    const db: DatabaseModel = new Database();
    await db.connectToDb();
    const courseService: CourseServiceModel = new CourseService();
    const course = await courseService.update(req.body);
    await db.disconnect();
    res.json(course);
  },

  async delete(req: Request, res: Response) {
    const db: DatabaseModel = new Database();
    await db.connectToDb();
    const courseService: CourseServiceModel = new CourseService();
    const course = await courseService.delete(req.params.id);
    await db.disconnect();
    res.json(course);
  }
}