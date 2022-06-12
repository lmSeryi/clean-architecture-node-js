import { Container, Token } from 'typedi';
import { DatabaseModel } from '@infra/Models';
import Database from '@infra/Database';

export const dbAndDependency = async <Model, Class>(StaticClass: Class) => {
  const service: Model = Container.get<Model>(StaticClass as Token<Class>);
  const db: DatabaseModel = new Database();
  await db.connectToDb();
  return { db, service };
};
