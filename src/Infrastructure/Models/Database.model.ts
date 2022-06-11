interface Database {
    connectToDb: () => Promise<void>;
    disconnect: () => Promise<void>;
}

export default Database;
