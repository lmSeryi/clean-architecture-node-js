import mongoose from 'mongoose';
import type { DatabaseModel } from './Models';
import { DatabaseConnectionResponse } from '../interfaces';


export default class Database implements DatabaseModel {
  #connection = 0;
  /**
   * 0 = disconnected
   * 1 = connected
   * 2 = connecting
   * 3 = disconnecting
   */

  async connectToDb(): Promise<DatabaseConnectionResponse> {
    if (this.#connection === 1) return { connection: 1, hasError: false };
    try {
      if (mongoose.connections.length > 0) {
        this.#connection = 1;
        this.#connection = mongoose.connections[0].readyState;

        if (this.#connection === 1) return { connection: 1, hasError: false };
      }
      console.log('Connecting to database...');
      console.log(process.env.DB_URI);
      await mongoose.connect(process.env.DB_URI || '');
      console.log('Connected to database');
      this.#connection = 1;
      return { connection: 1, hasError: false };
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      this.#connection = 0;
      return { connection: 0, error: message, hasError: true };
    }
  }

  async disconnect(): Promise<DatabaseConnectionResponse> {
    if (process.env.NODE_ENV === 'development') return { connection: 1, hasError: false };
    if (this.#connection === 0) return { connection: 0, hasError: false };
    try {
      await mongoose.disconnect();
      this.#connection = 0;
      return { connection: 0, hasError: false };
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      return { connection: 0, error: message, hasError: true };
    }
  }
}
