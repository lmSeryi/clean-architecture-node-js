import { Request, Response } from 'express';

import { DatabaseModel } from 'Infrastructure/Models';
import Database from 'Infrastructure/Database';

import { StudentService, StudentServiceModel } from 'Application/Services';

export default {
  async getAll(_req: Request, res: Response) {
    const db: DatabaseModel = new Database();
    await db.connectToDb();
    const studentService: StudentServiceModel = new StudentService();
    const studentsList = await studentService.getAll();
    await db.disconnect();
    res.json(studentsList);
  },

  async getById(req: Request, res: Response) {
    const db: DatabaseModel = new Database();
    await db.connectToDb();
    const studentService: StudentServiceModel = new StudentService();
    const student = await studentService.getById(req.params.id);
    await db.disconnect();
    res.json(student);
  },

  async create(req: Request, res: Response) {
    const db: DatabaseModel = new Database();
    await db.connectToDb();
    const studentService: StudentServiceModel = new StudentService();
    const student = await studentService.create(req.body);
    await db.disconnect();
    res.json(student);
  },

  async update(req: Request, res: Response) {
    const db: DatabaseModel = new Database();
    await db.connectToDb();
    const studentService: StudentServiceModel = new StudentService();
    const student = await studentService.update(req.body);
    await db.disconnect();
    res.json(student);
  },

  async delete(req: Request, res: Response) {
    const db: DatabaseModel = new Database();
    await db.connectToDb();
    const studentService: StudentServiceModel = new StudentService();
    const student = await studentService.delete(req.params.id);
    await db.disconnect();
    res.json(student);
  }
}