import { Request, Response } from 'express';

import { UserService, UserServiceModel } from '@app/Services';
import { createUserValidation, updateUserValidation } from '@app/Validations';
import { dbAndDependency } from '@app/DependencyInjection';

type User = typeof UserService;
const startDbAndDependency = dbAndDependency<UserServiceModel, User>;

export default {
  async getAll(_req: Request, res: Response) {
    const { service, db } = await startDbAndDependency(UserService);
    const usersList = await service.getAll();
    await db.disconnect();
    res.status(200).json(usersList);
  },

  async getById(req: Request, res: Response) {
    const { service, db } = await startDbAndDependency(UserService);
    const user = await service.getById(req.params.id);
    await db.disconnect();
    res.json(user);
  },

  async create(req: Request, res: Response) {
    const validationResult = await createUserValidation.safeParseAsync(req.body);
    if (!validationResult.success) {
      const response = validationResult.error.flatten();
      return res.status(400).json({ ...response.fieldErrors });
    }
    const { service, db } = await startDbAndDependency(UserService);
    try {
      const user = await service.create(req.body);
      await db.disconnect();
      res.status(201).json(user);
    } catch (error: unknown) {
      await db.disconnect();
      const message = error instanceof Error ? error.message : 'Unknown error';
      res.status(400).json({ error: message });
    }
  },

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const validationResult = await updateUserValidation.safeParseAsync(req.body);
    if (!validationResult.success) {
      const response = validationResult.error.flatten();
      return res.status(400).json({ ...response.fieldErrors });
    }
    const { service, db } = await startDbAndDependency(UserService);
    const user = await service.update(id, req.body);
    await db.disconnect();
    res.json(user);
  },

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const { service, db } = await startDbAndDependency(UserService);
    const user = await service.delete(id);
    await db.disconnect();
    res.json(user);
  },
};
