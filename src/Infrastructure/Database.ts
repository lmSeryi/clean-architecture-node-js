import mongoose from 'mongoose';
import type { DatabaseModel } from './Models';


export default class Database implements DatabaseModel {
  #connection: number = 0;
  /**
   * 0 = disconnected
   * 1 = connected
   * 2 = connecting
   * 3 = disconnecting
   */

  async connectToDb() {
    console.log(process.env.MONGODB_URI);
    if (this.#connection == 1) return
    if (mongoose.connections.length > 0) {
      this.#connection = 1;
      this.#connection = mongoose.connections[0].readyState;

      if (this.#connection === 1) return;
    }
    await mongoose.connect(process.env.MONGODB_URI || "");
    this.#connection = 1;
  }

  async disconnect() {
    if (process.env.NODE_ENV === 'development') return;
    if (this.#connection === 0) return;
    await mongoose.disconnect();
  }
}
