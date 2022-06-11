import { Request, Response } from 'express';

import { DatabaseModel } from 'Infrastructure/Models';
import Database from 'Infrastructure/Database';

import { UserService, UserServiceModel } from 'Application/Services';

export const getAll =  async (_req: Request, res: Response) => {
    const db: DatabaseModel = new Database();
    await db.connectToDb();
    const userService: UserServiceModel = new UserService();
    const usersList = await userService.getAll();
    await db.disconnect();
    res.json(usersList);
}

export const getById = async (req: Request, res: Response) => {
    const db: DatabaseModel = new Database();
    await db.connectToDb();
    const userService: UserServiceModel = new UserService();
    const user = await userService.getById(req.params.id);
    await db.disconnect();
    res.json(user);
}

export const create = async (req: Request, res: Response) => {
    const db: DatabaseModel = new Database();
    await db.connectToDb();
    const userService: UserServiceModel = new UserService();
    const user = await userService.create(req.body);
    await db.disconnect();
    res.json(user);
}

export const update = async (req: Request, res: Response) => {
    const db: DatabaseModel = new Database();
    await db.connectToDb();
    const userService: UserServiceModel = new UserService();
    const user = await userService.update(req.body);
    await db.disconnect();
    res.json(user);
}

export const remove = async (req: Request, res: Response) => {
    const db: DatabaseModel = new Database();
    await db.connectToDb();
    const userService: UserServiceModel = new UserService();
    const user = await userService.delete(req.params.id);
    await db.disconnect();
    res.json(user);
}
