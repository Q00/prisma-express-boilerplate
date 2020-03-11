import { User } from '../models/User';

export interface Repository {
  users(): Promise<User[]>;
}
