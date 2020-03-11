import { User } from '../models/User';
import { Service } from 'typedi';
import { UserRepository } from '../contracts/UserRepository';

@Service()
export class UserService {
  constructor(private userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async getUsers(): Promise<User[]> {
    const users = await this.userRepository.users();
    return users;
  }
}
