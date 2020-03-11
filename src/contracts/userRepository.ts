import { User } from '../models/User';

export interface UserRepository {
  users(): Promise<User[]>;
}
