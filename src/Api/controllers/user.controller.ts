import { Request, Response } from 'express';

import { DatabaseModel } from 'Infrastructure/Models';
import Database from 'Infrastructure/Database';

import { UserService, UserServiceModel } from 'Application/Services';

export default {
  async getAll(_req: Request, res: Response) {
    const db: DatabaseModel = new Database();
    await db.connectToDb();
    const userService: UserServiceModel = new UserService();
    const usersList = await userService.getAll();
    await db.disconnect();
    res.json(usersList);
  },

  async getById(req: Request, res: Response) {
    const db: DatabaseModel = new Database();
    await db.connectToDb();
    const userService: UserServiceModel = new UserService();
    const user = await userService.getById(req.params.id);
    await db.disconnect();
    res.json(user);
  },

  async create(req: Request, res: Response) {
    const db: DatabaseModel = new Database();
    await db.connectToDb();
    const userService: UserServiceModel = new UserService();
    const user = await userService.create(req.body);
    await db.disconnect();
    res.json(user);
  },

  async update(req: Request, res: Response) {
    const db: DatabaseModel = new Database();
    await db.connectToDb();
    const userService: UserServiceModel = new UserService();
    const user = await userService.update(req.body);
    await db.disconnect();
    res.json(user);
  },

  async delete(req: Request, res: Response) {
    const db: DatabaseModel = new Database();
    await db.connectToDb();
    const userService: UserServiceModel = new UserService();
    const user = await userService.delete(req.params.id);
    await db.disconnect();
    res.json(user);
  }
}