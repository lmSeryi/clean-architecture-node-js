import { Container } from 'typedi';
import { DatabaseModel } from '@infra/Models';
import Database from '@infra/Database';

export const dbAndDependency = async <T, U>(staticClass: U) => {
  const service: T = Container.get(staticClass);
  const db: DatabaseModel = new Database();
  await db.connectToDb();
  return { db, service };
}
