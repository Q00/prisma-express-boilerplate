import { User } from '../models/User';
import { Service } from 'typedi';

@Service()
export class UserService {
  async getUsers(): Promise<User[]> {
    return [];
  }
}
