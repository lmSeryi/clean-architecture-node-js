import { Router } from 'express';
import Database from 'Infrastructure/Database'
import { UserService, UserServiceModel } from 'Application/Services';
import { DatabaseModel } from 'Infrastructure/Models';

const userRouter = Router();

userRouter.get('/', async (req, res) => {
  const db: DatabaseModel = new Database();
  await db.connectToDb();
  const userService: UserServiceModel = new UserService();
  const usersList = await userService.getAll();
  await db.disconnect();
  res.json(usersList);
});

userRouter.get('/:id', async (req, res) => {
  const db: DatabaseModel = new Database();
  await db.connectToDb();
  const userService: UserServiceModel = new UserService();
  const user = await userService.getById(req.params.id);
  await db.disconnect();
  res.json(user);
});

userRouter.post('/', async (req, res) => {
  const db: DatabaseModel = new Database();
  await db.connectToDb();
  const userService: UserServiceModel = new UserService();
  const user = await userService.create(req.body);
  await db.disconnect();
  res.json(user);
});

export default userRouter;