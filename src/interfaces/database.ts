export interface DatabaseConnection {
  connection: number;
}
export interface DatabaseSuccessConnection extends DatabaseConnection {
  hasError: false;
}

export interface DatabaseErrorConnection extends DatabaseConnection {
  hasError: true;
  error: string;
}

export type DatabaseConnectionResponse = DatabaseSuccessConnection | DatabaseErrorConnection;
