import { DatabaseConnection } from '../../interfaces';

interface Database {
    connectToDb: () => Promise<DatabaseConnection>;
    disconnect: () => Promise<DatabaseConnection>;
}

export default Database;
